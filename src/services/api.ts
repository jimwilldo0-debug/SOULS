import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

class ApiClient {
  private client: AxiosInstance;
  private token?: string;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE,
      timeout: 10000,
    });

    // Add request interceptor for auth
    this.client.interceptors.request.use(async (config) => {
      const token = await this.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.initToken();
  }

  private async initToken() {
    this.token = await AsyncStorage.getItem('auth_token');
  }

  private async getToken() {
    if (!this.token) {
      this.token = await AsyncStorage.getItem('auth_token');
    }
    return this.token;
  }

  async setToken(token: string) {
    this.token = token;
    await AsyncStorage.setItem('auth_token', token);
  }

  async clearToken() {
    this.token = undefined;
    await AsyncStorage.removeItem('auth_token');
  }

  // Auth endpoints
  async signup(email: string, password: string, displayName: string, dob?: string) {
    const response = await this.client.post('/auth/signup', {
      email,
      password,
      displayName,
      dob,
    });
    return response.data;
  }

  async signin(email: string, password: string) {
    const response = await this.client.post('/auth/signin', {
      email,
      password,
    });
    const { token, user } = response.data;
    await this.setToken(token);
    return { token, user };
  }

  async verify(token: string) {
    const response = await this.client.post('/auth/verify', { token });
    return response.data;
  }

  // Image upload
  async uploadImage(
    imageData: string,
    filename: string,
    metadata?: Record<string, any>
  ) {
    const formData = new FormData();
    formData.append('file', {
      uri: imageData,
      type: 'image/jpeg',
      name: filename,
    } as any);

    if (metadata) {
      formData.append('metadata', JSON.stringify(metadata));
    }

    const response = await this.client.post('/upload/image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  }

  // Assets / Stickers
  async getAssets(category?: string, query?: string, page = 1, limit = 50) {
    const response = await this.client.get('/assets', {
      params: { category, query, page, limit },
    });
    return response.data;
  }

  // Posts
  async createPost(postData: any) {
    const response = await this.client.post('/posts', postData);
    return response.data;
  }

  async getPost(postId: string) {
    const response = await this.client.get(`/posts/${postId}`);
    return response.data;
  }

  async getSavedPosts(page = 1, limit = 20) {
    const response = await this.client.get('/users/saved', {
      params: { page, limit },
    });
    return response.data;
  }

  // Sharing
  async shareToInstagram(postId: string) {
    const response = await this.client.post('/share/instagram', { postId });
    return response.data;
  }

  async shareToThreads(postId: string) {
    const response = await this.client.post('/share/threads', { postId });
    return response.data;
  }

  // Settings
  async getSettings() {
    const response = await this.client.get('/users/settings');
    return response.data;
  }

  async updateSettings(settings: any) {
    const response = await this.client.put('/users/settings', settings);
    return response.data;
  }

  // Themes
  async getThemes() {
    const response = await this.client.get('/themes');
    return response.data;
  }

  // Error handling utility
  handleError(error: any) {
    if (error.response?.status === 401) {
      this.clearToken();
      return { error: 'Unauthorized', code: 401 };
    }
    return {
      error: error.response?.data?.message || error.message,
      code: error.response?.status || 500,
    };
  }
}

export const apiClient = new ApiClient();
