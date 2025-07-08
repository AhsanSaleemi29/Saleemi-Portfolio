# Portfolio Website

## Overview

This is a modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. The application features a full-stack architecture with Express.js backend and includes a contact form functionality with data persistence. The portfolio showcases sections for hero/introduction, about, skills, projects, testimonials, and contact information.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, Vite build system, Tailwind CSS for styling
- **Backend**: Express.js with TypeScript, RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage currently)
- **UI Components**: Radix UI primitives with custom styling via shadcn/ui
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Structure**: Organized into portfolio-specific components (`/client/src/components/portfolio/`)
- **UI System**: Comprehensive component library using Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive behavior
- **Form Handling**: Contact form with validation and error handling

### Backend Architecture
- **API Layer**: Express.js with TypeScript for type safety
- **Route Organization**: Centralized route registration in `/server/routes.ts`
- **Data Layer**: Abstracted storage interface supporting both in-memory and database implementations
- **Error Handling**: Centralized error handling middleware
- **Development Tools**: Vite integration for hot module replacement

### Data Storage
- **Current Implementation**: In-memory storage using Maps for users and contacts
- **Future-Ready**: Drizzle ORM configuration for PostgreSQL migration
- **Schema Definition**: Shared schema definitions using Drizzle and Zod for validation

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form (name, email, message)
   - Client-side validation using Zod schema
   - Form data sent to `/api/contact` endpoint
   - Server validates and stores contact information
   - Success response triggers confirmation modal

2. **Portfolio Navigation**:
   - Smooth scrolling navigation between sections
   - Active section highlighting using scroll spy
   - Responsive navigation with mobile sheet overlay

3. **Asset Management**:
   - Static assets served from `/attached_assets/`
   - CV download functionality
   - Project images from external sources (Unsplash)

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18 with TypeScript support
- **UI Framework**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS processing
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM with Zod integration
- **Session Management**: Connect-pg-simple for session storage
- **Development**: TSX for TypeScript execution

### Development Tools
- **Build System**: Vite for fast development and optimized builds
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESBuild for production bundling
- **Development Server**: Vite dev server with HMR

## Deployment Strategy

The application is configured for production deployment with:

1. **Build Process**:
   - Frontend: Vite builds to `/dist/public/`
   - Backend: ESBuild bundles server code to `/dist/`
   - TypeScript compilation for type checking

2. **Environment Configuration**:
   - Database connection via `DATABASE_URL` environment variable
   - Production vs development mode handling
   - Static asset serving configuration

3. **Server Setup**:
   - Express server with static file serving
   - API routes under `/api/` prefix
   - Development-specific Vite middleware integration

## Changelog

```
Changelog:
- July 08, 2025. Initial setup with Alex Johnson portfolio
- July 08, 2025. Updated portfolio for Ahsan Saleemi with:
  - Changed name from Alex Johnson to Ahsan Saleemi
  - Added pink-purple gradient background for hero section
  - Updated profile image to Ahsan's photo
  - Added Ahsan's actual CV and contact information
  - Updated skills to match Ahsan's technical expertise
  - Modified projects to reflect Ahsan's actual work
  - Updated testimonials with references from Ahsan's CV
  - Changed location from San Francisco to Lahore, Pakistan
  - Updated email and phone number to Ahsan's details
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```