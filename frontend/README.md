# Zentonez Beauty & Salon 🌿✨

A premium, high-performance web application for **Zentonez**, a luxury beauty salon. This project features state-of-the-art animations, a curated design system, and a seamless user experience tailored for a high-end boutique feel.

---

## 🚀 Technology Stack

| Category | Tools |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS |
| **Animations** | [GSAP](https://gsap.com/), [Framer Motion](https://framer.com/motion/), [React Spring](https://www.react-spring.dev/) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Routing** | [React Router Dom v7](https://reactrouter.com/) |
| **Utils** | [imagesloaded](https://imagesloaded.desandro.com/), [clsx](https://github.com/lukeed/clsx) |

---

## 🎨 Design System (Brand Identity)

### 🌈 Color Palette
The Zentonez palette is a sophisticated, harmonious blend of warm golds and deep contrasts, designed for a luxury aesthetic.

| Color | Hex | Purpose |
| :--- | :--- | :--- |
| **Premium Gold** | `#C9A24A` | Primary brand color, buttons, and high-impact accents |
| **Gold Container** | `#E5C98E` | Lighter gold for backgrounds and soft gradients |
| **Secondary Cream**| `#D9C3A5` | Warm supporting elements and elegant dividers |
| **Deep Navy** | `#1F3A5F` | High-contrast backgrounds and branding accents |
| **Background (Luxury Cream)** | `#F4F1EC` | Main page background for a professional, clean look |
| **Charcoal Typography** | `#2B2B2B` | Core text color for maximum readability |

### 🖋️ Typography
We use a **Fluid Type Scale** implemented via CSS `clamp()` to ensure perfect scaling from mobile notched devices to ultra-wide displays.

| Font Family | Usage | Style |
| :--- | :--- | :--- |
| **Poppins** | Primary Headings (H1, H2, H3) | Bold, commanding, and modern |
| **Montserrat** | Secondary Headings (H4, H5, H6) | Elegant and professional |
| **Inter** | Body Text & UI Elements | Clean, readable, and balanced |
| **Pacifico** | Accent Phrases & Hero Subtexts | Script, friendly, and boutique-style |
| **Gelasio** | Narrative & Description text | Sophisticated serif for a literary feel |

---

## 🪄 Animation & Professional Effects

Zentonez uses a multi-layered animation strategy to create a "living" interface:

- **Smooth Scrolling**: Powered by **Lenis** to provide a cinematic, inertia-based scroll experience.
- **Sparkle Typography**: A custom **3D Kinetic Hover** effect using GSAP and Canvas that adds interactive "sparkles" and character displacement to headings.
- **Luxury Floating**: CSS-optimized `@keyframes` (`luxury-float`) used for subtle, non-blocking movement of decorative elements.
- **Shuffle Grids**: Hero sections utilize **Framer Motion Layout** for randomized, fluid image transitions that change over time.
- **Interactive Buttons**: Premium 3D transforms and glassmorphism effects (backdrop blur) with physics-based scaling on hover.
- **GSAP ScrollTriggers**: Used for advanced section pinning and synchronized image reveals as the user explores the site.

---

## 🧩 Key Components

### 🎴 Advanced Service Cards
- **Features**: Hover-reveal descriptions, image scaling, and integrated dynamic price tags.
- **Tech**: Framer Motion for performance-optimized Y-axis transitions and layout stability.

### 🗺️ Full Navigation Suite
- **Desktop**: Glassmorphic Navbar with animated underline transitions.
- **Mobile**: Dedicated **Bottom Navigation Bar** for app-like usability on touch devices.
- **Global**: A floating logo for persistent brand awareness.

---

## 🛠️ Project Structure

```bash
src/
├── assets/          # Local optimized images & branding assets
├── components/      # Reusable UI components
│   ├── layout/      # Navbar, Footer, MobileNav, FloatingLogo
│   ├── home/        # Home-page specific sections (ShuffleHero, etc.)
│   └── mobile/      # Dedicated mobile-view components
├── pages/           # Main route-level pages (Home, Services, Gallery, etc.)
├── lib/             # Utility functions & shared logic
└── index.css        # Core Design System, Fluid Scale, and Global Tokens
```

---

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run Development**:
   ```bash
   npm run dev
   ```
4. **Production Build**:
   ```bash
   npm run build
   ```

---

## ✨ Features Checklist
- [x] **Premium UI**: Glassmorphism, smooth gradients, and curated typography.
- [x] **Responsive Excellence**: Tailored layouts for Mobile, Tablet, and Desktop.
- [x] **Fluid Spacing**: System-wide use of clamp() for layout-shifting prevention.
- [x] **SEO Optimized**: Semantic HTML5 and proper heading hierarchy.
- [x] **Accessibility**: Tap-target optimization for touch devices.
