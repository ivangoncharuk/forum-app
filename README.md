# forum-app
A better name and logo will be applied to this if I decide to keep working on it :)

## Overview

The project is a minimalist image board application inspired by platforms like 4chan, aimed at small-scale use with up to 300 users. It facilitates anonymous posting of threads and replies across predefined boards, offering optional tripcodes for identity, manual moderation tools, and modern security features.

## Key Features (subject to change)
- [ ] Anonymous posting with session-based persistent IDs.
- [ ] Optional tripcodes for user identification.
- [ ] Moderation tools, including a dashboard for content review and manual deletion.
- [ ] Image uploads with size restrictions (5MB max per image).
- [ ] CAPTCHA-based anti-bot protections.
- [ ] Flagging system for inappropriate posts.
- [ ] Responsive and mobile-friendly design.
- [ ] Secure API interactions with HTTPS.

## Tech Stack

### Frontend
- **Framework**: Next.js
- **UI Library**: Tailwind CSS, shadcn
- **Deployment**: Vercel
- **Features**:
  - [ ] Dynamically render threads and posts.
  - [x] Form submissions for creating threads and posts.
  - [x] Responsive, mobile-friendly UI.
  - [ ] Secure API interactions via HTTPS.

### Backend
- **Framework**: Deno (Oak Framework)
- **Database**: PostgreSQL
- **Deployment**: Deno Deploy
- **Image Storage**: S3-compatible storage (e.g., AWS S3, Backblaze B2, or Cloudflare R2)
- **Security**:
  - [ ] Rate limiting (session or IP-based).
  - [ ] Optional IP masking via hashed storage.
  - [ ] Input validation for threads, posts, and uploads.
  - [ ] CAPTCHA integration for bot prevention.
- **Features**:
  - [ ] API endpoints for threads, posts, and image uploads.
  - [ ] Temporary session tracking using cookies.
  - [ ] Content moderation tools (e.g., keyword filtering).
  - [ ] Error logging and monitoring.

### Database
- **Type**: PostgreSQL
- ORM: Prisma

### Security
- **Cloudflare**:
  - DDoS protection.
  - SSL/TLS encryption.
- **Backend Security**:
  - Rate-limiting middleware.
  - Session tracking with temporary user IDs.
  - CSRF prevention for form submissions.
  - Input sanitization and validation.
  - CAPTCHA for bot protection.

## Usage and Scalability

The app is optimized for small-scale use with a cap of 300 users, ensuring low operational costs while maintaining performance. It uses manual moderation and basic tools to ensure compliance and manage content effectively.
