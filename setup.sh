#!/bin/bash

# SOULS Quick Start Script
# Automates initial setup for development

echo "🚀 SOULS Quick Start Setup"
echo "=========================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+"
    exit 1
fi

echo "✅ Node.js $(node -v)"

# Check Docker
if ! command -v docker &> /dev/null; then
    echo "⚠️  Docker not found. Backend will not run. Install from https://www.docker.com/products/docker-desktop"
else
    echo "✅ Docker $(docker --version)"
fi

echo ""
echo "📦 Installing dependencies..."
npm install

if [ ! -f .env ]; then
    echo "📝 Creating .env from .env.example..."
    cp .env.example .env
    echo "   ⚠️  Update .env with your settings if needed"
fi

echo ""
echo "🐳 Starting backend services (Docker)..."
docker-compose up -d

# Wait for services
echo "⏳ Waiting for services to start..."
sleep 3

# Check backend health
if curl -s http://localhost:3000/health > /dev/null 2>&1; then
    echo "✅ Backend is running on http://localhost:3000"
else
    echo "⚠️  Backend health check failed. Run: docker-compose logs backend"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "📱 Start developing:"
echo "   npm start"
echo ""
echo "📚 Read the guide:"
echo "   cat LAUNCH_README.md"
echo ""
echo "🛑 Stop services:"
echo "   docker-compose down"
echo ""
