# Page 13 — Reset Password (reset-password.html)

## Purpose
Password recovery flow step 2 — user arrives via email link with token, enters new password. Secure, time-limited token-based reset.

## URL
`/reset-password?token=<jwt>`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (minimal — logo only)                    │
├─────────────────────────────────────────────────┤
│  AUTH CONTAINER (centered, max-width: 420px)     │
│  ┌─────────────────────────────────────────────┐│
│  │  🔐 Lock icon (48px, muted)                  ││
│  │  "Reset Your Password" (H2)                 ││
│  │  "Create a new password for your account."   ││
│  ├─────────────────────────────────────────────┤│
│  │  New Password     [________________] [👁]  ││
│  │  ┌─────────────────────────────────────┐   ││
│  │  │ Password strength bar                  │   ││
│  │  │ • 8+ characters  • 1 number            │   ││
│  │  │ • 1 special char  • 1 uppercase        │   ││
│  │  └─────────────────────────────────────┘   ││
│  │  Confirm Password [________________] [👁]  ││
│  ├─────────────────────────────────────────────┤│
│  │  [    Reset Password    ]                    ││
│  ├─────────────────────────────────────────────┤│
│  │  ← Back to Login                             ││
│  └─────────────────────────────────────────────┘│
│                                                  │
│  (INVALID/EXPIRED TOKEN STATE)                   │
│  ┌─────────────────────────────────────────────┐│
│  │  ⚠ Alert icon (48px, red)                   ││
│  │  "Link Expired or Invalid"                   ││
│  │  "This password reset link has expired or    ││
│  │   already been used. Please request a new one."││
│  │  [Request New Link]                           ││
│  └─────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER (minimal)                                │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Minimal Navbar
Same as Login — logo only.

### 2. Auth Card Container
Same as Login: `420px`, white, `24px` radius, `48px 40px`.

### 3. Icon Header

| Element | Specs |
|---|---|
| Icon | Lucide `lock`, `48px`, `color: var(--stone)`, centered |
| Title | "Reset Your Password" |
| Title font | `font-size: 26px`, `font-weight: 700`, centered |
| Subtitle | "Create a new password for your account." |
| Subtitle font | `font-size: 15px`, `color: var(--stone)`, centered |

### 4. New Password Field

Same as Signup password field: `48px` height, `12px` radius, eye toggle, strength indicator below.

### 5. Password Strength Indicator

Same as Signup: 4-segment bar + 2×2 requirement grid with check icons.

### 6. Confirm Password Field

Same input style. Label: "Confirm New Password". Validation: must match New Password.

### 7. Submit Button

| Element | Specs |
|---|---|
| Text | "Reset Password" |
| Class | `.btn-primary` |
| Width | `100%` |
| Height | `52px` |
| Margin-top | `24px` |
| Disabled | Until password meets all requirements AND matches confirm |

### 8. Success State (After Submit)

| Element | Specs |
|---|---|
| Icon | `check-circle-2`, `48px`, green, centered |
| Title | "Password Reset Successful" |
| Message | "Your password has been updated. You can now log in with your new password." |
| Button | `.btn-primary`, "Go to Login", full-width |

### 9. Invalid Token State

Shown immediately on page load if token is invalid/expired:

| Element | Specs |
|---|---|
| Icon | `alert-triangle`, `48px`, `#dc2626`, centered |
| Title | "Link Expired or Invalid" |
| Message | "This password reset link has expired or already been used. Please request a new one." |
| Button | `.btn-primary`, "Request New Link", links to `/forgot-password` |

### 10. Back to Login

Same as Forgot Password page.

## Data Model

```javascript
const resetState = {
  token: "",           // from URL query param
  newPassword: "",
  confirmPassword: "",
  isValidToken: null,  // null=checking, true=valid, false=invalid
  isLoading: false,
  isSuccess: false,
  errors: {},
  showPassword: false,
  showConfirmPassword: false,
  passwordStrength: 0
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 600px | Card centered, 420px |
| ≤ 600px | Full-width, no radius, 32px 24px padding |

## Lovable Prompt

> Build the HYPE reset password page. Minimal navbar (logo only). Centered card (420px, white, 24px radius, 48px padding). Lock icon 48px stone, centered. Title "Reset Your Password" 26px bold centered. Subtitle "Create a new password..." 15px stone. Two password fields: New Password and Confirm New Password — both 48px height, 12px radius, eye toggle inside right. Below New Password: strength indicator (4-segment colored bar) + 2×2 requirements grid with check icons (same as signup). Submit "Reset Password" full-width primary, 52px, disabled until valid. Success state: green check icon, title "Password Reset Successful", message, "Go to Login" button. Invalid token state: red alert-triangle icon, title "Link Expired or Invalid", message, "Request New Link" button to forgot-password. Mobile: full-width card. Colors: --ink, --stone, --cream.
