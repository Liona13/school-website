# School Management System - Project Development Guide

## 1. Project Architecture

### Frontend Architecture
- Next.js 15 (App Router)
- React Server Components
- Client-side Components (where needed)
- Tailwind CSS for styling
- Custom hooks for reusable logic
- Context API for state management

### Backend Architecture
- Supabase for authentication and database
- API Routes for server-side operations
- Role-based access control (RBAC)
- File storage for documents and media

## 2. File Structure
```
src/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Homepage
│   ├── (public)/                  # Public routes
│   │   ├── about/
│   │   ├── academics/
│   │   ├── admissions/
│   │   ├── campus-life/
│   │   ├── news/
│   │   └── contact/
│   ├── (auth)/                    # Auth routes
│   │   ├── login/
│   │   ├── register/
│   │   └── verify-email/
│   └── (dashboard)/               # Protected routes
│       ├── admin/
│       ├── teacher/
│       ├── student/
│       └── parent/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation/
│   ├── public/                    # Public page components
│   ├── dashboard/                 # Dashboard components
│   │   ├── admin/
│   │   ├── teacher/
│   │   ├── student/
│   │   └── parent/
│   └── ui/                        # Reusable UI components
├── lib/
│   ├── supabase/                  # Supabase client
│   ├── utils/                     # Utility functions
│   └── constants/                 # Constants and configs
├── hooks/                         # Custom hooks
├── types/                         # TypeScript types
└── styles/                        # Global styles

```

## 3. Navigation Structure

### Public Navigation
```
- Home
- About Us
  - History
  - Mission & Vision
  - Leadership
- Academics
  - Programs
  - Curriculum
  - Faculty
- Admissions
  - Process
  - Requirements
  - Apply Now
- Campus Life
  - Activities
  - Facilities
  - Events
- News & Updates
- Contact Us
```

### Role-Based Navigation

#### Admin Dashboard
```
- Overview
- User Management
  - Students
  - Teachers
  - Parents
  - Admins
- Academic Management
  - Classes
  - Subjects
  - Schedule
- System Settings
- Reports & Analytics
```

#### Teacher Dashboard
```
- Overview
- Classes
  - Class List
  - Create Class
  - Class Management
- Assignments
  - Create
  - Grade
  - Review
- Student Progress
- Resources
```

#### Student Dashboard
```
- Overview
- My Classes
- Assignments
- Grades
- Resources
- Calendar
```

#### Parent Dashboard
```
- Overview
- Children
- Academic Progress
- Attendance
- Communications
```

## 4. Core Components

### Layout Components
- Header
- Footer
- Navigation
- Sidebar
- AuthGuard

### UI Components
- Button
- Input
- Card
- Modal
- Table
- Alert
- LoadingSpinner
- Dropdown
- Tabs
- Forms

### Feature Components
- UserManagement
- ClassManagement
- AssignmentManager
- GradeBook
- FileUploader
- Calendar
- NotificationSystem
- ReportGenerator

## 5. Features & Functionality

### Public Features
- School information pages
- News and updates
- Contact forms
- Admission information
- Event calendar

### Authentication
- Email/password login
- Role-based access
- Password recovery
- Email verification
- Session management

### Admin Features
- User management CRUD
- Bulk user import (.xlsx, .csv)
- Class and subject management
- System configuration
- Report generation
- Analytics dashboard

### Teacher Features
- Class management
- Assignment creation
- Grading system
- Attendance tracking
- Resource sharing
- Student progress tracking

### Student Features
- Class enrollment
- Assignment submission
- Grade viewing
- Resource access
- Progress tracking

### Parent Features
- Child progress monitoring
- Attendance tracking
- Grade viewing
- Teacher communication
- Event calendar

## 6. Dependencies

```json
{
  "dependencies": {
    "next": "15.0.2",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "@supabase/auth-helpers-nextjs": "0.10.0",
    "@supabase/supabase-js": "latest",
    "tailwindcss": "3.4.14",
    "@headlessui/react": "2.2.0",
    "@heroicons/react": "2.1.5",
    "xlsx": "^0.18.5",
    "zod": "^3.22.4",
    "react-hook-form": "^7.0.0",
    "date-fns": "^2.30.0",
    "@tanstack/react-table": "^8.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.0.0",
    "@types/node": "^18.0.0",
    "eslint": "^8.0.0",
    "jest": "^29.7.0",
    "@testing-library/react": "^14.0.0",
    "prettier": "^3.0.0"
  }
}
```

## 7. Error Handling

### Error Types
- Authentication errors
- Form validation errors
- API errors
- Database errors
- File upload errors

### Implementation
- Global error boundary
- Try-catch blocks
- Error logging
- User-friendly error messages
- Error recovery mechanisms

## 8. Testing Strategy

### Unit Tests
- Component testing
- Hook testing
- Utility function testing

### Integration Tests
- API route testing
- Authentication flow
- Form submissions

### E2E Tests
- User flows
- Critical paths
- Role-based access

## 9. Development Guide & Prompts

### Setup Steps
1. Initialize Next.js project
```bash
npx create-next-app@latest school-management --typescript --tailwind --app
```

2. Install dependencies
```bash
npm install @supabase/auth-helpers-nextjs @supabase/supabase-js @headlessui/react @heroicons/react xlsx zod react-hook-form date-fns @tanstack/react-table
```

3. Setup Supabase
- Create project
- Set up authentication
- Configure database schema

### Development Flow
1. Start with public pages
2. Implement authentication
3. Build core UI components
4. Develop role-based dashboards
5. Add feature implementations
6. Testing & error handling
7. Optimization & deployment

## 10. Progress Checklist

### Phase 1: Setup & Foundation
- [ ] Project initialization
- [ ] Dependencies installation
- [ ] Basic file structure
- [ ] Environment configuration
- [ ] Supabase setup

### Phase 2: Public Pages
- [ ] Homepage
- [ ] About pages
- [ ] Academic pages
- [ ] Admission pages
- [ ] Contact page

### Phase 3: Authentication
- [ ] Login system
- [ ] Registration
- [ ] Email verification
- [ ] Password recovery
- [ ] Role-based access

### Phase 4: Admin Dashboard
- [ ] User management
- [ ] Bulk import/export
- [ ] System settings
- [ ] Reports generation

### Phase 5: Teacher Dashboard
- [ ] Class management
- [ ] Assignment system
- [ ] Grading system
- [ ] Resource management

### Phase 6: Student Dashboard
- [ ] Class enrollment
- [ ] Assignment submission
- [ ] Grade viewing
- [ ] Resource access

### Phase 7: Parent Dashboard
- [ ] Child progress tracking
- [ ] Attendance viewing
- [ ] Communication system

### Phase 8: Testing & Optimization
- [ ] Unit testing
- [ ] Integration testing
- [ ] Performance optimization
- [ ] Security review

## 11. Best Practices

### Code Organization
- Use consistent file naming
- Implement proper TypeScript types
- Follow component composition patterns
- Maintain clean code principles

### Performance
- Implement proper caching
- Use React Server Components
- Optimize images and assets
- Minimize client-side JavaScript

### Security
- Input validation
- Data sanitization
- Role-based access control
- API rate limiting
- Secure authentication flows

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast
- Screen reader support

## 12. Development Plan

### Week 1-2: Foundation
- Project setup
- Public pages development
- Basic styling implementation

### Week 3-4: Authentication
- User authentication
- Role-based access
- Dashboard layouts

### Week 5-6: Admin Features
- User management
- System settings
- Bulk operations

### Week 7-8: Teacher Features
- Class management
- Assignment system
- Grading system

### Week 9-10: Student & Parent Features
- Student dashboard
- Parent dashboard
- Progress tracking

### Week 11-12: Final Phase
- Testing
- Bug fixing
- Optimization
- Documentation