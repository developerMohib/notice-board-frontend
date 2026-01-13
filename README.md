# Notice Management System

A modern **Next.js 14+** (App Router) application for creating, publishing, and managing notices with responsive UI, form validation, real-time status toggling, and pagination.

Built with:
- Next.js 14/15 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form 

---

## ✨ Features

### 📝 **Notice Creation**
- Rich form with validation (title, description, type, department)
- Support for **individual** or **department-wide** notices
- Save as **Draft** or **Publish Immediately**
- Success confirmation modal on publish

### 📋 **Notice Management**
- Responsive table view with status badges
- **Real-time status toggle** (Published ↔ Unpublished)
- **Dynamic filtering** by:
  - Department (`HR`, `Finance`, `Sales`, etc.)
  - Status (`Published`, `Draft`, `Unpublished`)
  - Employee Name / ID (search)
- **Server-side pagination** (5 items per page)

### 🎨 **UI/UX**
- Clean, professional design with Tailwind CSS
- Fully responsive (mobile, tablet, desktop)
- Intuitive action dropdowns (view, edit, delete, toggle)
- Loading states & error handling
- Optimized performance with React Query caching

### 🔒 **Extensible Architecture**
- Ready for authentication (route groups prepared)
- Type-safe with TypeScript interfaces
- Modular component structure
- API abstraction layer

---

## 🛠 Tech Stack

| Category           | Technologies                                                                 |
|--------------------|------------------------------------------------------------------------------|
| **Framework**      | Next.js 14+ (App Router)                                                    |
| **Language**       | TypeScript                                                                  |
| **Styling**        | Tailwind CSS + Custom Components                                            |
| **State Mgmt**     | React Query (`@tanstack/react-query`)                                       |
| **Forms**          | Controlled Components (no external lib — lightweight)                       |
| **Icons**          | React Icons                                                                 |
| **API Client**     | Axios                                                                       |
| **Validation**     | Backend: Mongoose Schema<br>Frontend: Manual + Zod (optional)               |
| **Linting**        | ESLint + Prettier                                                           |

> 💡 **Why no React Hook Form?**  
> Given the form size and existing controlled state pattern, we opted for simplicity and full control without extra dependencies.

---

## 📁 Project Structure

```text
/
├── app/ # App Router (all routes)
│ ├── api/ # Route handlers (backend logic)
│ │ └── notice/ # Notice-related API endpoints
│ ├── create-notice/ # Create notice form page
│ │ └── page.tsx
│ ├── notices/ # Notice listing page
│ │ ├── [id]/ # Dynamic notice detail page
│ │ │ └── page.tsx
│ │ └── page.tsx
│ ├── layout.tsx # Root layout (includes Sidebar)
│ ├── not-found.tsx # Custom 404 page
│ └── globals.css # Global styles
│
├── components/ # Reusable components
│ ├── ui/ # Generic UI (buttons, cards)
│ │ ├── Button.tsx
│ │ └── Pagination.tsx
│ ├── forms/ # Form-specific components
│ │ └── CreateNoticeForm.tsx
│ └── tables/ # Data tables
│ └── Noticetable.tsx
│
├── hooks/ # Custom React hooks
│ └── useGetNoticeAll.ts # React Query hooks for notices
│
├── lib/ # Utilities & helpers
│ ├── api/ # Axios instance
│ │ └── axiosInstance.ts
│ └── utils/ # Popup, error handling
│ ├── noticepopup.ts
│ └── errorpopup.ts
│
├── public/ # Static assets
│ └── images/
│ └── nebsLogo.png
│
├── types/ # TypeScript interfaces
│ └── notice.types.ts
│
├── .env.local # Environment variables
├── next.config.ts # Next.js config
├── tailwind.config.ts # Tailwind config
└── package.json
```


## 🌐 API Integration

### Base URL
All API requests are prefixed with:

```env
# .env.local
- in frontend i not use image upload yet, that's why cloudinary not exist

POST - /api/notice/create
Create new notice

GET -/api/notice/get-all
Get paginated notices

PATCH - /api/notice/toggle-status/:id
Toggle notice status

GET one
/api/notice/get-single/:id
Get single notice 


git clone https://github.com/developerMohib/notice-board-frontend
cd notice-management-system

Install dependencies
- npm i

Set up environment variables

Run the development
- npm run dev

🧪 Testing
Manual Testing: Use browser dev tools to verify:
- Form submission → success popup
- Filter changes → correct API calls
- Pagination → proper page navigation
Future: Add Jest + React Testing Library

Frontend (Vercel)
Push to GitHub