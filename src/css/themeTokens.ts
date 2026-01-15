import { css } from 'lit';

/**
 * GitHub Terminal Inspired Design Tokens
 * Clean, sharp, and professional with rich contrast
 */
export const themeTokens = css`
  :root {
    /* Typography */
    --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
    --font-family-mono: 'SF Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
    
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-base: 1rem;     /* 16px */
    --font-size-lg: 1.125rem;   /* 18px */
    --font-size-xl: 1.25rem;    /* 20px */
    --font-size-2xl: 1.5rem;    /* 24px */
    --font-size-3xl: 2rem;      /* 32px */
    --font-size-4xl: 2.5rem;    /* 40px */
    
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    
    --line-height-tight: 1.25;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.75;
    
    /* Spacing */
    --space-0: 0;
    --space-1: 0.25rem;   /* 4px */
    --space-2: 0.5rem;    /* 8px */
    --space-3: 0.75rem;   /* 12px */
    --space-4: 1rem;      /* 16px */
    --space-5: 1.25rem;   /* 20px */
    --space-6: 1.5rem;    /* 24px */
    --space-8: 2rem;      /* 32px */
    --space-10: 2.5rem;   /* 40px */
    --space-12: 3rem;     /* 48px */
    --space-16: 4rem;     /* 64px */
    
    /* Border Radius - Sharp with subtle rounding */
    --radius-none: 0;
    --radius-sm: 3px;
    --radius-base: 6px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    --radius-full: 9999px;
    
    /* Border Width */
    --border-width-thin: 1px;
    --border-width-base: 2px;
    --border-width-thick: 3px;
    
    /* Shadows - Subtle but noticeable */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Z-Index */
    --z-base: 0;
    --z-dropdown: 1000;
    --z-sticky: 1100;
    --z-fixed: 1200;
    --z-modal-backdrop: 1300;
    --z-modal: 1400;
    --z-popover: 1500;
    --z-tooltip: 1600;
  }

  /* Light Theme - GitHub Style */
  :root,
  [data-theme="light"] {
    color-scheme: light;
    
    /* Base Colors */
    --color-canvas-default: #ffffff;
    --color-canvas-subtle: #f6f8fa;
    --color-canvas-inset: #f6f8fa;
    --color-canvas-overlay: #ffffff;
    
    /* Text Colors */
    --color-fg-default: #24292f;
    --color-fg-muted: #57606a;
    --color-fg-subtle: #6e7781;
    --color-fg-on-emphasis: #ffffff;
    
    /* Border Colors */
    --color-border-default: #d0d7de;
    --color-border-muted: #d8dee4;
    --color-border-subtle: #eaeef2;
    
    /* Accent Colors - Blue (Primary) */
    --color-accent-fg: #0969da;
    --color-accent-emphasis: #0969da;
    --color-accent-subtle: #ddf4ff;
    --color-accent-muted: #54aeff;
    
    /* Success - Green */
    --color-success-fg: #1a7f37;
    --color-success-emphasis: #2da44e;
    --color-success-subtle: #dafbe1;
    --color-success-muted: #4ac26b;
    
    /* Danger - Red */
    --color-danger-fg: #cf222e;
    --color-danger-emphasis: #cf222e;
    --color-danger-subtle: #ffebe9;
    --color-danger-muted: #ff8182;
    
    /* Warning - Yellow/Orange */
    --color-warning-fg: #9a6700;
    --color-warning-emphasis: #bf8700;
    --color-warning-subtle: #fff8c5;
    --color-warning-muted: #d4a72c;
    
    /* Attention - Purple */
    --color-attention-fg: #8250df;
    --color-attention-emphasis: #8250df;
    --color-attention-subtle: #fbefff;
    --color-attention-muted: #a371f7;
    
    /* Interactive Elements */
    --color-button-default-bg: #f6f8fa;
    --color-button-default-border: rgba(31, 35, 40, 0.15);
    --color-button-default-hover-bg: #f3f4f6;
    --color-button-default-hover-border: rgba(31, 35, 40, 0.15);
    --color-button-default-active-bg: #ebecf0;
    
    --color-button-primary-bg: #2da44e;
    --color-button-primary-hover-bg: #2c974b;
    --color-button-primary-active-bg: #298e46;
    
    --color-button-danger-bg: #cf222e;
    --color-button-danger-hover-bg: #c02129;
    --color-button-danger-active-bg: #a40e26;
    
    /* Input Elements */
    --color-input-bg: #ffffff;
    --color-input-border: #d0d7de;
    --color-input-focus-border: #0969da;
    --color-input-disabled-bg: #f6f8fa;
    
    /* Links */
    --color-link-default: #0969da;
    --color-link-hover: #0550ae;
  }

  /* Dark Theme - GitHub Terminal Style */
  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
      
      /* Base Colors */
      --color-canvas-default: #0d1117;
      --color-canvas-subtle: #161b22;
      --color-canvas-inset: #010409;
      --color-canvas-overlay: #161b22;
      
      /* Text Colors */
      --color-fg-default: #e6edf3;
      --color-fg-muted: #8d96a0;
      --color-fg-subtle: #6e7681;
      --color-fg-on-emphasis: #ffffff;
      
      /* Border Colors */
      --color-border-default: #30363d;
      --color-border-muted: #21262d;
      --color-border-subtle: #161b22;
      
      /* Accent Colors - Blue */
      --color-accent-fg: #4493f8;
      --color-accent-emphasis: #1f6feb;
      --color-accent-subtle: #0d419d;
      --color-accent-muted: #1f6feb;
      
      /* Success - Green */
      --color-success-fg: #3fb950;
      --color-success-emphasis: #238636;
      --color-success-subtle: #0f5323;
      --color-success-muted: #2ea043;
      
      /* Danger - Red */
      --color-danger-fg: #f85149;
      --color-danger-emphasis: #da3633;
      --color-danger-subtle: #7d1014;
      --color-danger-muted: #da3633;
      
      /* Warning - Yellow */
      --color-warning-fg: #d29922;
      --color-warning-emphasis: #9e6a03;
      --color-warning-subtle: #6c4a00;
      --color-warning-muted: #9e6a03;
      
      /* Attention - Purple */
      --color-attention-fg: #a371f7;
      --color-attention-emphasis: #8957e5;
      --color-attention-subtle: #6e2594;
      --color-attention-muted: #8957e5;
      
      /* Interactive Elements */
      --color-button-default-bg: #21262d;
      --color-button-default-border: rgba(240, 246, 252, 0.1);
      --color-button-default-hover-bg: #30363d;
      --color-button-default-hover-border: rgba(240, 246, 252, 0.1);
      --color-button-default-active-bg: #292e36;
      
      --color-button-primary-bg: #238636;
      --color-button-primary-hover-bg: #2ea043;
      --color-button-primary-active-bg: #26a148;
      
      --color-button-danger-bg: #da3633;
      --color-button-danger-hover-bg: #e5534b;
      --color-button-danger-active-bg: #f15d58;
      
      /* Input Elements */
      --color-input-bg: #0d1117;
      --color-input-border: #30363d;
      --color-input-focus-border: #1f6feb;
      --color-input-disabled-bg: #161b22;
      
      /* Links */
      --color-link-default: #4493f8;
      --color-link-hover: #58a6ff;
    }
  }

  [data-theme="dark"] {
    color-scheme: dark;
    
    /* Same as dark media query */
    --color-canvas-default: #0d1117;
    --color-canvas-subtle: #161b22;
    --color-canvas-inset: #010409;
    --color-canvas-overlay: #161b22;
    
    --color-fg-default: #e6edf3;
    --color-fg-muted: #8d96a0;
    --color-fg-subtle: #6e7681;
    --color-fg-on-emphasis: #ffffff;
    
    --color-border-default: #30363d;
    --color-border-muted: #21262d;
    --color-border-subtle: #161b22;
    
    --color-accent-fg: #4493f8;
    --color-accent-emphasis: #1f6feb;
    --color-accent-subtle: #0d419d;
    --color-accent-muted: #1f6feb;
    
    --color-success-fg: #3fb950;
    --color-success-emphasis: #238636;
    --color-success-subtle: #0f5323;
    --color-success-muted: #2ea043;
    
    --color-danger-fg: #f85149;
    --color-danger-emphasis: #da3633;
    --color-danger-subtle: #7d1014;
    --color-danger-muted: #da3633;
    
    --color-warning-fg: #d29922;
    --color-warning-emphasis: #9e6a03;
    --color-warning-subtle: #6c4a00;
    --color-warning-muted: #9e6a03;
    
    --color-attention-fg: #a371f7;
    --color-attention-emphasis: #8957e5;
    --color-attention-subtle: #6e2594;
    --color-attention-muted: #8957e5;
    
    --color-button-default-bg: #21262d;
    --color-button-default-border: rgba(240, 246, 252, 0.1);
    --color-button-default-hover-bg: #30363d;
    --color-button-default-hover-border: rgba(240, 246, 252, 0.1);
    --color-button-default-active-bg: #292e36;
    
    --color-button-primary-bg: #238636;
    --color-button-primary-hover-bg: #2ea043;
    --color-button-primary-active-bg: #26a148;
    
    --color-button-danger-bg: #da3633;
    --color-button-danger-hover-bg: #e5534b;
    --color-button-danger-active-bg: #f15d58;
    
    --color-input-bg: #0d1117;
    --color-input-border: #30363d;
    --color-input-focus-border: #1f6feb;
    --color-input-disabled-bg: #161b22;
    
    --color-link-default: #4493f8;
    --color-link-hover: #58a6ff;
  }
`;
