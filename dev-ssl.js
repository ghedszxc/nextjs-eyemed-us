#!/usr/bin/env node

// Set environment variable to disable SSL verification for development
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// Import and run Next.js dev server
const { spawn } = require('child_process')

console.log('🔧 Starting development server with SSL verification disabled...')

const nextDev = spawn('next', ['dev'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_TLS_REJECT_UNAUTHORIZED: '0',
  },
})

nextDev.on('error', err => {
  console.error('Failed to start Next.js dev server:', err)
  process.exit(1)
})

nextDev.on('close', code => {
  process.exit(code)
})
