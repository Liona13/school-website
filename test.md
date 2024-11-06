# Cursor IDE Composer Prompts Guide

## Initial Setup Prompts

```
Following the project guide in PROJECT-GUIDE.md, create the basic file structure for the school management system. Create only the directory structure and empty files for now.
```

```
Create a tailwind.config.js file with the necessary configuration for our school management system, including our color scheme and any custom extensions we'll need.
```

```
Set up the base layout.tsx file in the app directory. This should include the basic HTML structure and metadata for our application.
```

## Public Pages Section

### Homepage
```
Create the homepage (page.tsx) in the app directory. This should be a simple, clean layout with:
- A hero section
- Quick links to key areas
- News/announcements section
- Contact information
Follow the navigation structure from the project guide.
Include proper TypeScript types.
Use Tailwind CSS for styling.
```

```
Create a test file homepage.test.tsx to verify:
- Page renders correctly
- All sections are present
- Links are working
- Responsive design
```

### About Page
```
Create the about page in (public)/about/page.tsx with:
- School history
- Mission & vision
- Leadership section
Follow the project guide structure.
Use only components defined in our guide.
Create corresponding test file.
```

### Navigation
```
Create the Header component in components/layout/Header.tsx with:
- Logo
- Navigation menu
- Login button
Follow the public navigation structure from the project guide.
Include responsive design.
Create test file for navigation functionality.
```

## Authentication Section

### Login Page
```
Create the login page in (auth)/login/page.tsx with:
- Email/password form
- Role selection
- Error handling
- Loading states
Use Supabase auth helpers.
Create test file for authentication flows.
```

### Register Page
```
Create the registration page in (auth)/register/page.tsx with:
- Registration form
- Role selection
- Email verification setup
- Error handling
Include input validation.
Create corresponding test file.
```

## Admin Dashboard Section

### Admin Layout
```
Create the admin dashboard layout in (dashboard)/admin/layout.tsx with:
- Sidebar navigation
- Header with user info
- Main content area
Follow the admin navigation structure from the project guide.
Create test file for layout functionality.
```

### User Management
```
Create the user management page in (dashboard)/admin/users/page.tsx with:
- User list table
- CRUD operations
- Bulk import/export
- Filter and search
Include error handling for all operations.
Create comprehensive test file.
```

## Teacher Dashboard Section

### Class Management
```
Create the class management page in (dashboard)/teacher/classes/page.tsx with:
- Class list
- Create class form
- Class details view
- Student roster
Follow the teacher features from the project guide.
Include test file for all class operations.
```

### Assignment Management
```
Create the assignment management section in (dashboard)/teacher/assignments/page.tsx with:
- Assignment creation
- Grading interface
- Submission review
Include proper error handling.
Create test file for assignment workflows.
```

## Student Dashboard Section

### Course View
```
Create the student course view in (dashboard)/student/courses/page.tsx with:
- Enrolled classes
- Assignment list
- Grade view
- Resource access
Follow student features from the project guide.
Include test file for student interactions.
```

## Parent Dashboard Section

### Child Progress
```
Create the parent dashboard in (dashboard)/parent/page.tsx with:
- Child selection
- Progress overview
- Grade display
- Attendance record
Follow parent features from project guide.
Create test file for parent dashboard.
```

## Error Handling Prompts

```
For each component, implement error handling with:
- try/catch blocks
- Error boundaries
- Loading states
- User feedback
- Error recovery
Follow error handling patterns from project guide.
```

## Testing Prompts

```
For each component, create a test file that verifies:
- Component rendering
- User interactions
- Error states
- Loading states
- Role-based access
Follow testing strategy from project guide.
```

## Important Notes for Each Prompt:

1. Start each prompt with:
```
Following PROJECT-GUIDE.md:
- Use only approved dependencies
- Follow file structure exactly
- Implement only specified features
- Use TypeScript for type safety
- Include error handling
- Create test file
```

2. End each prompt with:
```
Verify against project guide:
- Feature scope matches guide
- Component structure follows plan
- Error handling implemented
- Tests created
- No additional features added
```

## Usage Instructions:

1. Always start prompts with the section context from the project guide
2. Copy the exact prompt text
3. Wait for completion before moving to next component
4. Verify outputs against project guide
5. Run tests before moving forward
6. Commit working code before starting new section

Would you like me to provide specific prompts for any particular section you want to start with? I can also help break down any of these prompts into smaller, more manageable steps.