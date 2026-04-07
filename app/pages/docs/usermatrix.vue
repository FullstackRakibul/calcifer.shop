<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════ -->
    <section class="relative pt-32 pb-16 px-6 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-fire-500/8 rounded-full blur-[120px]"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <NuxtLink to="/docs" class="hover:text-fire-400 transition-colors">Docs</NuxtLink>
          <span>/</span>
          <span class="text-fire-400 font-medium">Calcifer.UserMatrix</span>
        </div>

        <div class="flex items-center gap-4 mb-6">
          <div class="text-5xl">🔐</div>
          <div>
            <div
              class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-fire-500/10 text-fire-400 text-xs font-bold mb-2">
              Access Control
            </div>
            <h1 class="text-4xl sm:text-5xl font-black tracking-tighter">Calcifer.UserMatrix</h1>
          </div>
        </div>

        <p class="text-lg text-muted-foreground font-light max-w-3xl">
          Universal access and identity control. Roles, permissions, feature-level access,
          audit logs, and SSO — designed to work across multiple systems from a single source of truth.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SIDEBAR + CONTENT
         ═══════════════════════════════════════════ -->
    <section class="pb-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-4 gap-12">

          <!-- Sidebar -->
          <aside class="lg:col-span-1">
            <nav class="sticky top-24 space-y-1">
              <p class="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">On This Page</p>
              <button v-for="(section, idx) in sections" :key="idx"
                @click="activeSection = idx"
                class="w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200"
                :class="activeSection === idx
                  ? 'bg-fire-500/10 text-fire-400 font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'">
                {{ section.title }}
              </button>
            </nav>
          </aside>

          <!-- Content -->
          <div class="lg:col-span-3 space-y-16">

            <!-- Overview -->
            <div id="overview">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Overview
              </h2>
              <div class="prose-section">
                <p>
                  UserMatrix solves a problem that every multi-system business eventually hits:
                  fragmented identity management. Users exist in multiple databases, permissions are
                  inconsistent, and audit trails are nonexistent.
                </p>
                <p>
                  UserMatrix provides a centralized identity and access control layer that works across
                  all your Calcifer products — and can extend to third-party systems via federation.
                  One user, one identity, consistent permissions everywhere.
                </p>

                <div class="mt-6 p-5 rounded-xl border border-fire-500/20 bg-fire-500/5">
                  <p class="text-sm font-semibold text-fire-400 mb-2">💡 Core Principle</p>
                  <p class="text-sm text-muted-foreground">
                    Access control should be invisible when it's working correctly — and impossible to bypass when it's not.
                    UserMatrix enforces this at the infrastructure level, not the application level.
                  </p>
                </div>
              </div>
            </div>

            <!-- Roles & Permissions -->
            <div id="roles">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Role & Permission Architecture
              </h2>
              <div class="prose-section">
                <p>
                  UserMatrix uses a hierarchical RBAC (Role-Based Access Control) model with support
                  for fine-grained permissions at the resource level. Roles are composable — a user
                  can hold multiple roles, and permissions are resolved through a merge strategy.
                </p>

                <div class="mt-6 rounded-xl border border-border/50 overflow-hidden">
                  <div class="px-4 py-2 bg-muted/50 border-b border-border/50">
                    <span class="text-xs text-muted-foreground font-mono">Permission Hierarchy</span>
                  </div>
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>SuperAdmin
  └── Admin
       ├── Manager
       │    ├── Editor       → Can create & modify content
       │    └── Reviewer     → Can approve & reject content
       └── Operator
            ├── Support      → Can view & respond to tickets
            └── ReadOnly     → Can view dashboards & reports

Each role inherits permissions from its parent.
Custom roles can be created at any level.</code></pre>
                </div>

                <div class="mt-6 grid sm:grid-cols-2 gap-4">
                  <div v-for="(feature, idx) in rbacFeatures" :key="idx"
                    class="p-4 rounded-xl border border-border/50 bg-card/30">
                    <h3 class="font-bold text-foreground text-sm mb-1 flex items-center gap-2">
                      <span class="text-fire-400">{{ feature.icon }}</span>
                      {{ feature.title }}
                    </h3>
                    <p class="text-xs text-muted-foreground leading-relaxed">{{ feature.detail }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Feature-Level Access -->
            <div id="feature-access">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Feature-Level Access Control
              </h2>
              <div class="prose-section">
                <p>
                  Beyond roles, UserMatrix supports feature-level access — controlling which specific
                  features a user can access based on their license tier, subscription, or explicit grants.
                  This integrates directly with Forge's licensing engine.
                </p>

                <div class="mt-6 rounded-xl border border-border/50 overflow-hidden">
                  <div class="px-4 py-2 bg-muted/50 border-b border-border/50">
                    <span class="text-xs text-muted-foreground font-mono">Access Resolution Flow</span>
                  </div>
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>Request → Authenticate (JWT)
       → Resolve User Identity
       → Load Role Permissions    → Merge
       → Load Feature Grants      → Merge
       → Load License Features    → Merge
       → Final Access Decision
       → Allow / Deny (403)
       → Log to Audit Trail</code></pre>
                </div>

                <div class="mt-4 p-5 rounded-xl border border-fire-500/20 bg-fire-500/5">
                  <p class="text-sm font-semibold text-fire-400 mb-2">Integration with Forge</p>
                  <p class="text-sm text-muted-foreground">
                    When used alongside Calcifer.Forge, UserMatrix automatically syncs license tier features
                    into the permission resolution pipeline. A user's effective permissions become the union
                    of their role permissions and their license-granted features.
                  </p>
                </div>
              </div>
            </div>

            <!-- Audit System -->
            <div id="audit">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Audit Logging System
              </h2>
              <div class="prose-section">
                <p>
                  Every access decision, every permission change, every login attempt — logged.
                  The audit system creates an immutable, queryable trail of everything that happens
                  in the identity layer.
                </p>

                <div class="space-y-3 mt-6">
                  <div v-for="(item, idx) in auditFeatures" :key="idx"
                    class="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30">
                    <span class="text-fire-400 shrink-0 mt-0.5">{{ item.icon }}</span>
                    <div>
                      <p class="font-semibold text-foreground text-sm">{{ item.title }}</p>
                      <p class="text-xs text-muted-foreground mt-1 leading-relaxed">{{ item.detail }}</p>
                    </div>
                  </div>
                </div>

                <div class="mt-6 rounded-xl border border-border/50 overflow-hidden">
                  <div class="px-4 py-2 bg-muted/50 border-b border-border/50 flex items-center justify-between">
                    <span class="text-xs text-muted-foreground font-mono">GET /api/audit/logs?userId=usr_123</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-fire-500/10 text-fire-400 font-bold">EXAMPLE</span>
                  </div>
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>{
  "logs": [
    {
      "timestamp": "2026-04-07T14:23:11Z",
      "action": "permission.granted",
      "actor": "admin@company.com",
      "target": "user@company.com",
      "details": {
        "permission": "reports.export",
        "method": "role_assignment",
        "role": "Manager"
      }
    },
    {
      "timestamp": "2026-04-07T14:25:03Z",
      "action": "resource.accessed",
      "actor": "user@company.com",
      "target": "/api/reports/revenue",
      "details": {
        "result": "allowed",
        "resolved_via": "role:Manager → reports.export"
      }
    }
  ]
}</code></pre>
                </div>
              </div>
            </div>

            <!-- SSO -->
            <div id="sso">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                SSO & Identity Federation
              </h2>
              <div class="prose-section">
                <p>
                  UserMatrix supports Single Sign-On (SSO) through industry-standard protocols,
                  allowing your users to authenticate once and access all connected systems seamlessly.
                </p>

                <div class="grid sm:grid-cols-2 gap-4 mt-6">
                  <div v-for="(protocol, idx) in ssoProtocols" :key="idx"
                    class="p-5 rounded-xl border border-border/50 bg-card/30">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="text-xl">{{ protocol.icon }}</span>
                      <h3 class="font-bold text-foreground text-sm">{{ protocol.title }}</h3>
                      <span v-if="protocol.status"
                        class="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider"
                        :class="protocol.status === 'live' ? 'bg-green-500/10 text-green-400' : 'bg-fire-500/10 text-fire-400'">
                        {{ protocol.status }}
                      </span>
                    </div>
                    <p class="text-xs text-muted-foreground leading-relaxed">{{ protocol.detail }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- API Security -->
            <div id="security">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                API Security Patterns
              </h2>
              <div class="prose-section">
                <p>
                  UserMatrix enforces security at the API gateway level. Every request is validated
                  for authentication, authorization, and rate limiting before reaching your business logic.
                </p>

                <div class="space-y-3 mt-6">
                  <div v-for="(pattern, idx) in securityPatterns" :key="idx"
                    class="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30">
                    <span class="text-fire-400 shrink-0 mt-0.5">{{ pattern.icon }}</span>
                    <div>
                      <p class="font-semibold text-foreground text-sm">{{ pattern.title }}</p>
                      <p class="text-xs text-muted-foreground mt-1 leading-relaxed">{{ pattern.detail }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="p-8 rounded-2xl border border-fire-500/20 bg-fire-500/5 text-center">
              <p class="text-xl font-bold text-foreground mb-2">Control access. Everywhere.</p>
              <p class="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
                One identity system that works across your entire product ecosystem.
              </p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <NuxtLink to="/products/usermatrix">
                  <Button class="px-6 bg-fire-500 hover:bg-fire-600 text-white border-0">
                    🔐 Get UserMatrix
                  </Button>
                </NuxtLink>
                <NuxtLink to="/docs">
                  <Button variant="outline" class="px-6 border-border hover:border-fire-500/50">
                    ← Back to Docs
                  </Button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const activeSection = ref(0)

const sections = [
  { title: 'Overview' },
  { title: 'Roles & Permissions' },
  { title: 'Feature-Level Access' },
  { title: 'Audit System' },
  { title: 'SSO & Federation' },
  { title: 'API Security' },
]

const rbacFeatures = [
  {
    icon: '🏗️',
    title: 'Hierarchical Roles',
    detail: 'Roles inherit from parent roles. Create custom roles at any level of the hierarchy with granular permission overrides.',
  },
  {
    icon: '🧩',
    title: 'Composable Permissions',
    detail: 'Users can hold multiple roles. Permissions are merged using a union strategy — the most permissive applicable role wins.',
  },
  {
    icon: '🔒',
    title: 'Resource-Level Guards',
    detail: 'Permissions operate at the resource level — not just the endpoint level. Control who can access specific records, not just endpoints.',
  },
  {
    icon: '⚡',
    title: 'Dynamic Resolution',
    detail: 'Permission checks happen in real-time against cached role definitions. No stale permissions. Changes propagate instantly.',
  },
]

const auditFeatures = [
  {
    icon: '📝',
    title: 'Complete Activity Log',
    detail: 'Every login, logout, permission change, role assignment, and access decision is recorded with timestamps, actors, and context.',
  },
  {
    icon: '🔍',
    title: 'Queryable & Filterable',
    detail: 'Search audit logs by user, action type, resource, date range, or result. Export to JSON or CSV for compliance reporting.',
  },
  {
    icon: '🔐',
    title: 'Immutable Records',
    detail: 'Audit logs cannot be modified or deleted. They\'re stored in an append-only format to ensure compliance integrity.',
  },
  {
    icon: '🚨',
    title: 'Alert Rules',
    detail: 'Configure alerts for suspicious patterns — multiple failed logins, privilege escalation attempts, or unauthorized access attempts.',
  },
]

const ssoProtocols = [
  {
    icon: '🔑',
    title: 'OAuth 2.0 / OIDC',
    status: 'live',
    detail: 'Full OAuth 2.0 and OpenID Connect support. Works with Azure AD, Google Workspace, Okta, and any OIDC-compliant provider.',
  },
  {
    icon: '🏛️',
    title: 'SAML 2.0',
    status: 'live',
    detail: 'Enterprise-grade SAML support for organizations that require it. Compatible with ADFS and enterprise identity providers.',
  },
  {
    icon: '🔗',
    title: 'API Key Authentication',
    status: 'live',
    detail: 'For service-to-service communication. Scoped API keys with configurable permissions and expiration.',
  },
  {
    icon: '🌐',
    title: 'LDAP / Active Directory',
    status: 'planned',
    detail: 'Direct LDAP integration for organizations that manage identities through Active Directory or compatible directory services.',
  },
]

const securityPatterns = [
  {
    icon: '🛡️',
    title: 'JWT Validation Pipeline',
    detail: 'Every request passes through a multi-stage JWT validation — signature verification, expiry check, issuer validation, and claim extraction.',
  },
  {
    icon: '⏱️',
    title: 'Rate Limiting',
    detail: 'Configurable rate limits per endpoint, per user, and per IP. Prevents abuse and ensures fair resource distribution.',
  },
  {
    icon: '🔄',
    title: 'Token Refresh & Rotation',
    detail: 'Short-lived access tokens with refresh token rotation. Compromised tokens expire quickly and can\'t be reused.',
  },
  {
    icon: '📋',
    title: 'CORS & CSP Policies',
    detail: 'Strict CORS configuration and Content Security Policies to prevent cross-origin attacks and injection vulnerabilities.',
  },
]

useHead({
  title: 'Calcifer.UserMatrix Documentation — Calcifer.Shop',
  meta: [
    {
      name: 'description',
      content: 'Complete documentation for Calcifer.UserMatrix — universal access and identity control with RBAC, audit logging, SSO federation, and API security patterns.',
    },
  ],
})
</script>

<style scoped>
.prose-section p {
  @apply text-muted-foreground leading-relaxed mb-4;
}

.prose-section p:last-child {
  @apply mb-0;
}
</style>
