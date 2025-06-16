# HTV Technical Assessment

Build a **multi-tenant Request Hub** that demonstrates your ability to create production-ready SaaS applications with real-time features, clean architecture, and modern tooling.

## What You're Building

A mini version of HTV's Request Hub featuring:
- **Multi-tenant authentication** with company switching
- **Request submission** that creates Linear tasks  
- **Real-time status updates** via webhooks
- **Admin dashboard** for cross-tenant visibility
- **Clean, professional UI** using modern design patterns

## Core Requirements (Must Have)

### 1. Multi-Tenant Authentication
- Use Clerk for authentication with organization support
- Support switching between two test companies
- Proper data isolation per tenant
- Role-based access (user vs admin vs super-admin)

### 2. Request Management  
- Submit request form (title, category, description)
- Store in PostgreSQL with tenant isolation
- Automatically create Linear task on submission
- Display request list filtered by company

### 3. Real-Time Updates
- Implement webhook endpoint for Linear status changes
- Push updates to UI in real-time (Pusher/Ably recommended)
- Show status changes without page refresh
- Handle connection/reconnection gracefully

### 4. Admin Dashboard
- View requests across all tenants
- Filter by company
- Basic impersonation capability
- Request status management

### 5. Professional UI
- Use Tailwind CSS + shadcn/ui
- Responsive design (mobile-friendly)
- Loading states and error handling
- Clean, modern SaaS aesthetic

## Bonus Features (Scoring)

| Feature | Points | Description |
|---------|--------|-------------|
| **E2E Testing** | +3 | Playwright tests covering auth, request flow, and real-time updates |
| **CI/CD Pipeline** | +3 | GitHub Actions with lint, test, build, and deploy to Cloud Run |
| **Advanced Real-time** | +2 | WebSocket implementation with reconnection logic |
| **Architecture Documentation** | +2 | C4 diagram + 3-minute Loom walkthrough |
| **Performance Optimization** | +2 | Caching, optimistic updates, or other performance enhancements |
| **Error Monitoring** | +1 | Sentry integration with proper error boundaries |
| **Docker Support** | +1 | Multi-stage Dockerfile with docker-compose for local dev |

## Tech Stack

**Required:**
- **Framework:** Next.js 15+ with App Router
- **Database:** PostgreSQL + Prisma ORM  
- **Auth:** Clerk (organizations enabled)
- **Real-time:** Pusher or Ably
- **UI:** Tailwind CSS + shadcn/ui
- **Integration:** Linear API

**Deployment Options:**
- Vercel

### Required Deliverables
- Live deployed application (include URL in PR)
- Working authentication with 2 test companies
- Request creation that creates Linear tasks
- Real-time status updates (demonstrate in Loom)
- Admin dashboard with cross-tenant view
- 3-5 minutes Loom walkthrough of your implementation

## Submission Instructions

1. Build your solution following the requirements
2. Deploy to production (Vercel, Cloud Run, etc.)
3. Record 3-5 minute Loom explaining your architecture and demonstrating key features
4. Open Pull Request with:
   - Live application URL
   - Loom video link  
   - Bonus features completed
   - Any setup notes or assumptions

## Loom Walkthrough Requirements

Your 3-5 minute video should cover:
- **Architecture overview** - high-level system design decisions
- **Multi-tenancy implementation** - how you ensure data isolation
- **Real-time features** - demonstrate webhook → UI updates
- **Key challenges** - what was difficult and how you solved it
- **Code quality highlights** - show examples of clean patterns you used