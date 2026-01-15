import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/ui';
import { baseStyles } from '../css/baseStyles';
import { themeTokens } from '../css/themeTokens';

/**
 * Design System Showcase
 * Demonstrates all UI components with examples
 */
@customElement('design-showcase')
export class DesignShowcase extends LitElement {
  static styles = [
    themeTokens,
    baseStyles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .showcase {
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--space-8) var(--space-4);
      }

      .section {
        margin-bottom: var(--space-12);
      }

      .section-title {
        font-size: var(--font-size-3xl);
        font-weight: var(--font-weight-bold);
        margin-bottom: var(--space-6);
        padding-bottom: var(--space-4);
        border-bottom: var(--border-width-base) solid var(--color-border-default);
        color: var(--color-fg-default);
      }

      .subsection {
        margin-bottom: var(--space-8);
      }

      .subsection-title {
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semibold);
        margin-bottom: var(--space-4);
        color: var(--color-fg-default);
      }

      .component-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--space-4);
        margin-bottom: var(--space-6);
      }

      .component-row {
        display: flex;
        gap: var(--space-3);
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: var(--space-4);
      }

      .color-swatch {
        width: 100px;
        height: 100px;
        border-radius: var(--radius-lg);
        border: var(--border-width-thin) solid var(--color-border-default);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-family-mono);
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-semibold);
      }

      .example-card {
        padding: var(--space-4);
      }

      code {
        background-color: var(--color-canvas-subtle);
        padding: 0.2em 0.4em;
        border-radius: var(--radius-sm);
        font-family: var(--font-family-mono);
        font-size: var(--font-size-sm);
      }
    `
  ];

  render() {
    return html`
      <div class="showcase">
        <!-- Header -->
        <gh-stack spacing="4">
          <gh-text size="4xl" weight="bold">
            Design System Showcase
          </gh-text>
          <gh-text variant="muted" size="lg">
            GitHub Terminal-inspired component library
          </gh-text>
        </gh-stack>

        <!-- Buttons Section -->
        <div class="section">
          <h2 class="section-title">Buttons</h2>
          
          <div class="subsection">
            <h3 class="subsection-title">Variants</h3>
            <div class="component-row">
              <gh-button variant="default">Default</gh-button>
              <gh-button variant="primary">Primary</gh-button>
              <gh-button variant="danger">Danger</gh-button>
              <gh-button variant="outline">Outline</gh-button>
              <gh-button variant="ghost">Ghost</gh-button>
            </div>
          </div>

          <div class="subsection">
            <h3 class="subsection-title">Sizes</h3>
            <div class="component-row">
              <gh-button size="sm">Small</gh-button>
              <gh-button size="md">Medium</gh-button>
              <gh-button size="lg">Large</gh-button>
            </div>
          </div>

          <div class="subsection">
            <h3 class="subsection-title">States</h3>
            <div class="component-row">
              <gh-button variant="primary">Active</gh-button>
              <gh-button variant="primary" disabled>Disabled</gh-button>
              <gh-button variant="primary" fullWidth>Full Width</gh-button>
            </div>
          </div>
        </div>

        <!-- Links Section -->
        <div class="section">
          <h2 class="section-title">Links</h2>
          
          <div class="component-row">
            <gh-link href="#" variant="default">Default Link</gh-link>
            <gh-link href="#" variant="muted">Muted Link</gh-link>
            <gh-link href="#" variant="accent">Accent Link</gh-link>
            <gh-link href="#" underline>Underlined Link</gh-link>
          </div>
        </div>

        <!-- Typography Section -->
        <div class="section">
          <h2 class="section-title">Typography</h2>
          
          <div class="subsection">
            <h3 class="subsection-title">Text Variants</h3>
            <gh-stack spacing="2">
              <gh-text variant="body">Body text - default</gh-text>
              <gh-text variant="muted">Muted text - for less emphasis</gh-text>
              <gh-text variant="subtle">Subtle text - minimal emphasis</gh-text>
              <gh-text variant="accent">Accent text - for highlights</gh-text>
              <gh-text variant="mono">Monospace text - for code</gh-text>
            </gh-stack>
          </div>

          <div class="subsection">
            <h3 class="subsection-title">Text Sizes</h3>
            <gh-stack spacing="2">
              <gh-text size="xs">Extra small text</gh-text>
              <gh-text size="sm">Small text</gh-text>
              <gh-text size="base">Base text</gh-text>
              <gh-text size="lg">Large text</gh-text>
              <gh-text size="xl">Extra large text</gh-text>
              <gh-text size="2xl">2X large text</gh-text>
              <gh-text size="3xl">3X large text</gh-text>
            </gh-stack>
          </div>

          <div class="subsection">
            <h3 class="subsection-title">Font Weights</h3>
            <gh-stack spacing="2">
              <gh-text weight="normal">Normal weight</gh-text>
              <gh-text weight="medium">Medium weight</gh-text>
              <gh-text weight="semibold">Semibold weight</gh-text>
              <gh-text weight="bold">Bold weight</gh-text>
            </gh-stack>
          </div>
        </div>

        <!-- Inputs Section -->
        <div class="section">
          <h2 class="section-title">Inputs</h2>
          
          <div class="subsection">
            <h3 class="subsection-title">Sizes</h3>
            <gh-stack spacing="3">
              <gh-input size="sm" placeholder="Small input"></gh-input>
              <gh-input size="md" placeholder="Medium input (default)"></gh-input>
              <gh-input size="lg" placeholder="Large input"></gh-input>
            </gh-stack>
          </div>

          <div class="subsection">
            <h3 class="subsection-title">States</h3>
            <gh-stack spacing="3">
              <gh-input placeholder="Default state"></gh-input>
              <gh-input state="success" placeholder="Success state" value="Valid input"></gh-input>
              <gh-input state="error" placeholder="Error state"></gh-input>
              <gh-input disabled placeholder="Disabled state"></gh-input>
            </gh-stack>
          </div>

          <div class="subsection">
            <h3 class="subsection-title">Input Types</h3>
            <gh-stack spacing="3">
              <gh-input type="text" placeholder="Text input"></gh-input>
              <gh-input type="email" placeholder="Email input"></gh-input>
              <gh-input type="password" placeholder="Password input"></gh-input>
              <gh-input type="number" placeholder="Number input"></gh-input>
            </gh-stack>
          </div>
        </div>

        <!-- Cards Section -->
        <div class="section">
          <h2 class="section-title">Cards</h2>
          
          <div class="component-grid">
            <gh-card variant="default">
              <gh-stack spacing="2">
                <gh-text weight="semibold">Default Card</gh-text>
                <gh-text variant="muted" size="sm">
                  Clean card with border
                </gh-text>
              </gh-stack>
            </gh-card>

            <gh-card variant="subtle">
              <gh-stack spacing="2">
                <gh-text weight="semibold">Subtle Card</gh-text>
                <gh-text variant="muted" size="sm">
                  Soft background variant
                </gh-text>
              </gh-stack>
            </gh-card>

            <gh-card variant="bordered" hoverable>
              <gh-stack spacing="2">
                <gh-text weight="semibold">Hoverable Card</gh-text>
                <gh-text variant="muted" size="sm">
                  Try hovering over me!
                </gh-text>
              </gh-stack>
            </gh-card>
          </div>
        </div>

        <!-- Navigation Section -->
        <div class="section">
          <h2 class="section-title">Navigation</h2>
          
          <div class="subsection">
            <h3 class="subsection-title">Header Navigation</h3>
            <gh-nav variant="header" align="center">
              <gh-nav-item href="#" active>Home</gh-nav-item>
              <gh-nav-item href="#">About</gh-nav-item>
              <gh-nav-item href="#">Portfolio</gh-nav-item>
              <gh-nav-item href="#">Contact</gh-nav-item>
            </gh-nav>
          </div>

          <div class="subsection">
            <h3 class="subsection-title">Footer Navigation</h3>
            <gh-nav variant="footer" align="center">
              <gh-nav-item href="#">Privacy</gh-nav-item>
              <gh-nav-item href="#">Terms</gh-nav-item>
              <gh-nav-item href="#">Support</gh-nav-item>
            </gh-nav>
          </div>
        </div>

        <!-- Layout Section -->
        <div class="section">
          <h2 class="section-title">Layout Components</h2>
          
          <div class="subsection">
            <h3 class="subsection-title">Container</h3>
            <gh-container size="md">
              <gh-card>
                <gh-text>
                  This content is wrapped in a <code>&lt;gh-container&gt;</code> component
                  that provides responsive max-width and centering.
                </gh-text>
              </gh-card>
            </gh-container>
          </div>

          <div class="subsection">
            <h3 class="subsection-title">Stack (Vertical Spacing)</h3>
            <gh-card>
              <gh-stack spacing="4">
                <gh-text weight="semibold">Stack Component</gh-text>
                <gh-text>Item 1 - Evenly spaced vertically</gh-text>
                <gh-text>Item 2 - No manual margins needed</gh-text>
                <gh-text>Item 3 - Clean and consistent</gh-text>
              </gh-stack>
            </gh-card>
          </div>

          <div class="subsection">
            <h3 class="subsection-title">Flex (Flexible Layout)</h3>
            <gh-card>
              <gh-flex justify="between" align="center" gap="4">
                <gh-text weight="semibold">Flex Container</gh-text>
                <gh-button size="sm" variant="outline">Action</gh-button>
              </gh-flex>
            </gh-card>
          </div>
        </div>

        <!-- Color System -->
        <div class="section">
          <h2 class="section-title">Color System</h2>
          
          <div class="subsection">
            <h3 class="subsection-title">Theme Colors</h3>
            <gh-text variant="muted" size="sm">
              Colors automatically adapt to light/dark mode preference
            </gh-text>
            <br><br>
            <gh-flex gap="4" wrap>
              <div>
                <div class="color-swatch" style="background-color: var(--color-accent-emphasis); color: white;">
                  Accent
                </div>
              </div>
              <div>
                <div class="color-swatch" style="background-color: var(--color-success-emphasis); color: white;">
                  Success
                </div>
              </div>
              <div>
                <div class="color-swatch" style="background-color: var(--color-danger-emphasis); color: white;">
                  Danger
                </div>
              </div>
              <div>
                <div class="color-swatch" style="background-color: var(--color-warning-emphasis); color: white;">
                  Warning
                </div>
              </div>
              <div>
                <div class="color-swatch" style="background-color: var(--color-attention-emphasis); color: white;">
                  Attention
                </div>
              </div>
            </gh-flex>
          </div>
        </div>

        <!-- Usage Example -->
        <div class="section">
          <h2 class="section-title">Complete Example</h2>
          <gh-card padding="lg">
            <gh-stack spacing="6">
              <gh-text size="2xl" weight="bold">Get Started</gh-text>
              <gh-text variant="muted">
                Build beautiful, accessible interfaces with our GitHub terminal-inspired design system.
              </gh-text>
              
              <gh-flex direction="column" gap="3">
                <gh-input placeholder="Enter your email" type="email"></gh-input>
                <gh-input placeholder="Choose a password" type="password"></gh-input>
              </gh-flex>
              
              <gh-flex gap="3">
                <gh-button variant="primary" fullWidth>Sign Up</gh-button>
                <gh-button variant="outline" fullWidth>Learn More</gh-button>
              </gh-flex>
              
              <gh-text size="sm" variant="muted">
                Already have an account? 
                <gh-link href="#" variant="accent">Sign in</gh-link>
              </gh-text>
            </gh-stack>
          </gh-card>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'design-showcase': DesignShowcase;
  }
}
