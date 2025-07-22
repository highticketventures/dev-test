# So You Want to Be Our ***Founding Engineer***?

If you’re reading this, it means your application *impressed us* and now we want to see what you can build.

At High Ticket Ventures, we’re looking for a **world-class founding engineer**—an outlier who’s hungry to own product from day one and help us build the platform from the ground up.

The companies we back will rely on this platform to get critical work done—hiring top talent, accelerating growth, and unlocking capital. We’re building the operating system they’ll run on.

>**Everything you need to succeed is outlined below.** Most candidates lose points simply for not reading. If you follow instructions, check the [FAQs](FAQs.md) before asking questions, and match the design closely—you’re already ahead of 99% of applicants.

Our goal is to stress-test your fullstack and give you an opportunity to show us you can move fast, ship production-grade code, hold your work to the highest standards, and build like a co-founder—without anyone looking over your shoulder.

**The task is simple:** Build a multi-tenant Request Hub.

It’s the foundation of the real HTV platform founders will use every day to request help from our team—whether it's hiring, sales, product, or capital.

If you’re excited to help build the platform that will power 1,000+ companies over the next decade—and want to work on something with uncapped potential from day one—this is your proving ground.

Let’s get started.

---
## What You’re Building

A production-ready Request Hub that demonstrates your ability to:

- Build multi-tenant SaaS architecture from scratch
- Integrate external APIs (like Linear) with clean workflows
- Handle real-time UI updates via webhooks or sockets
- Design polished, responsive interfaces using a modern UI kit
- Think clearly about structure, ownership, and performance

The end product should feel like something that could be shipped to production *today.*

## What It Should Look Like
(_aka: Follow the Damn Design_)

We sweat the details. Our designer put serious craft into a production-ready interface. We’re proud of the work, and we ask that you **respect it** by following it as closely as possible.

You’ll be working off this [**Figma file.**](https://www.figma.com/design/9nHi8AAW02RvGYRWXyQDa0/Dev-Test---Design?node-id=2279-2473&t=h0S7EhFtxjtkfdQ5-1)

✅ Pixel-perfect execution shows you respect the product.  
❌ Loose interpretations, missing states, or lazy styling will hurt your score.

> **Pro Tip:** If something’s unclear or missing, *ask.*

---
## Core Features (Must-Haves)

### 1. Multi-Tenant Auth & Access Control

- Use **Clerk** for auth, with organizations enabled
- Support switching between **two test companies**
- Enforce **strict tenant isolation**
- Implement **role-based access** (user, admin, super-admin)

### 2. Request Submission & Storage

- Basic form with title, category, and description
- Store request in **PostgreSQL**, scoped to the correct org
- Automatically create a task in **Linear** on submission
- Display filtered list of requests (one company per user)

### 3. Real-Time Status Updates

- Handle **status changes from Linear** via webhook
- Push updates to the frontend in real time (**Pusher/Ably**)
- Ensure updates work without page reloads
- Handle disconnects, reconnects, and error states gracefully

### 4. Admin Dashboard

- Cross-tenant view of all requests
- Filter by company
- Basic impersonation (view platform as another user)
- Ability to update request statuses manually

### 5. UI & UX Polish

- Use **TailwindCSS** and **shadcn/ui**
- Responsive and mobile-friendly
- Show **loading states**, error boundaries, and validation
- UI should feel like something a real startup would ship

## Bonus Features (For Extra Points)

| Feature                      | Points | Description                               |
| ---------------------------- | ------ | ----------------------------------------- |
| **E2E Testing**              | +3     | Playwright tests for key flows            |
| **CI/CD Pipeline**           | +2     | GitHub Actions + deploy to Cloud Run      |
| **Advanced Real-time**       | +4     | WebSocket-based updates (beyond webhooks) |
| **Performance Optimization** | +2     | Optimistic updates, caching, etc.         |
| **Error Monitoring**         | +0.5   | Sentry integration                        |
| **Docker Support**           | +1     | Multi-stage Dockerfile + docker-compose   |

---
## Tech Stack

These tools mirror what we are looking to use in production:

- **Framework:** Next.js 15+ (App Router)
- **Database:** PostgreSQL + Prisma
- **Auth:** Clerk (with org support)
- **UI Kit:** TailwindCSS + shadcn/ui
- **Real-time:** Pusher or Ably
- **Integration:** Linear API

> **Deployment:** Use Vercel for simplicity.

---
## What to Deliver

- A **live deployed version** (URL required)
- Working **auth with two companies**
- Request form that creates a **Linear task**
- Real-time updates based on **status changes**
- Admin dashboard with **cross-tenant visibility**
- A 3–5 minute **Loom walkthrough** explaining what you built

### Loom Walkthrough Requirements

Your Loom recording should include:

- Architecture decisions and folder structure
- How multi-tenancy is implemented + data isolation
- Real-time functionality demo (status update triggering UI change)
- Code examples that show clean, scalable patterns
- Any tradeoffs or challenges and how you approached them
- Anything that was not required but you thought was important

This is your chance to walk us through how you think and build.

>**Pro Tip:** We welcome initiative! We’re watching how you solve, what you prioritize, and where you go beyond the brief. If you spot a blind spot, plug it. If something feels half-baked, tighten it.

---

## ⚠️ Before You Ask a Question… 

**Everything you need to succeed** is already in this repo.

That includes the file you're reading and the [FAQs document.](FAQs.md)

Please **study them carefully**—ideally more than once.

>**Pro Tip:** Asking questions that are already answered here **hurts your application**.  
> It shows us you don’t pay attention to detail.

If something is genuinely unclear or missing, you're welcome to ask.  

But we expect you to **search before you ask**—that’s how we operate.

---
## Submission Instructions

1. Build your solution using the requirements above
2. Deploy to Vercel using your own account
3. Record your Loom video walkthrough
4. Open a Pull Request with:
    - Live app URL
    - Loom video link
    - Checklist of bonus features (if any)
    - Notes, assumptions, or anything else you want us to know

#### **This test is designed to be completed within 5 days.**

We care about **speed** as much as **quality**, and we actively compare both across candidates.


### ⌛️ Current fastest completion: **4 days, 7 hours**


---

If you think long-term, build with real-world impact in mind, and thrive alongside an ambitious team—this is where we start.

Let’s see what you’ve got.