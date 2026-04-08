# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| Latest  | ✅        |
| < 1.0   | ❌        |

## Reporting a Vulnerability

We take the security of **Calcifer.Shop** seriously. If you believe you've found a security vulnerability, please follow these steps:

### 1. Do NOT Open a Public Issue

Security vulnerabilities should **never** be reported via GitHub issues, discussions, or pull requests. Public disclosure before a fix is available puts all users at risk.

### 2. Contact Us Privately

Send a detailed report to:

📧 **security@calcifer.shop**

Include the following information:
- **Description** of the vulnerability
- **Steps to reproduce** (as detailed as possible)
- **Impact assessment** — what could an attacker do?
- **Affected component** (page, API endpoint, dependency, etc.)
- **Suggested fix** (if you have one)

### 3. Response Timeline

| Stage | Timeframe |
|-------|-----------|
| Acknowledgement | Within **48 hours** |
| Initial assessment | Within **5 business days** |
| Fix development | Depends on severity |
| Public disclosure | After fix is deployed |

### 4. Severity Classification

| Severity | Description | Example |
|----------|-------------|---------|
| **Critical** | Remote code execution, data breach | Dependency with known RCE |
| **High** | XSS, CSRF, authentication bypass | Stored XSS via user input |
| **Medium** | Information disclosure, DoS | Verbose error messages in production |
| **Low** | Minor issues, best-practice violations | Missing security headers |

## Security Measures in Place

### Application Layer
- **Vue 3 auto-escaping** prevents XSS via template rendering
- **No `v-html`** with user-controlled content
- **CSP headers** configured in Nuxt/Nitro
- **Strict TypeScript** enforcement across the codebase

### Data & Privacy
- **No cookies** — only `localStorage` for theme preferences
- **No analytics tracking** — zero third-party data collection
- **No database** — static site with no user data storage
- **No authentication** — no credentials to protect on the frontend

### Infrastructure
- **HTTPS-only** in production
- **Dependency auditing** via `npm audit` on every CI run
- **Automated updates** via Dependabot / Renovate (when enabled)
- **Minimal dependencies** — only what's necessary

### Supply Chain
- **Lock file committed** (`package-lock.json`) to prevent dependency substitution
- **Exact version pins** for critical dependencies
- **Regular audits** of transitive dependencies

## Recognition

We appreciate researchers who report vulnerabilities responsibly. Contributors who report valid security issues will be:

- Credited in the project's security acknowledgements (unless they prefer to remain anonymous)
- Thanked publicly in release notes (with permission)

## Contact

For non-security-related questions, use [GitHub Issues](https://github.com/FullstackRakibul/calcifer.shop/issues).

For security matters only: **security@calcifer.shop**
