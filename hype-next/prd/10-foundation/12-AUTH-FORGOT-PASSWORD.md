# Page 12 — Forgot Password (forgot-password.html)

## Purpose
Password recovery flow step 1 — user enters email to receive reset link. Simple, reassuring UX that reduces anxiety about lost access.

## URL
`/forgot-password`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (minimal — logo only)                    │
├─────────────────────────────────────────────────┤
│  AUTH CONTAINER (centered, max-width: 420px)     │
│  ┌─────────────────────────────────────────────┐│
│  │  🔑 Key icon (48px, muted)                   ││
│  │  "Forgot Your Password?" (H2)               ││
│  │  "Enter your email and we'll send you        ││
│  │   instructions to reset your password."      ││
│  ├─────────────────────────────────────────────┤│
│  │  Email Address  [________________]           ││
│  ├─────────────────────────────────────────────┤│
│  │  [      Send Reset Link      ]               ││
│  ├─────────────────────────────────────────────┤│
│  │  ← Back to Login                             ││
│  └─────────────────────────────────────────────┘│
│                                                  │
│  (AFTER SUBMIT — success state)                  │
│  ┌─────────────────────────────────────────────┐│
│  │  ✓ Check icon (48px, green)                  ││
│  │  "Check Your Email"                          ││
│  │  "We've sent a password reset link to        ││
│  │   roshan@example.com. The link expires       ││
│  │   in 24 hours."                              ││
│  │  [Resend email]    [Back to Login]            ││
│  └─────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER (minimal)                                │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Minimal Navbar

Same as Login page — logo only, `80px`, transparent bg.

### 2. Auth Card Container

Same as Login: `420px` max-width, white, `24px` radius, `48px 40px` padding.

### 3. Icon Header

| Element | Specs |
|---|---|
| Icon | Lucide `key-round`, `48px`, `color: var(--stone)`, centered |
| Title | "Forgot Your Password?" |
| Title font | Hanken Grotesk, `font-size: 26px`, `font-weight: 700`, centered |
| Subtitle | "Enter your email and we'll send you instructions to reset your password." |
| Subtitle font | `font-size: 15px`, `color: var(--stone)`, centered, `line-height: 1.5` |
| Spacing | `24px` between icon and title, `8px` between title and subtitle |

### 4. Email Field

Same input styles as Login. Label: "Email Address". Placeholder: "your@email.com".

### 5. Submit Button

| Element | Specs |
|---|---|
| Text | "Send Reset Link" |
| Class | `.btn-primary` |
| Width | `100%` |
| Height | `52px` |
| Margin-top | `24px` |

### 6. Back to Login

| Element | Specs |
|---|---|
| Layout | Centered, `margin-top: 20px` |
| Icon | Lucide `arrow-left`, `16px`, inline |
| Text | "Back to Login" |
| Style | `font-size: 15px`, `font-weight: 600`, `color: var(--ink)` |
| Link | `/login` |
| Hover | underline |

### 7. Success State (After Submit)

Card content swaps entirely:

| Element | Specs |
|---|---|
| Icon | Lucide `check-circle-2`, `48px`, `color: #22c55e`, centered |
| Title | "Check Your Email" |
| Title font | `font-size: 26px`, `font-weight: 700`, centered |
| Message | "We've sent a password reset link to roshan@example.com. The link expires in 24 hours." |
| Message font | `font-size: 15px`, `color: var(--stone)`, centered |
| Email highlight | User's email in `font-weight: 600`, `color: var(--ink)` |
| Button row | Flex, `gap: 12px`, `margin-top: 24px` |
| Resend button | `.btn-secondary`, "Resend email", `flex: 1` |
| Back button | `.btn-primary`, "Back to Login", `flex: 1` |
| Resend cooldown | Disabled for 60s with countdown text "Resend in 45s" |

### 8. Error State

Same red error banner as Login, below the email field.

## Data Model

```javascript
const forgotState = {
  email: "",
  isLoading: false,
  isSuccess: false,
  error: null,
  resendCooldown: 0  // seconds
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 600px | Card centered, 420px, full padding |
| ≤ 600px | Full-width, no radius, 32px 24px padding |
| ≤ 600px | Success state buttons stack vertically |

## Lovable Prompt

> Build the HYPE forgot password page. Minimal navbar (logo only). Centered card (420px, white, 24px radius, 48px padding). Top: key-round icon 48px in stone color, centered. Title "Forgot Your Password?" 26px bold centered. Subtitle "Enter your email and we'll send you instructions..." 15px stone, centered. Email input field (same 48px/12px radius style as login). Submit button "Send Reset Link" full-width primary, 52px. Below: "← Back to Login" link, 15px bold. Success state (replaces card content): check-circle-2 icon 48px green, title "Check Your Email", message with highlighted email address, two buttons side by side — "Resend email" (secondary) and "Back to Login" (primary). Resend disabled for 60s with countdown. Error banner below email if invalid. Mobile: full-width card, buttons stack vertically in success state. Colors: --ink, --stone, --cream.
