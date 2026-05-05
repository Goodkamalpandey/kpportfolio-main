# Technical Design Document

## Overview

This design document outlines the technical architecture for transforming Dr. Kamal Pandey's Next.js portfolio website into a world-class digital experience. The redesign focuses on visual excellence, performance optimization, accessibility compliance, and professional presentation while maintaining the existing single-page layout structure.

The solution leverages Next.js 14+ with the App Router, React Server Components, TypeScript, Tailwind CSS, and Framer Motion to create a performant, accessible, and maintainable portfolio website that showcases Dr. Pandey's credentials as an AI researcher and Solutions Architect featured in Constellation Research's AI 150.

### Key Design Goals

- Achieve Lighthouse Performance score of 90+ with Core Web Vitals compliance
- Meet WCAG 2.1 Level AA accessibility standards
- Implement a comprehensive theme system with dark mode support
- Create engaging micro-interactions and animations at 60fps
- Ensure responsive design from 320px to 2560px viewports
- Maintain clean separation between content and presentation
- Enable easy content updates without code changes

### Technology Stack

- **Framework**: Next.js 14+ (App Router, React Server Components)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3+ with custom design tokens
- **Animations**: Framer Motion 10+
- **Image Optimization**: Next.js Image component with sharp
- **Icons**: Lucide React or Heroicons
- **Analytics**: Vercel Analytics or Plausible
- **Deployment**: Vercel (optimized for Next.js)

## Architecture

### System Architecture

The portfolio website follows a modern Next.js App Router architecture with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser Layer                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Theme System │  │  Navigation  │  │  Analytics   │      │
│  │  (Context)   │  │   Observer   │  │   Tracker    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │     Page     │  │  Sections    │  │  Components  │      │
│  │  (RSC/SSG)   │  │  (Hero, etc) │  │ (Cards, etc) │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
┌─────────────────────────────────────────────────────────────┐
│                      Content Layer                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Content    │  │    Schema    │  │  Validation  │      │
│  │  (JSON/TS)   │  │  (Zod/TS)    │  │   (Build)    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
┌─────────────────────────────────────────────────────────────┐
│                      Asset Layer                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │    Images    │  │     Fonts    │  │     Icons    │      │
│  │  (Optimized) │  │  (Subsetted) │  │   (Bundled)  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Rendering Strategy

- **Static Site Generation (SSG)**: The entire portfolio is pre-rendered at build time for optimal performance
- **React Server Components**: Used for data fetching and initial rendering
- **Client Components**: Used only for interactive features (theme toggle, navigation, animations)
- **Incremental Static Regeneration**: Optional for future dynamic content updates

### Directory Structure

```
app/
├── layout.tsx                 # Root layout with theme provider
├── page.tsx                   # Main portfolio page (SSG)
├── globals.css               # Tailwind imports and custom styles
└── components/
    ├── sections/             # Page sections
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Skills.tsx
    │   ├── Projects.tsx
    │   ├── Papers.tsx
    │   ├── Timeline.tsx
    │   ├── Boards.tsx
    │   └── Contact.tsx
    ├── ui/                   # Reusable UI components
    │   ├── Button.tsx
    │   ├── Card.tsx
    │   ├── Badge.tsx
    │   ├── Input.tsx
    │   └── ...
    ├── navigation/
    │   ├── Navbar.tsx
    │   ├── ScrollProgress.tsx
    │   └── BackToTop.tsx
    ├── animations/
    │   ├── FadeIn.tsx
    │   ├── SlideIn.tsx
    │   ├── Parallax.tsx
    │   └── AnimatedSection.tsx
    └── providers/
        ├── ThemeProvider.tsx
        └── AnalyticsProvider.tsx

content/
├── profile.ts                # Personal information
├── projects.ts               # Project data
├── papers.ts                 # Publications
├── timeline.ts               # Career timeline
├── boards.ts                 # Board memberships
└── skills.ts                 # Skills and expertise

lib/
├── schemas/                  # TypeScript/Zod schemas
│   ├── profile.schema.ts
│   ├── project.schema.ts
│   └── ...
├── utils/
│   ├── cn.ts                # Class name utility
│   ├── animations.ts        # Animation variants
│   └── validation.ts        # Content validation
└── constants/
    ├── theme.ts             # Design tokens
    └── config.ts            # Site configuration

public/
├── images/                  # Optimized images
├── icons/                   # SVG icons
└── fonts/                   # Custom fonts (if needed)
```

## Components and Interfaces

### Core Components

#### 1. Theme System

**ThemeProvider Component**
```typescript
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
  storageKey?: string;
}

// Provides theme context to entire application
// Manages theme state and persistence
// Listens to system preference changes
```

**ThemeToggle Component**
```typescript
interface ThemeToggleProps {
  className?: string;
}

// Renders theme toggle button
// Cycles through light/dark/system modes
// Provides visual feedback on state
```

#### 2. Navigation System

**Navbar Component**
```typescript
interface NavbarProps {
  sections: NavigationSection[];
  className?: string;
}

interface NavigationSection {
  id: string;
  label: string;
  href: string;
}

// Sticky/fixed positioning
// Active section highlighting via Intersection Observer
// Mobile responsive menu
// Scroll direction detection for auto-hide
```

**ScrollProgress Component**
```typescript
interface ScrollProgressProps {
  className?: string;
  color?: string;
}

// Displays scroll progress indicator
// Updates on scroll events (throttled)
// Positioned at top or bottom of viewport
```

**BackToTop Component**
```typescript
interface BackToTopProps {
  showAfter?: number; // viewport heights
  className?: string;
}

// Appears after scrolling threshold
// Smooth scroll to top on click
// Animated entrance/exit
```

#### 3. Section Components

**Hero Section**
```typescript
interface HeroProps {
  profile: ProfileData;
  className?: string;
}

// Full viewport height
// Animated entrance
// AI-150 badge display
// Primary CTA buttons
// Parallax background effects
```

**About Section**
```typescript
interface AboutProps {
  content: AboutData;
  className?: string;
}

// Biography text
// Professional photo
// Key highlights
// Social proof elements
```

**Skills Section**
```typescript
interface SkillsProps {
  skills: SkillCategory[];
  className?: string;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

interface Skill {
  name: string;
  icon?: string;
  level?: number;
}

// Categorized skill display
// Icon representation
// Optional proficiency indicators
```

**Projects Section**
```typescript
interface ProjectsProps {
  projects: Project[];
  className?: string;
}

// Grid/masonry layout
// Project cards with hover effects
// Filtering/sorting options
// Modal or expanded view
```

**Papers Section**
```typescript
interface PapersProps {
  papers: Paper[];
  className?: string;
}

// List or card layout
// Citation information
// External links (DOI, PDF)
// Search/filter functionality
```

**Timeline Section**
```typescript
interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

// Vertical timeline visualization
// Chronological ordering
// Company logos
// Expandable details
```

**Boards Section**
```typescript
interface BoardsProps {
  boards: BoardMembership[];
  className?: string;
}

// Grid of board memberships
// Organization logos
// Role and tenure information
```

**Contact Section**
```typescript
interface ContactProps {
  contactInfo: ContactData;
  className?: string;
}

// Contact form with validation
// Multiple contact methods
// Social links
// Resume download CTA
```

#### 4. UI Components

**Card Component**
```typescript
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  hoverable?: boolean;
  className?: string;
}

// Reusable card container
// Multiple visual variants
// Hover effects
// Consistent spacing and shadows
```

**Button Component**
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
}

// Accessible button component
// Multiple variants and sizes
// Loading state
// Icon support
```

**Badge Component**
```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Small label component
// Color variants
// Used for tags, status indicators
```

**Input Component**
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

// Form input with label
// Error state display
// Accessible markup
```

#### 5. Animation Components

**AnimatedSection Component**
```typescript
interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide' | 'scale';
  delay?: number;
  threshold?: number;
}

// Wraps sections for scroll-triggered animations
// Uses Intersection Observer
// Respects prefers-reduced-motion
```

**FadeIn Component**
```typescript
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Fade and slide animation
// Configurable direction and timing
```

**Parallax Component**
```typescript
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // 0.3 to 0.7
  className?: string;
}

// Parallax scroll effect
// GPU-accelerated transforms
// Subtle movement rate
```

### Utility Functions

**Class Name Utility**
```typescript
function cn(...inputs: ClassValue[]): string;
// Merges Tailwind classes with conflict resolution
```

**Animation Variants**
```typescript
const fadeInVariants: Variants;
const slideInVariants: Variants;
const staggerChildrenVariants: Variants;
// Reusable Framer Motion variants
```

**Validation Functions**
```typescript
function validateEmail(email: string): boolean;
function validateContentSchema<T>(data: unknown, schema: Schema<T>): T;
// Content and form validation
```

## Data Models

### Profile Data

```typescript
interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  avatar: string;
  resumeUrl: string;
  social: SocialLinks;
  achievements: Achievement[];
}

interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
  googleScholar?: string;
  orcid?: string;
}

interface Achievement {
  title: string;
  description: string;
  icon?: string;
  url?: string;
}
```

### Project Data

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  technologies: string[];
  links: ProjectLinks;
  featured: boolean;
  date: string;
  status?: 'completed' | 'ongoing' | 'archived';
}

interface ProjectLinks {
  demo?: string;
  github?: string;
  documentation?: string;
}
```

### Paper Data

```typescript
interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract?: string;
  doi?: string;
  pdfUrl?: string;
  citations?: number;
  tags: string[];
}
```

### Timeline Data

```typescript
interface TimelineEvent {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string; // undefined for current position
  description: string;
  achievements?: string[];
  logo?: string;
  type: 'work' | 'education' | 'award';
}
```

### Board Membership Data

```typescript
interface BoardMembership {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  logo?: string;
  url?: string;
}
```

### Skill Data

```typescript
interface SkillCategory {
  category: string;
  icon?: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon?: string;
  proficiency?: 1 | 2 | 3 | 4 | 5;
  yearsOfExperience?: number;
}
```

### Contact Data

```typescript
interface ContactData {
  email: string;
  phone?: string;
  social: SocialLinks;
  availability: string;
  preferredContact: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

### Theme Configuration

```typescript
interface ThemeConfig {
  colors: {
    light: ColorPalette;
    dark: ColorPalette;
  };
  typography: TypographyConfig;
  spacing: SpacingScale;
  animations: AnimationConfig;
}

interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  border: string;
  // ... additional color tokens
}

interface TypographyConfig {
  fontFamily: {
    sans: string[];
    mono: string[];
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  fontWeight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
}

interface SpacingScale {
  0: string;
  1: string;  // 4px
  2: string;  // 8px
  3: string;  // 12px
  4: string;  // 16px
  6: string;  // 24px
  8: string;  // 32px
  12: string; // 48px
  16: string; // 64px
  // ... additional spacing values
}

interface AnimationConfig {
  duration: {
    fast: number;    // 200ms
    normal: number;  // 300ms
    slow: number;    // 600ms
  };
  easing: {
    easeIn: string;
    easeOut: string;
    easeInOut: string;
  };
}
```

### SEO Metadata

```typescript
interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image';
  canonicalUrl: string;
  structuredData: PersonSchema;
}

interface PersonSchema {
  '@context': 'https://schema.org';
  '@type': 'Person';
  name: string;
  jobTitle: string;
  affiliation: Organization[];
  sameAs: string[];
  image: string;
  url: string;
}

interface Organization {
  '@type': 'Organization';
  name: string;
}
```

### Analytics Events

```typescript
interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Example events:
// - CTA Click: { category: 'engagement', action: 'cta_click', label: 'contact' }
// - Project View: { category: 'content', action: 'project_view', label: projectId }
// - Resume Download: { category: 'conversion', action: 'resume_download' }
// - External Link: { category: 'outbound', action: 'external_link', label: url }
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Modular Spacing Scale

*For any* spacing value in the spacing scale configuration, the value should follow a consistent modular pattern (multiples of 4px base unit).

**Validates: Requirements 1.3**

### Property 2: Animation Duration Bounds

*For any* animation variant in the animation system, the duration should be between 200ms and 600ms inclusive.

**Validates: Requirements 1.6**

### Property 3: Color Contrast Compliance

*For any* color combination used for text and background in both light and dark themes, the contrast ratio should meet or exceed 4.5:1 for normal text and 3:1 for large text.

**Validates: Requirements 4.3, 12.7**

### Property 4: Image Alt Text Presence

*For any* Image component rendered in the application, it should have a non-empty alt attribute.

**Validates: Requirements 4.4**

### Property 5: Interactive Element Keyboard Accessibility

*For any* interactive element (button, link, input), it should have appropriate keyboard navigation attributes (tabIndex, onKeyDown handlers) and visible focus styles.

**Validates: Requirements 4.2**

### Property 6: Active Section Detection

*For any* scroll position on the page, the navigation system should correctly identify and highlight exactly one active section based on viewport intersection.

**Validates: Requirements 5.2**

### Property 7: Back to Top Visibility Logic

*For any* scroll position, the back-to-top button should be visible if and only if the scroll position exceeds 100vh (one viewport height).

**Validates: Requirements 5.5**

### Property 8: Scroll Direction Detection

*For any* sequence of scroll positions, the scroll direction detection logic should correctly identify whether the user is scrolling up or down based on position changes.

**Validates: Requirements 5.6**

### Property 9: GPU-Accelerated Animation Properties

*For any* animation variant in the animation system, it should only use GPU-accelerated CSS properties (transform, opacity) and not trigger layout or paint operations.

**Validates: Requirements 6.3**

### Property 10: Parallax Speed Bounds

*For any* parallax component configuration, the speed multiplier should be between 0.3 and 0.7 inclusive.

**Validates: Requirements 6.4**

### Property 11: Animation Reading Order

*For any* staggered animation sequence, the delay values should increase in natural reading order (top to bottom, left to right based on element position).

**Validates: Requirements 6.6**

### Property 12: SEO Title Length

*For any* page title in the SEO metadata, the character length should be between 50 and 60 characters inclusive.

**Validates: Requirements 9.1**

### Property 13: SEO Description Length

*For any* meta description in the SEO metadata, the character length should be between 150 and 160 characters inclusive.

**Validates: Requirements 9.2**

### Property 14: Email Validation

*For any* string input to the email validation function, it should return true if and only if the string matches a valid email format (contains @ symbol, valid domain structure).

**Validates: Requirements 11.4**

### Property 15: Content Schema Validation

*For any* content data object and its corresponding schema, the validation function should correctly identify whether the data conforms to the schema structure and required fields.

**Validates: Requirements 15.7**

## Error Handling

### Client-Side Error Handling

**Image Loading Failures**
- Next.js Image component with onError handler
- Fallback to placeholder image or error state
- Log error to error tracking service
- Display user-friendly message if critical image

**Form Validation Errors**
- Real-time validation on blur and submit
- Clear error messages below each field
- Prevent submission until all errors resolved
- Maintain form state on validation failure

**Network Request Failures**
- Retry logic for transient failures (3 attempts with exponential backoff)
- Timeout handling (10 second timeout for API calls)
- User-friendly error messages
- Fallback to cached data if available

**Animation Errors**
- Wrap animations in error boundaries
- Graceful degradation to static content
- Respect prefers-reduced-motion to avoid motion sickness
- Log animation errors for debugging

### Build-Time Error Handling

**Content Validation Failures**
- Validate all content files against schemas during build
- Fail build if required content is missing or malformed
- Provide clear error messages indicating which content file and field failed
- Type checking via TypeScript for compile-time safety

**Asset Optimization Failures**
- Fail build if images cannot be optimized
- Validate image formats and sizes
- Check for missing assets referenced in content
- Verify font files are accessible

**Configuration Errors**
- Validate theme configuration structure
- Check for missing required color tokens
- Verify animation configuration values are within bounds
- Validate SEO metadata completeness

### Runtime Error Handling

**React Error Boundaries**
- Wrap major sections in error boundaries
- Display fallback UI on component errors
- Log errors to monitoring service
- Provide recovery actions (reload section, refresh page)

**JavaScript Errors**
- Global error handler for uncaught exceptions
- Track errors with stack traces
- Capture browser and device information
- Send to error monitoring service (Sentry, LogRocket, etc.)

**Resource Loading Failures**
- Detect failed font loads and use system fonts as fallback
- Handle missing icons gracefully with text labels
- Lazy load components with loading states and error fallbacks
- Implement retry logic for failed dynamic imports

### Accessibility Error Prevention

**Focus Management**
- Ensure focus is never lost during navigation
- Trap focus in modals and dialogs
- Restore focus after closing overlays
- Provide skip links for keyboard users

**ARIA Errors**
- Validate ARIA attributes during development
- Use semantic HTML to minimize ARIA needs
- Test with screen readers during development
- Automated accessibility testing in CI/CD

### Performance Error Handling

**Core Web Vitals Monitoring**
- Track LCP, FID, CLS in production
- Alert on performance degradation
- Identify slow components and optimize
- A/B test performance improvements

**Memory Leaks**
- Clean up event listeners on unmount
- Cancel pending requests on navigation
- Dispose of animation frames
- Monitor memory usage in development

## Testing Strategy

### Overview

The testing strategy employs a dual approach combining unit tests for specific examples and edge cases with property-based tests for universal correctness guarantees. This comprehensive approach ensures both concrete functionality and general correctness across all possible inputs.

### Unit Testing

**Purpose**: Verify specific examples, edge cases, component rendering, and integration points.

**Framework**: Jest + React Testing Library

**Focus Areas**:

1. **Component Rendering**
   - Test that components render without crashing
   - Verify correct props are passed to children
   - Check conditional rendering logic
   - Validate CSS classes are applied correctly

2. **User Interactions**
   - Button clicks trigger correct handlers
   - Form submissions call validation
   - Navigation clicks scroll to sections
   - Theme toggle updates context

3. **Edge Cases**
   - Empty content arrays render gracefully
   - Missing optional props use defaults
   - Long text content doesn't break layout
   - Invalid data shows error states

4. **Integration Points**
   - Theme context provides correct values
   - Analytics events fire on interactions
   - LocalStorage persistence works
   - Intersection Observer detects sections

**Example Unit Tests**:
```typescript
// Component rendering
test('Hero section renders AI-150 badge', () => {
  render(<Hero profile={mockProfile} />);
  expect(screen.getByAltText(/AI-150/i)).toBeInTheDocument();
});

// User interaction
test('theme toggle switches between light and dark', () => {
  render(<ThemeToggle />);
  const toggle = screen.getByRole('button');
  fireEvent.click(toggle);
  expect(document.documentElement).toHaveClass('dark');
});

// Edge case
test('projects section handles empty projects array', () => {
  render(<Projects projects={[]} />);
  expect(screen.getByText(/no projects/i)).toBeInTheDocument();
});
```

### Property-Based Testing

**Purpose**: Verify universal properties hold across all valid inputs through randomized testing.

**Framework**: fast-check (JavaScript property-based testing library)

**Configuration**: Minimum 100 iterations per property test to ensure comprehensive input coverage.

**Focus Areas**:

1. **Configuration Validation**
   - Spacing scales follow modular patterns
   - Animation durations within bounds
   - Color contrast meets accessibility standards
   - Parallax speeds within acceptable ranges

2. **State Management**
   - Scroll position calculations are consistent
   - Theme state transitions are valid
   - Navigation active state is deterministic
   - Form validation is consistent

3. **Data Validation**
   - Content schemas catch all invalid data
   - Email validation correctly identifies valid/invalid formats
   - SEO metadata meets length requirements
   - Type safety prevents runtime errors

4. **Accessibility**
   - All interactive elements are keyboard accessible
   - All images have alt text
   - Color combinations meet contrast ratios
   - Focus management is consistent

**Example Property Tests**:
```typescript
// Property 1: Modular Spacing Scale
test('Feature: world-class-website-redesign, Property 1: Modular spacing scale', () => {
  fc.assert(
    fc.property(
      fc.integer({ min: 0, max: 20 }),
      (multiplier) => {
        const spacing = getSpacingValue(multiplier);
        const baseUnit = 4;
        return spacing % baseUnit === 0;
      }
    ),
    { numRuns: 100 }
  );
});

// Property 3: Color Contrast Compliance
test('Feature: world-class-website-redesign, Property 3: Color contrast compliance', () => {
  fc.assert(
    fc.property(
      fc.constantFrom('light', 'dark'),
      fc.constantFrom('primary', 'secondary', 'accent', 'muted'),
      (theme, colorKey) => {
        const textColor = getThemeColor(theme, colorKey);
        const bgColor = getThemeColor(theme, 'background');
        const contrast = calculateContrast(textColor, bgColor);
        return contrast >= 4.5; // Normal text requirement
      }
    ),
    { numRuns: 100 }
  );
});

// Property 6: Active Section Detection
test('Feature: world-class-website-redesign, Property 6: Active section detection', () => {
  fc.assert(
    fc.property(
      fc.integer({ min: 0, max: 10000 }), // scroll position
      fc.array(fc.record({ // sections
        id: fc.string(),
        offsetTop: fc.integer({ min: 0, max: 10000 }),
        offsetHeight: fc.integer({ min: 100, max: 1000 })
      }), { minLength: 1, maxLength: 10 }),
      (scrollPos, sections) => {
        const activeSection = detectActiveSection(scrollPos, sections);
        // Exactly one section should be active
        return activeSection !== null;
      }
    ),
    { numRuns: 100 }
  );
});

// Property 14: Email Validation
test('Feature: world-class-website-redesign, Property 14: Email validation', () => {
  fc.assert(
    fc.property(
      fc.emailAddress(),
      (email) => {
        return validateEmail(email) === true;
      }
    ),
    { numRuns: 100 }
  );
  
  fc.assert(
    fc.property(
      fc.string().filter(s => !s.includes('@')),
      (invalidEmail) => {
        return validateEmail(invalidEmail) === false;
      }
    ),
    { numRuns: 100 }
  );
});
```

### Integration Testing

**Purpose**: Verify that multiple components work together correctly.

**Framework**: Playwright or Cypress

**Focus Areas**:
- Full page navigation flow
- Theme persistence across page reloads
- Form submission end-to-end
- Responsive layout at different viewports
- Animation sequences complete correctly

### Accessibility Testing

**Automated Testing**:
- jest-axe for component-level accessibility checks
- Lighthouse CI for page-level accessibility audits
- Run on every pull request

**Manual Testing**:
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation
- High contrast mode verification
- Zoom level testing (up to 200%)

### Performance Testing

**Lighthouse CI**:
- Run on every deployment
- Enforce minimum scores: Performance 90+, Accessibility 100, Best Practices 100, SEO 100
- Track Core Web Vitals trends

**Bundle Analysis**:
- Monitor JavaScript bundle sizes
- Identify large dependencies
- Ensure code splitting is effective
- Keep total page weight under 2MB

### Visual Regression Testing

**Purpose**: Catch unintended visual changes.

**Tools**: Percy, Chromatic, or Playwright screenshots

**Coverage**:
- All major sections in light and dark modes
- Responsive breakpoints (mobile, tablet, desktop)
- Interactive states (hover, focus, active)
- Loading and error states

### Testing Workflow

1. **Development**: Run unit tests in watch mode
2. **Pre-commit**: Run unit tests and linting
3. **Pull Request**: Run all tests including property tests, integration tests, and accessibility checks
4. **Pre-deployment**: Run full test suite including visual regression
5. **Post-deployment**: Monitor real user metrics and error rates

### Test Coverage Goals

- **Unit Test Coverage**: 80%+ line coverage for components and utilities
- **Property Test Coverage**: All 15 correctness properties implemented
- **Integration Test Coverage**: All major user flows (navigation, contact form, theme switching)
- **Accessibility Coverage**: 100% automated checks passing, manual testing quarterly

### Continuous Improvement

- Review failed property tests to identify edge cases
- Add unit tests for bugs discovered in production
- Update property tests when requirements change
- Regularly audit and update test coverage
- Performance budget enforcement in CI/CD

