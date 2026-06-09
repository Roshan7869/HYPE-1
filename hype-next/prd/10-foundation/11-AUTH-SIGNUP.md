# Page 11 — Sign Up (signup.html)

## Purpose
New user registration — converts visitors into buyers and sellers. Collects essential info (name, email, phone, password) with phone OTP verification for Indian market. Offers role selection (Buyer or Seller) at the end.

## URL
`/signup`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (minimal — logo only)                    │
├─────────────────────────────────────────────────┤
│  AUTH CONTAINER (centered, max-width: 480px)     │
│  ┌─────────────────────────────────────────────┐│
│  │  "Create Your Account" (H2)                ││
│  │  "Join India's premier live auction marketplace"││
│  ├─────────────────────────────────────────────┤│
│  │  GOOGLE SIGNUP BUTTON                        ││
│  ├─────────────────────────────────────────────┤│
│  │  ────── or sign up with email ──────         ││
│  ├─────────────────────────────────────────────┤│
│  │  Full Name      [________________]           ││
│  │  Email Address  [________________]           ││
│  │  Phone Number   [+91][________________]      ││
│  │  Password       [________________] [👁]      ││
│  │  Confirm Pass   [________________] [👁]      ││
│  │  ┌─────────────────────────────────────┐   ││
│  │  │ Password strength bar                  │   ││
│  │  │ • 8+ characters  • 1 number            │   ││
│  │  │ • 1 special char  • 1 uppercase        │   ││
│  │  └─────────────────────────────────────┘   ││
│  │  [ ] I agree to Terms of Service and       ││
│  │      Privacy Policy                        ││
│  ├─────────────────────────────────────────────┤│
│  │  [      Create Account       ]               ││
│  ├─────────────────────────────────────────────┤│
│  │  Already have an account? Login →            ││
│  └─────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER (minimal)                                │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Minimal Navbar

Same as Login page — logo only, `80px` height, transparent bg, no nav links.

### 2. Auth Card Container

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border | `1px solid #eae8e4` |
| Border-radius | `24px` |
| Padding | `48px 40px` |
| Max-width | `480px` |
| Margin | `48px auto` |

### 3. Header

| Element | Specs |
|---|---|
| Title | "Create Your Account" |
| Font | Hanken Grotesk, `font-size: 28px`, `font-weight: 700` |
| Color | `var(--ink)` |
| Subtitle | "Join India's premier live auction marketplace" |
| Subtitle font | `font-size: 15px`, `color: var(--stone)` |

### 4. Google Sign Up Button

Same as Login Google button, text: "Sign up with Google".

### 5. Divider

Same as Login divider, text: "or sign up with email".

### 6. Form Fields

All inputs share the same base styles as Login (48px height, 12px radius, 15px font).

| Field | Type | Validation |
|---|---|---|
| Full Name | `text` | Required, min 2 chars, max 50 |
| Email Address | `email` | Required, valid email format |
| Phone Number | `tel` | Required, +91 prefix fixed, 10 digits |
| Password | `password` | Required, min 8 chars, must include 1 number, 1 special, 1 uppercase |
| Confirm Password | `password` | Must match Password |

### 7. Phone Number Field

| Element | Specs |
|---|---|
| Layout | Flex row: country code + number input |
| Country code | Fixed `+91` prefix in a `60px` wide box, `background: #f5f3ef`, `border-radius: 12px 0 0 12px`, centered text, `font-weight: 600` |
| Number input | `flex: 1`, `border-radius: 0 12px 12px 0`, no left border |
| Placeholder | "9876543210" |
| Max length | 10 digits |

### 8. Password Strength Indicator

| Element | Specs |
|---|---|
| Layout | Below password field, `margin-top: 12px` |
| Strength bar | `height: 4px`, `border-radius: 2px`, `width: 100%`, segmented into 4 parts |
| Colors by strength | Weak: `#ef4444`, Fair: `#f59e0b`, Good: `#3b82f6`, Strong: `#22c55e` |
| Requirements list | 4 items in 2x2 grid, each with check icon |
| Check icon | Lucide `check`, `14px`, green when met, gray when not |
| Requirement text | `font-size: 13px`, `color: var(--stone)`, turns `var(--ink)` when met |
| Items | "8+ characters", "1 number", "1 special character", "1 uppercase" |

### 9. Terms Checkbox

| Element | Specs |
|---|---|
| Layout | `margin-top: 20px` |
| Checkbox | Same custom style as Login remember me |
| Label | "I agree to the [Terms of Service](/terms) and [Privacy Policy](/privacy)" |
| Label font | `font-size: 14px`, `color: var(--stone)` |
| Link style | `color: var(--ink)`, `font-weight: 600`, underline on hover |
| Validation | Must be checked to submit |

### 10. Submit Button

| Element | Specs |
|---|---|
| Text | "Create Account" |
| Class | `.btn-primary` |
| Width | `100%` |
| Height | `52px` |
| Margin-top | `24px` |
| State: disabled | `opacity: 0.5`, `cursor: not-allowed` until all validations pass and terms checked |
| State: loading | Spinner, same as Login |

### 11. Error States

Same error banner style as Login, plus inline field-level errors:

| Element | Specs |
|---|---|
| Inline error | Below each invalid field, `font-size: 13px`, `color: #dc2626`, `margin-top: 6px` |
| Icon | Lucide `alert-circle`, `14px`, inline with text |
| Field border | Turns `#dc2626` when invalid |

### 12. Login CTA

| Element | Specs |
|---|---|
| Layout | Centered, `margin-top: 24px` |
| Text | "Already have an account?" |
| Link | "Login" → `/login` |
| Style | Same as Login's Sign Up link |

### 13. OTP Verification Modal (Step 2)

After form submit, show overlay modal:

| Element | Specs |
|---|---|
| Overlay | `position: fixed`, `inset: 0`, `background: rgba(0,0,0,0.5)`, `z-index: 100` |
| Modal | Centered, `width: 400px`, `bg: #fff`, `border-radius: 24px`, `padding: 40px` |
| Title | "Verify Your Phone" |
| Subtitle | "Enter the 6-digit code sent to +91 98XXX XXXXX" |
| Code inputs | 6 boxes in a row, each `48px × 48px`, `border: 1px solid #e0e0e0`, `border-radius: 12px`, `text-align: center`, `font-size: 20px`, `font-weight: 700` |
| Auto-focus | First box focused on open, auto-tab to next on input |
| Resend | "Resend code" link, `font-size: 14px`, disabled for 30s with countdown |
| Verify button | `.btn-primary`, full-width, "Verify & Continue" |

## Data Model

### Form State

```javascript
const signupForm = {
  fullName: "",
  email: "",
  phone: "",           // digits only, +91 prepended
  password: "",
  confirmPassword: "",
  agreeToTerms: false,
  isLoading: false,
  errors: {},          // { field: message }
  showPassword: false,
  showConfirmPassword: false,
  passwordStrength: 0  // 0-4
};
```

### OTP State

```javascript
const otpState = {
  isOpen: false,
  code: ["", "", "", "", "", ""],
  countdown: 30,
  isVerifying: false,
  error: null
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 600px | Card centered, 480px max-width, full padding |
| ≤ 600px | Full-width card, no radius, 32px 24px padding |
| ≤ 600px | Password requirements stack vertically (1 column) |
| ≤ 600px | OTP modal full-screen with padding |

## Lovable Prompt

> Build the HYPE sign up page. Centered card (480px max, white, 24px radius, 48px padding). Title "Create Your Account" 28px bold, subtitle "Join India's premier live auction marketplace" 15px stone. Google sign up button (white, border, full-width, 12px radius). Divider "or sign up with email". Form fields: Full Name, Email, Phone Number (with fixed +91 prefix in a 60px left box, then 10-digit input), Password, Confirm Password. All inputs: 48px height, 12px radius, light border, focus ring in ink. Password has eye toggle. Below password: strength indicator bar (4 segments, red/yellow/blue/green) + 2×2 grid of requirements (8+ chars, 1 number, 1 special, 1 uppercase) with check icons that turn green when met. Terms checkbox: "I agree to the Terms of Service and Privacy Policy" with link styling. Submit button: "Create Account", full-width primary, 52px, disabled until valid. Inline field errors with alert-circle icon. Bottom: "Already have an account? Login" link. OTP modal overlay: fixed dark overlay, centered white modal (400px, 24px radius), title "Verify Your Phone", 6 input boxes (48px each, centered text, auto-tab), resend countdown, verify button. Mobile: full-width card, requirements stack vertically. Colors from --ink, --stone, --cream.
