/**
 * Main entry point for the application
 * 
 * This file initializes and starts the application server.
 * It loads environment variables and sets up core functionality.
 */

// Load environment variables from .env file
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const NODE_ENV = process.env.NODE_ENV || 'development';
const DEBUG = process.env.DEBUG === 'true';

/**
 * Application initialization function
 * Sets up the server and all necessary configurations
 */
function initializeApp() {
  console.log('\n🚀 Starting application...');
  console.log(`📋 Environment: ${NODE_ENV}`);
  console.log(`🔌 Host: ${HOST}`);
  console.log(`🎯 Port: ${PORT}`);
  console.log(`🐛 Debug mode: ${DEBUG ? 'enabled' : 'disabled'}\n`);
  
  // Application initialization logic
  setupRoutes();
  setupErrorHandling();
  startServer();
  
  console.log('✅ Application initialized successfully!\n');
}

/**
 * Setup application routes
 */
function setupRoutes() {
  console.log('📍 Setting up routes...');
  // Your routes configuration here
}

/**
 * Setup error handling
 */
function setupErrorHandling() {
  console.log('⚠️  Setting up error handling...');
  
  // Handle uncaught exceptions
  process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught Exception:', error);
    process.exit(1);
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  });
}

/**
 * Start the server
 */
function startServer() {
  console.log('🌐 Starting server...');
  
  if (DEBUG) {
    console.log('🔍 Debug information:');
    console.log('   NODE_ENV:', process.env.NODE_ENV);
    console.log('   PORT:', process.env.PORT);
  }
  
  // Simulate server startup
  console.log(`✨ Server is listening on http://${HOST}:${PORT}`);
}

/**
 * Graceful shutdown handler
 */
function handleShutdown() {
  console.log('\n👋 Shutting down gracefully...');
  console.log('✅ Application closed\n');
  process.exit(0);
}

// Handle shutdown signals
process.on('SIGTERM', handleShutdown);
process.on('SIGINT', handleShutdown);

// Start the application if this is the main module
if (require.main === module) {
  initializeApp();
}

// Export for testing purposes
module.exports = {
  initializeApp,
  setupRoutes,
  setupErrorHandling,
  startServer,
  handleShutdown
};
