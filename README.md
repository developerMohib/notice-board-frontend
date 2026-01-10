# Notice Management System

A modern **Next.js 14+** (App Router) application for creating, publishing, and managing notices with responsive UI, form validation, real-time status toggling, and pagination.

Built with:
- Next.js 14/15 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form 

## Features

- 📝 **Create Notice** form with full validation
  - Required fields
  - Notice Type dropdown
  - Clean error messages
- 🎉 Success modal on successful publish

- 📋 **Notices Listing** page
  - Responsive table view
  - Publish / Unpublish toggle (optimistic updates)
  - Pagination (client-side or server-side)
- 🔐 Protected routes (auth can be added later)
- 🌙 Dark mode support (optional – via Tailwind)
- Fully responsive design (mobile-first)

## Tech Stack

| Category           | Tools / Libraries                              |
|--------------------|------------------------------------------------|
| Framework          | Next.js 14+ (App Router)                       |
| Language           | TypeScript                                     |
| Styling            | Tailwind CSS                                   |
| Form               | React Hook Form                                |
| UI Components      | shadcn/ui (recommended) or custom components   |
| Icons              | React icons                                    |

## Project Structure

```text
app/
├── (auth)/                     # Route group - future auth pages
├── notices/
│   ├── create/
│   │   └── page.tsx
│   ├── list/
│   │   └── page.tsx
├── api/
├── layout.tsx                  # Root layout (minimal or global)
├── globals.css
└── favicon.ico

components/
├── ui/
│   ├── button.tsx
│   ├── Noticetable.tsx
├── forms/
│   └── CreateNoticeForm.tsx
└── shared/
    ├── Sidebar.tsx
    ├── Navbar.tsx
    └── Footer.tsx

lib/
├── api.ts                      # API fetch helpers
├── validation.ts               # Zod schemas
└── utils.ts

public/
├── images/
└── icons/
```