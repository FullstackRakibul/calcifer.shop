<template>
  <div class="min-h-screen bg-background">

    <!-- ═══════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════ -->
    <section class="relative pt-32 pb-16 px-6 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 left-1/3 w-96 h-96 bg-fire-500/8 rounded-full blur-[120px]"></div>
      </div>

      <div class="relative z-10 max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <NuxtLink to="/docs" class="hover:text-fire-400 transition-colors">Docs</NuxtLink>
          <span>/</span>
          <span class="text-fire-400 font-medium">Calcifer.Forge</span>
        </div>

        <div class="flex items-center gap-4 mb-6">
          <div class="text-5xl">🔥</div>
          <div>
            <div
              class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-fire-500/10 text-fire-400 text-xs font-bold mb-2">
              Architecture Engine
            </div>
            <h1 class="text-4xl sm:text-5xl font-black tracking-tighter">Calcifer.Forge</h1>
          </div>
        </div>

        <p class="text-lg text-muted-foreground font-light max-w-3xl">
          The .NET 8 microservice foundation with built-in licensing, feature gating,
          seat control, and modular architecture. Everything you need to turn an API
          into a monetizable product.
        </p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════
         SIDEBAR + CONTENT LAYOUT
         ═══════════════════════════════════════════ -->
    <section class="pb-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-4 gap-12">

          <!-- Sidebar Navigation -->
          <aside class="lg:col-span-1">
            <nav class="sticky top-24 space-y-1">
              <p class="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">On This Page</p>
              <button v-for="(section, idx) in sections" :key="idx" @click="activeSection = idx"
                class="w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200" :class="activeSection === idx
                  ? 'bg-fire-500/10 text-fire-400 font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'">
                {{ section.title }}
              </button>
            </nav>
          </aside>

          <!-- Main Content -->
          <div class="lg:col-span-3 space-y-16">

            <!-- Overview -->
            <div id="overview">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Overview
              </h2>
              <div class="prose-section">
                <p>
                  Calcifer.Forge is not just a template — it's the missing layer between your software
                  and your business model. While most .NET templates give you CRUD endpoints and basic auth,
                  Forge ships with the infrastructure that actually makes software sellable.
                </p>
                <p>
                  Built on .NET 8 LTS with Clean Architecture principles and vertical slice organization,
                  Forge provides a production-ready foundation that includes authentication, licensing,
                  feature gating, and seat management — all integrated from first commit.
                </p>

                <div class="mt-6 p-5 rounded-xl border border-fire-500/20 bg-fire-500/5">
                  <p class="text-sm font-semibold text-fire-400 mb-2">💡 Design Philosophy</p>
                  <p class="text-sm text-muted-foreground">
                    Every feature in Forge exists because a real developer hit a wall trying to monetize their software.
                    No vanity features. No "nice to have." Every module solves a real business problem.
                  </p>
                </div>
              </div>
            </div>

            <!-- Architecture -->
            <div id="architecture">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Architecture
              </h2>
              <div class="prose-section">
                <p>
                  Forge follows Clean Architecture with a practical twist — vertical slices within each layer.
                  This means features are self-contained, testable, and deployable independently.
                </p>

                <div class="grid sm:grid-cols-2 gap-4 mt-6">
                  <div v-for="(layer, idx) in architectureLayers" :key="idx"
                    class="p-4 rounded-xl border border-border/50 bg-card/30">
                    <h3 class="font-bold text-foreground text-sm mb-1">{{ layer.name }}</h3>
                    <p class="text-xs text-muted-foreground leading-relaxed">{{ layer.description }}</p>
                  </div>
                </div>

                <!-- Code Block -->
                <div class="mt-6 rounded-xl border border-border/50 overflow-hidden">
                  <div class="px-4 py-2 bg-muted/50 border-b border-border/50 flex items-center gap-2">
                    <span class="text-xs text-muted-foreground font-mono">Project Structure</span>
                  </div>
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>Calcifer.Forge/
├── src/
│   ├── Core/              # Entities, interfaces, domain logic
│   ├── Application/       # Use cases, DTOs, validators
│   ├── Infrastructure/    # EF Core, Identity, external services
│   ├── API/               # Minimal API endpoints, middleware
│   ├── Modules/           # Feature modules with self-contained routes
│   └── Licensing/         # License engine, activation, gating
├── tests/
│   ├── Unit/
│   └── Integration/
├── docker-compose.yml
└── Calcifer.sln</code></pre>
                </div>
              </div>
            </div>

            <!-- Licensing Engine -->
            <div id="licensing">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Licensing Engine
              </h2>
              <div class="prose-section">
                <p>
                  The licensing engine is the heart of Forge's monetization infrastructure.
                  It handles the complete lifecycle — creation, validation, activation, expiration,
                  and revocation — with no third-party dependencies.
                </p>

                <div class="space-y-3 mt-6">
                  <div v-for="(feature, idx) in licensingFeatures" :key="idx"
                    class="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30">
                    <span class="text-fire-400 shrink-0 mt-0.5">{{ feature.icon }}</span>
                    <div>
                      <p class="font-semibold text-foreground text-sm">{{ feature.title }}</p>
                      <p class="text-xs text-muted-foreground mt-1 leading-relaxed">{{ feature.detail }}</p>
                    </div>
                  </div>
                </div>

                <!-- API Example -->
                <div class="mt-6 rounded-xl border border-border/50 overflow-hidden">
                  <div class="px-4 py-2 bg-muted/50 border-b border-border/50 flex items-center justify-between">
                    <span class="text-xs text-muted-foreground font-mono">POST /api/license/activate</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-fire-500/10 text-fire-400 font-bold">EXAMPLE</span>
                  </div>
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>{
  "licenseKey": "LIC-PRO-XXXX-XXXX",
  "machineId": "DESKTOP-A1B2C3"
}

// Response
{
  "activated": true,
  "tier": "professional",
  "features": ["analytics", "export", "multi-tenant"],
  "seatsRemaining": 4,
  "expiresAt": "2027-04-01T00:00:00Z"
}</code></pre>
                </div>
              </div>
            </div>

            <!-- Feature Gating -->
            <div id="gating">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Feature Gating
              </h2>
              <div class="prose-section">
                <p>
                  Feature gating in Forge goes beyond simple role checks. It operates at the endpoint level
                  using custom attributes, allowing you to control which license tiers can access which features —
                  declaratively.
                </p>

                <div class="mt-6 rounded-xl border border-border/50 overflow-hidden">
                  <div class="px-4 py-2 bg-muted/50 border-b border-border/50">
                    <span class="text-xs text-muted-foreground font-mono">AnalyticsEndpoints.cs</span>
                  </div>
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>[RequireFeature("analytics")]
[RequireFeature("export")]
public async Task&lt;IResult&gt; ExportAnalyticsReport(
    IAnalyticsService analytics,
    ILicenseContext license)
{
    // Only users with "analytics" + "export" features
    // in their license tier reach this code.
    var report = await analytics.GenerateReport(license.TenantId);
    return Results.File(report.ToCsv(), "text/csv");
}</code></pre>
                </div>

                <div class="mt-4 p-5 rounded-xl border border-fire-500/20 bg-fire-500/5">
                  <p class="text-sm font-semibold text-fire-400 mb-2">How it works</p>
                  <p class="text-sm text-muted-foreground">
                    The <code class="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">[RequireFeature]</code>
                    attribute
                    checks the current user's active license, resolves their tier, and validates whether the required
                    feature
                    is included. If not, a 403 Forbidden response is returned automatically — no manual checking needed.
                  </p>
                </div>
              </div>
            </div>

            <!-- Tech Specs -->
            <div id="specs">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Tech Specifications
              </h2>
              <div class="rounded-xl border border-border/50 overflow-hidden">
                <div class="divide-y divide-border/50">
                  <div v-for="(spec, idx) in techSpecs" :key="idx" class="grid grid-cols-2 px-5 py-3 text-sm"
                    :class="idx % 2 === 0 ? 'bg-card/30' : 'bg-card/10'">
                    <span class="text-muted-foreground">{{ spec.label }}</span>
                    <span class="text-foreground font-medium">{{ spec.value }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Getting Started -->
            <div id="getting-started">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Getting Started
              </h2>
              <div class="prose-section">
                <div class="space-y-6">
                  <div v-for="(step, idx) in gettingStarted" :key="idx" class="flex gap-5">
                    <div class="shrink-0">
                      <div
                        class="w-8 h-8 rounded-full bg-fire-500/10 flex items-center justify-center text-fire-400 text-sm font-bold">
                        {{ idx + 1 }}
                      </div>
                    </div>
                    <div class="flex-1">
                      <h3 class="font-bold text-foreground mb-2">{{ step.title }}</h3>
                      <p class="text-sm text-muted-foreground leading-relaxed mb-3">{{ step.detail }}</p>
                      <div v-if="step.code" class="rounded-xl border border-border/50 overflow-hidden">
                        <pre
                          class="p-3 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>{{ step.code }}</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA -->
            <div class="p-8 rounded-2xl border border-fire-500/20 bg-fire-500/5 text-center">
              <p class="text-xl font-bold text-foreground mb-2">Ready to build?</p>
              <p class="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
                Forge is designed to get you from zero to a monetizable API in under a day.
              </p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <NuxtLink to="/products/forge">
                  <Button class="px-6 bg-fire-500 hover:bg-fire-600 text-white border-0">
                    🔥 Get Calcifer.Forge
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
  { title: 'Architecture' },
  { title: 'Licensing Engine' },
  { title: 'Feature Gating' },
  { title: 'Tech Specifications' },
  { title: 'Getting Started' },
]

const architectureLayers = [
  { name: 'Core', description: 'Entities, interfaces, and domain logic. Zero dependencies on external frameworks.' },
  { name: 'Application', description: 'Use cases, DTOs, validators, and business rules. Orchestrates domain operations.' },
  { name: 'Infrastructure', description: 'EF Core data access, ASP.NET Identity, email services, and external integrations.' },
  { name: 'API', description: 'Minimal API endpoints, middleware, filters, and request pipeline configuration.' },
  { name: 'Modules', description: 'Feature modules with self-contained routes, handlers, and domain logic.' },
  { name: 'Licensing', description: 'License engine, activation service, feature resolver, and seat management.' },
]

const licensingFeatures = [
  {
    icon: '🔑',
    title: 'License Key Generation',
    detail: 'Generate unique, cryptographically secure license keys bound to specific tiers and feature sets. Keys can be time-limited or perpetual.',
  },
  {
    icon: '✅',
    title: 'Activation & Validation',
    detail: 'Activate licenses against specific machine IDs. Each validation checks expiry, feature set, tier, and seat availability in a single call.',
  },
  {
    icon: '💺',
    title: 'Seat Control',
    detail: 'Limit concurrent activations per license key. When a user exceeds their seat limit, new activations are blocked until existing ones are released.',
  },
  {
    icon: '📊',
    title: 'Usage Tracking',
    detail: 'Monitor activation patterns, track which features are being used, and generate reports on license utilization across your customer base.',
  },
]

const techSpecs = [
  { label: 'Framework', value: '.NET 8 LTS' },
  { label: 'Architecture', value: 'Clean Architecture + Vertical Slices' },
  { label: 'Auth', value: 'JWT Bearer + ASP.NET Identity' },
  { label: 'Database', value: 'EF Core (SQL Server / PostgreSQL)' },
  { label: 'API Style', value: 'Minimal APIs + Feature Modules' },
  { label: 'License Model', value: 'Key-based with Machine Binding' },
  { label: 'Feature Gating', value: 'Attribute-driven [RequireFeature]' },
  { label: 'Seeding', value: 'Auto-seed Roles, Admin, Reference Data' },
  { label: 'Testing', value: 'xUnit + Integration Tests' },
  { label: 'Docker', value: 'Dockerfile + Compose included' },
]

const gettingStarted = [
  {
    title: 'Clone the Repository',
    detail: 'Start by cloning the Forge template into your project directory.',
    code: 'git clone https://github.com/calcifer-shop/forge.git my-project\ncd my-project',
  },
  {
    title: 'Configure Your Database',
    detail: 'Update appsettings.json with your database connection string. Forge supports both SQL Server and PostgreSQL out of the box.',
    code: '// appsettings.json\n"ConnectionStrings": {\n  "Default": "Server=localhost;Database=MyApp;Trusted_Connection=true;"\n}',
  },
  {
    title: 'Run Migrations & Seed Data',
    detail: 'Apply the database migrations and seed initial data including roles, admin user, and reference data.',
    code: 'dotnet ef database update\ndotnet run --seed',
  },
  {
    title: 'Start Building',
    detail: 'The API is running. Default admin credentials are in the seed output. Create your first feature module and start shipping.',
    code: 'dotnet run\n# API available at https://localhost:5001\n# Swagger at https://localhost:5001/swagger',
  },
]

useHead({
  title: 'Calcifer.Forge Documentation — Calcifer.Shop',
  meta: [
    {
      name: 'description',
      content: 'Complete documentation for Calcifer.Forge — the .NET 8 architecture engine with built-in licensing, feature gating, and seat control.',
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