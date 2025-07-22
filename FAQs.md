# Frequently Asked Questions

---

## Evaluation & Scoring

**What are you actually looking for in this test?**  

We're evaluating:

- Execution speed
- Attention to detail
- Ability to follow design closely
- Bonus: enterprise thinking, bonus tasks, documentation clarity

You’re judged on what you ship, how you think, and how you communicate.

---

**Is this test scored? How do I know where I stand?**  

Yes. Internally scored out of **100**.

- Most viable candidates score **85+**
- **Major deductions:** missing core requirements or poor design alignment

---

**I finished early, do I get bonus points?** 

Yes.

- Early delivery
- Bonus features
- Clear documentation  

All improve your score and chances of moving forward.

---

**Can I just be judged on my code and communication, not a score?**  

No.  

We use a standardized evaluation to keep things fair.  
You’re welcome to ask for feedback—but if you’re unwilling to improve, we won’t proceed.

---

## Technical Requirements

**What’s the required tech stack?**

- **Framework:** Next.js 15+ (App Router)
- **Database:** PostgreSQL + Prisma
- **Auth:** Clerk (Organizations enabled)
- **Real-time:** Pusher or Ably
- **UI:** TailwindCSS + shadcn/ui
- **API Integration:** Linear

Try to stay as close to this stack as possible. You're welcome to diverge as long as you explain why.

---

**Do I need to match the Figma design exactly?**  

Yes.  

We expect a **1:1 match** unless explicitly told otherwise.  
If unsure, **ask—do not guess.**

---

**There’s no specific design for XYZ page in your Figma file. What do I do?**  

**Improvise** based on the design system.  

That’s part of the challenge.

---

**I don’t see the assigned GitHub repo in Vercel—what do I do?**

You likely haven’t been added to the GitHub organization yet, or your GitHub account isn’t linked to Vercel.

Let us know so we can grant access.

🔒 **Do not fork the repo.** All development should happen in branches on your assigned repo.

---

**Is CI/CD setup required?**  

No, but it’s a bonus.  

If you implement it, include:

- GitHub Actions (linting, type-checks, build)
- Auto-deploy to live environment

---

## Functional Expectations

**How should roles work in the app?**

- **User:** Views + submits requests within their org
- **Admin:** Manages all org requests
- **Super Admin:** Sees all orgs, impersonates users, global dashboard access

---

**What’s the difference between Dashboard and Request Hub?**

- **Dashboard:** Role-specific insights and metrics
- **Request Hub:** Active request list

All users hit the same routes—content is gated by role.

---

**Who owns a request—the user or the org?**

**The org.**  

This ensures continuity if a user leaves the company.

---

## Submission Details

**What do I need to submit?**

- GitHub PR (with commit history)
- Live Vercel link
- Test credentials for all roles
- Loom walkthrough (3–5 minutes)
- Architecture diagram (draw.io or similar)
- `.env.local` only if asked

---

**Can I use my own private repo?**  

No. Use your assigned repo in the HTV GitHub org.  

We need clean visibility into the work.

---

**Can I use AI to help me?**  

You can—but we’re evaluating **your thinking**, not GPT’s.  

If you can’t explain it clearly, that’s a problem.

---

## Culture & Communication

**What kind of person are you looking for?**  

A **fullstack founder-type builder**:

- Thinks multiple steps ahead
- Owns product problems
- Executes fast, with zero hand-holding
- Takes the initiative

---

**How important is communication?**

Extremely.

We expect:
- Proactive updates
- Clear technical reasoning
- Honest, timely questions
- Concise Looms where needed

---

**I missed some instructions or design fidelity. Am I disqualified?**  

Not automatically—**if** you’re:

- Open to feedback
- Quick to adjust
- Strong elsewhere

But if you’re rigid, sloppy, or ignore guidance, we won’t proceed.