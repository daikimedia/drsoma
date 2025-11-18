# GitHub Actions Setup Guide

This guide explains how to configure GitHub Actions for automated deployment of the Dr. Soma website to testing and production environments.

## Overview

The workflow automatically deploys to different environments based on the branch:
- **`test` branch** → Testing environment (port 4000)
- **`master` branch** → Production environment (port 3000)

## Required GitHub Secrets

### Test Environment Secrets

Add these secrets in your GitHub repository settings under **Settings > Secrets and variables > Actions**:

#### Server Configuration
- `SSH_HOST_TEST` - Test server IP address
- `SSH_KEY_TEST` - Private SSH key for test server access
- `GOOGLE_CHAT_ALERT_TEST` - Google Chat webhook URL for test notifications

#### Environment Variables
- `NEXT_PUBLIC_API_URL_TEST` - API URL for test environment
- `NEXT_PUBLIC_CMS_API_KEY_TEST` - CMS API key for test environment
- `NEXT_PUBLIC_SITE_URL_TEST` - Site URL for test environment (e.g., `https://test.drsomaplasticsurgery.com`)
- `NEXT_PUBLIC_GA_ID_TEST` - Google Analytics ID for test environment
- `MAILGUN_API_KEY_TEST` - Mailgun API key for test environment
- `MAILGUN_DOMAIN_TEST` - Mailgun domain for test environment
- `CONTACT_FORM_RECIPIENTS_TEST` - Comma-separated email addresses for test contact form
- `YOUTUBE_API_KEY_TEST` - YouTube API key for test environment
- `YOUTUBE_CHANNEL_ID_TEST` - YouTube channel ID for test environment

### Production Environment Secrets

#### Server Configuration
- `SSH_HOST_PROD` - Production server IP address
- `SSH_KEY_PROD` - Private SSH key for production server access
- `GOOGLE_CHAT_ALERT_PROD` - Google Chat webhook URL for production notifications

#### Environment Variables
- `NEXT_PUBLIC_API_URL_PROD` - API URL for production environment
- `NEXT_PUBLIC_CMS_API_KEY_PROD` - CMS API key for production environment
- `NEXT_PUBLIC_SITE_URL_PROD` - Site URL for production environment (e.g., `https://drsomaplasticsurgery.com`)
- `NEXT_PUBLIC_GA_ID_PROD` - Google Analytics ID for production environment
- `MAILGUN_API_KEY_PROD` - Mailgun API key for production environment
- `MAILGUN_DOMAIN_PROD` - Mailgun domain for production environment
- `CONTACT_FORM_RECIPIENTS_PROD` - Comma-separated email addresses for production contact form
- `YOUTUBE_API_KEY_PROD` - YouTube API key for production environment
- `YOUTUBE_CHANNEL_ID_PROD` - YouTube channel ID for production environment

## Workflow Features

### Build Process
1. **Checkout code** from the respective branch
2. **Setup Node.js 20.x** with npm caching
3. **Install dependencies** using `npm ci --legacy-peer-deps`
4. **Build application** with environment-specific configuration:
   - Test: `npm run build:testing`
   - Production: `npm run build:production`

### Deployment Process
1. **Copy files** to server using SCP
2. **Install production dependencies** on server
3. **Restart PM2 process** with new code
4. **Save PM2 configuration** for persistence

### Notifications
- **Google Chat notifications** for both test and production deployments
- **Status updates** on build success/failure

## Server Requirements

### Test Server
- **Port:** 4000
- **PM2 Process:** `drsoma-test`
- **Directory:** `/website/test`

### Production Server
- **Port:** 3000
- **PM2 Process:** `drsoma-prod`
- **Directory:** `/website/prod`

## Environment-Specific Builds

The workflow uses different build commands based on the environment:

```bash
# Test environment
npm run build:testing  # Copies .env.testing to .env.local

# Production environment  
npm run build:production  # Copies .env.production to .env.local
```

## Manual Deployment

You can trigger manual deployments using the **workflow_dispatch** trigger:
1. Go to **Actions** tab in GitHub
2. Select **Deploy Environment** workflow
3. Click **Run workflow**
4. Select the branch to deploy

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check environment variables are properly set
   - Verify API keys and URLs are correct
   - Ensure all required secrets are configured

2. **Deployment Failures**
   - Verify SSH keys are correct
   - Check server connectivity
   - Ensure PM2 is installed on servers

3. **Environment Issues**
   - Verify environment-specific variables are set
   - Check API endpoints are accessible
   - Ensure domain configurations are correct

### Logs and Monitoring

- **GitHub Actions logs** provide detailed build and deployment information
- **PM2 logs** on servers show application runtime information
- **Google Chat notifications** provide deployment status updates

## Security Considerations

- All sensitive data is stored as GitHub Secrets
- SSH keys should be generated specifically for deployment
- Environment variables are injected during build time
- Production secrets should be rotated regularly

## Performance Optimizations

- **npm caching** reduces build times
- **npm ci** ensures consistent dependency installation
- **PM2 process management** provides automatic restarts
- **Production-only dependencies** reduce server footprint (using `--omit=dev`)
