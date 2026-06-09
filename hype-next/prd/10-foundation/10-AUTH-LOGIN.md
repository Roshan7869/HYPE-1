# Page 10 — Login (login.html)

## Purpose
Buyer and seller authentication entry point. Clean, distraction-free modal overlay that converts anonymous traffic into logged-in users. Supports email/password and social (Google OAuth) login.

## URL
`/login`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (minimal — logo only, no search)         │
├─────────────────────────────────────────────────┤
│  AUTH CONTAINER (centered, max-width: 420px)    │
│  ┌─────────────────────────────────────────────┐│
│  │  "Login to Your Account" (H2)                ││
│  │  "Enter your email and password to continue" ││
│  ├─────────────────────────────────────────────┤│
│  │  GOOGLE LOGIN BUTTON                         ││
│  ├─────────────────────────────────────────────┤│
│  │  ────── or continue with email ──────        ││
│  ├─────────────────────────────────────────────┤│
│  │  Email Address  [________________]            ││
│  │  Password       [________________] [👁]     ││
│  │              [ ] Remember me                 ││
│  │              Forgot password? →              ││
│  ├─────────────────────────────────────────────┤│
│  │  [         Login to Account          ]       ││
│  ├─────────────────────────────────────────────┤│
│  │  Don't have an account? Sign up →            ││
│  └─────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER (minimal — legal links only)             │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Minimal Navbar

| Element | Specs |
|---|---|
| Background | `transparent` |
| Height | `80px` |
| Left | Logo only (no nav links, no search, no icons) |
| Logo | `height: 40px`, links to `/` |
| Border | none |
| Purpose | Keeps user focused on auth; no escape hatches except logo |

### 2. Auth Card Container

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border | `1px solid #eae8e4` |
| Border-radius | `24px` |
| Padding | `48px 40px` |
| Max-width | `420px` |
| Margin | `60px auto` |
| Shadow | none (clean flat card) |

### 3. Header

| Element | Specs |
|---|---|
| Title | "Login to Your Account" |
| Font | `font-family: var(--font-display)` (Hanken Grotesk), `font-size: 28px`, `font-weight: 700` |
| Color | `var(--ink)` |
| Align | `text-align: center` |
| Subtitle | "Enter your email and password to continue" |
| Subtitle font | `font-size: 15px`, `color: var(--stone)` |
| Subtitle margin-top | `8px` |

### 4. Google OAuth Button

| Element | Specs |
|---|---|
| Text | "Continue with Google" |
| Background | `#fff` |
| Border | `1px solid #e0e0e0` |
| Border-radius | `12px` |
| Padding | `14px 24px` |
| Width | `100%` |
| Font | `font-size: 15px`, `font-weight: 600` |
| Icon | Google "G" logo, `20px`, positioned left, `margin-right: 12px` |
| Hover | `background: #fafafa`, `border-color: #d0d0d0` |
| Cursor | `pointer` |

### 5. Divider

| Element | Specs |
|---|---|
| Layout | Horizontal flex with `align-items: center` |
| Lines | `1px solid #eae8e4`, `flex: 1` on both sides |
| Text | "or continue with email" |
| Text font | `font-size: 13px`, `color: var(--stone)`, `text-transform: uppercase`, `letter-spacing: 0.5px` |
| Text margin | `0 16px` |
| Margin top/bottom | `24px` |

### 6. Form Fields

| Element | Specs |
|---|---|
| Label | `font-size: 13px`, `font-weight: 600`, `color: var(--ink)`, `margin-bottom: 6px`, `text-transform: uppercase`, `letter-spacing: 0.3px` |
| Input | `width: 100%`, `height: 48px`, `padding: 0 16px`, `border: 1px solid #e0e0e0`, `border-radius: 12px`, `font-size: 15px`, `background: #fff` |
| Input focus | `border-color: var(--ink)`, `outline: none`, `box-shadow: 0 0 0 3px rgba(26,24,21,0.08)` |
| Input placeholder | `color: #b5b0a8`, `font-size: 15px` |
| Field gap | `20px` between fields |
| Email type | `type="email"`, autocomplete="email" |
| Password type | `type="password"`, autocomplete="current-password" |

### 7. Password Visibility Toggle

| Element | Specs |
|---|---|
| Position | Absolute, inside password input, `right: 16px`, vertically centered |
| Icon | Eye icon (Lucide: `eye`), `20px`, `color: var(--stone)` |
| Toggle | Clicking switches to `type="text"`, icon changes to `eye-off` |
| Hover | `color: var(--ink)` |

### 8. Remember Me + Forgot Password Row

| Element | Specs |
|---|---|
| Layout | Flex, `justify-content: space-between`, `align-items: center` |
| Margin-top | `16px` |
| Checkbox | Custom styled: `18px` square, `border-radius: 4px`, `border: 1.5px solid #d0d0d0`, checked state fills with `var(--ink)` + white checkmark |
| Checkbox label | "Remember me" — `font-size: 14px`, `color: var(--stone)` |
| Forgot link | "Forgot password?" — `font-size: 14px`, `font-weight: 600`, `color: var(--ink)`, underline on hover |
| Forgot href | `/forgot-password` |

### 9. Submit Button

| Element | Specs |
|---|---|
| Text | "Login to Account" |
| Class | `.btn-primary` (reuse from design system) |
| Width | `100%` |
| Margin-top | `24px` |
| Height | `52px` |
| Font | `font-size: 16px`, `font-weight: 700` |
| State: loading | Spinner replaces text, `opacity: 0.7`, `pointer-events: none` |
| State: error | Shake animation + red border on inputs, error message below button |

### 10. Error Message

| Element | Specs |
|---|---|
| Layout | Below submit button, `margin-top: 16px` |
| Background | `#fef2f2` |
| Border | `1px solid #fecaca` |
| Border-radius | `8px` |
| Padding | `12px 16px` |
| Font | `font-size: 14px`, `color: #dc2626` |
| Icon | Alert triangle (Lucide: `alert-triangle`), `16px`, left of text |
| Message examples | "Invalid email or password", "Account not found", "Too many attempts — try again in 5 minutes" |

### 11. Sign Up CTA

| Element | Specs |
|---|---|
| Layout | Centered, `margin-top: 24px` |
| Text | "Don't have an account?" |
| Text font | `font-size: 15px`, `color: var(--stone)` |
| Link | "Sign up" |
| Link style | `font-weight: 700`, `color: var(--ink)`, underline on hover |
| Link href | `/signup` |

### 12. Minimal Footer

| Element | Specs |
|---|---|
| Layout | Centered, `padding: 32px 0` |
| Links | "Terms of Service" | "Privacy Policy" |
| Link font | `font-size: 13px`, `color: var(--stone)` |
| Link hover | `color: var(--ink)` |
| Separator | `·` dot between links |

## Data Model

### Form State

```javascript
const loginForm = {
  email: "",           // string, validated as email
  password: "",        // string, min 8 chars
  rememberMe: false,   // boolean, sets longer cookie if true
  isLoading: false,    // boolean
  error: null,         // string | null
  showPassword: false  // boolean
};
```

### API Endpoint (mock)

```javascript
POST /api/auth/login
Body: { email: string, password: string, rememberMe: boolean }
Response: { success: boolean, token: string, user: { id, name, email, role } }
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 600px | Card centered with `margin: 60px auto`, full padding `48px 40px` |
| ≤ 600px | Card full-width, `border-radius: 0`, `padding: 32px 24px`, margin `0` |
| ≤ 600px | Minimal footer hidden, legal links moved below card |

## Lovable Prompt

> Build the HYPE login page. Centered auth card (max-width 420px, white bg, 24px radius, 48px padding). Title "Login to Your Account" in Hanken Grotesk 28px bold, centered. Subtitle in 15px stone color. Below: Google OAuth button — white bg, light border, Google G icon left, "Continue with Google", full-width, 12px radius. Divider line with "or continue with email" text in uppercase 13px stone. Form: Email and Password fields — 13px uppercase labels, 48px height inputs with 12px radius, light border, focus ring in ink color. Password field has eye toggle inside right side. Remember me checkbox (custom styled, 18px) + "Forgot password?" link right-aligned in same row. Submit button: full-width primary button "Login to Account", 52px height, 16px bold. Error state: red background banner with alert icon below button. Bottom: "Don't have an account? Sign up" with link. Minimal navbar above — logo only, no nav links. Footer minimal with Terms/Privacy links. Mobile: full-width card, no radius, 32px padding. All colors from CSS vars: --ink, --stone, --cream.
