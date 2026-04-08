<template>
  <div class="min-h-screen bg-background">
    <!-- Hero (unchanged but kept for brevity) -->
    <section class="relative pt-32 pb-16 px-6 overflow-hidden">
      <!-- ... same hero as before ... -->
      <div class="relative z-10 max-w-4xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <NuxtLink to="/docs" class="hover:text-fire-400">Docs</NuxtLink>
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
          The .NET 8 microservice foundation with built‑in licensing, feature gating, seat control, and modular
          architecture.
          Everything you need to turn an API into a monetisable product.
        </p>
      </div>
    </section>

    <!-- Main content with sidebar + expanded sections -->
    <section class="pb-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-4 gap-12">
          <!-- Sidebar navigation (all sections) -->
          <aside class="lg:col-span-1">
            <nav class="sticky top-24 space-y-1">
              <p class="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">On This Page</p>
              <button v-for="(section, idx) in sections" :key="section.id" @click="scrollToSection(section.id)"
                class="w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200"
                :class="activeSection === idx ? 'bg-fire-500/10 text-fire-400 font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'">
                {{ section.title }}
              </button>
            </nav>
            <ScrollSpy :sections="sections" @activeChange="activeSection = $event" />
          </aside>

          <!-- Main content area (expanded sections) -->
          <div class="lg:col-span-3 space-y-16">
            <!-- 1. Overview (expanded) -->
            <div id="overview">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Overview
              </h2>
              <div class="prose-section">
                <p><strong>Calcifer.Forge</strong> is not just a template — it's the missing layer between your software
                  and your business model. While most .NET templates give you CRUD endpoints and basic auth, Forge ships
                  with the infrastructure that actually makes software sellable.</p>
                <p>Built on <strong>.NET 8 LTS</strong> with Clean Architecture principles and vertical slice
                  organisation, Forge provides a production‑ready foundation that includes:</p>
                <ul class="list-disc pl-6 mb-4 space-y-1">
                  <li>Authentication & authorisation (JWT + Identity)</li>
                  <li>Licensing engine (key generation, validation, expiry, machine binding)</li>
                  <li>Feature gating with declarative attributes</li>
                  <li>Seat control (concurrent usage limits)</li>
                  <li>Modular feature architecture (plug‑and‑play modules)</li>
                  <li>Background jobs (Hangfire) and event bus</li>
                  <li>OpenAPI / Swagger out of the box</li>
                </ul>
                <div class="mt-6 p-5 rounded-xl border border-fire-500/20 bg-fire-500/5">
                  <p class="text-sm font-semibold text-fire-400 mb-2">💡 Design Philosophy</p>
                  <p class="text-sm text-muted-foreground">Every feature in Forge exists because a real developer hit a
                    wall trying to monetise their software. No vanity features. No "nice to have." Every module solves a
                    real business problem.</p>
                </div>
              </div>
            </div>

            <!-- 2. Architecture deep dive -->
            <div id="architecture">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Architecture
              </h2>
              <div class="prose-section">
                <p>Forge follows <strong>Clean Architecture</strong> with a practical twist — vertical slices within
                  each layer. This means features are self‑contained, testable, and deployable independently.</p>
                <h3 class="text-lg font-semibold mt-6 mb-3">Layer breakdown</h3>
                <div class="grid sm:grid-cols-2 gap-4 mt-4">
                  <div v-for="(layer, idx) in architectureLayers" :key="idx"
                    class="p-4 rounded-xl border border-border/50 bg-card/30">
                    <h4 class="font-bold text-foreground text-sm mb-1">{{ layer.name }}</h4>
                    <p class="text-xs text-muted-foreground leading-relaxed">{{ layer.description }}</p>
                  </div>
                </div>
                <h3 class="text-lg font-semibold mt-8 mb-3">Request flow</h3>
                <div class="rounded-xl border border-border/50 overflow-hidden">
                  <pre
                    class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>Client → API Gateway (Kong/YARP) → Authentication Middleware (JWT) → License Validation Middleware → Feature Gate Filter → Module Handler → Response</code></pre>
                </div>
                <p class="mt-4 text-sm">Each module can define its own endpoints, validators, and dependencies — but
                  they all share the same licensing and gating pipeline.</p>
              </div>
            </div>

            <!-- 3. Licensing engine (expanded) -->
            <div id="licensing">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Licensing Engine
              </h2>
              <div class="prose-section">
                <p>The licensing engine is the heart of Forge's monetisation infrastructure. It handles the complete
                  lifecycle — creation, validation, activation, expiration, and revocation — with no third‑party
                  dependencies.</p>
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
                <h3 class="text-lg font-semibold mt-8 mb-3">API reference</h3>
                <div class="rounded-xl border border-border/50 overflow-hidden mb-4">
                  <div class="px-4 py-2 bg-muted/50 border-b border-border/50 flex items-center justify-between">
                    <span class="text-xs text-muted-foreground font-mono">POST /api/license/activate</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-fire-500/10 text-fire-400 font-bold">REQUEST</span>
                  </div>
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>{
  "licenseKey": "LIC-PRO-XXXX-XXXX",
  "machineId": "DESKTOP-A1B2C3"
}</code></pre>
                </div>
                <div class="rounded-xl border border-border/50 overflow-hidden">
                  <div class="px-4 py-2 bg-muted/50 border-b border-border/50 flex items-center justify-between">
                    <span class="text-xs text-muted-foreground font-mono">200 OK</span>
                    <span
                      class="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-400 font-bold">RESPONSE</span>
                  </div>
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>{
  "activated": true,
  "tier": "professional",
  "features": ["analytics", "export", "multi-tenant"],
  "seatsRemaining": 4,
  "expiresAt": "2027-04-01T00:00:00Z",
  "machineIdBound": "DESKTOP-A1B2C3"
}</code></pre>
                </div>
                <div class="mt-4 p-5 rounded-xl border border-fire-500/20 bg-fire-500/5">
                  <p class="text-sm font-semibold text-fire-400 mb-2">🔐 Security note</p>
                  <p class="text-sm text-muted-foreground">License keys are generated using
                    <code>System.Security.Cryptography</code> with a secret salt. Machine IDs are SHA‑256 hashed before
                    storage – we never store raw machine identifiers.
                  </p>
                </div>
              </div>
            </div>

            <!-- 4. Feature gating (expanded) -->
            <div id="gating">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Feature Gating
              </h2>
              <div class="prose-section">
                <p>Feature gating in Forge goes beyond simple role checks. It operates at the endpoint level using
                  custom attributes, allowing you to control which license tiers can access which features —
                  declaratively.</p>
                <div class="rounded-xl border border-border/50 overflow-hidden">
                  <div class="px-4 py-2 bg-muted/50 border-b border-border/50">
                    <span class="text-xs text-muted-foreground font-mono">AnalyticsEndpoints.cs</span>
                  </div>
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>[RequireFeature("analytics")]
[RequireFeature("export")]
public async Task&lt;IResult&gt; ExportAnalyticsReport(
    IAnalyticsService analytics,
    ILicenseContext license)
{
    var report = await analytics.GenerateReport(license.TenantId);
    return Results.File(report.ToCsv(), "text/csv");
}</code></pre>
                </div>
                <h3 class="text-lg font-semibold mt-8 mb-3">Available attributes</h3>
                <table class="min-w-full border border-border/50 rounded-lg text-sm">
                  <thead class="bg-muted/30">
                    <tr>
                      <th class="px-4 py-2 text-left">Attribute</th>
                      <th class="px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-t border-border/50">
                      <td class="px-4 py-2"><code>[RequireFeature]</code></td>
                      <td class="px-4 py-2">Requires one or more features (AND logic).</td>
                    </tr>
                    <tr class="border-t border-border/50">
                      <td class="px-4 py-2"><code>[RequireAnyFeature]</code></td>
                      <td class="px-4 py-2">Requires at least one of the listed features (OR logic).</td>
                    </tr>
                    <tr class="border-t border-border/50">
                      <td class="px-4 py-2"><code>[RequireSeat]</code></td>
                      <td class="px-4 py-2">Consumes a seat – blocks if no seats left.</td>
                    </tr>
                    <tr class="border-t border-border/50">
                      <td class="px-4 py-2"><code>[RequireLicenseTier]</code></td>
                      <td class="px-4 py-2">Checks license tier (basic, pro, enterprise).</td>
                    </tr>
                  </tbody>
                </table>
                <div class="mt-6 p-5 rounded-xl border border-fire-500/20 bg-fire-500/5">
                  <p class="text-sm font-semibold text-fire-400 mb-2">How it works under the hood</p>
                  <p class="text-sm text-muted-foreground">A custom <strong>IAuthorizationFilter</strong> reads the
                    attributes, resolves the current license from <code>HttpContext.User</code> (via a claim), and
                    checks feature membership using a cached license resolver. If validation fails, a <strong>403
                      Forbidden</strong> is returned immediately — no controller code runs.</p>
                </div>
              </div>
            </div>

            <!-- 5. Seat control -->
            <div id="seats">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Seat Control
              </h2>
              <div class="prose-section">
                <p>Seat control limits concurrent usage of a license key. Each activation consumes one seat; when the
                  user logs out or the machine is deactivated, the seat is freed.</p>
                <div class="rounded-xl border border-border/50 overflow-hidden">
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>// Seat management service
public class SeatManager : ISeatManager
{
    public async Task&lt;bool&gt; TryOccupySeatAsync(string licenseKey, string machineId)
    {
        var license = await _licenseRepo.GetByKeyAsync(licenseKey);
        var activeSeats = await _seatRepo.CountActiveSeatsAsync(licenseKey);
        if (activeSeats >= license.SeatLimit) return false;
        await _seatRepo.AddAsync(new Seat(licenseKey, machineId));
        return true;
    }
}</code></pre>
                </div>
                <p class="mt-4">Seat limits are enforced at the API middleware level, so even custom endpoints cannot
                  bypass seat checks.</p>
              </div>
            </div>

            <!-- 6. Tech specifications (table) -->
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

            <!-- 7. Configuration -->
            <div id="configuration">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Configuration
              </h2>
              <div class="prose-section">
                <p>All settings are in <code>appsettings.json</code> and can be overridden by environment variables
                  (using the <code>__</code> delimiter).</p>
                <div class="rounded-xl border border-border/50 overflow-hidden">
                  <pre class="p-4 text-xs text-muted-foreground leading-relaxed overflow-x-auto bg-card/30"><code>{
  "Licensing": {
    "Salt": "your-secret-salt-here",
    "DefaultTier": "basic",
    "AllowOfflineValidation": false,
    "SeatTimeoutMinutes": 720
  },
  "FeatureGating": {
    "CacheDurationSeconds": 300,
    "StrictMode": true
  },
  "Jwt": {
    "Issuer": "calcifer-forge",
    "Audience": "calcifer-api",
    "ExpiryMinutes": 60
  }
}</code></pre>
                </div>
              </div>
            </div>

            <!-- 8. Getting started (detailed steps) -->
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
                        {{ idx + 1 }}</div>
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

            <!-- 9. Best practices -->
            <div id="best-practices">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                Best Practices
              </h2>
              <ul class="space-y-3 text-muted-foreground text-sm list-disc pl-6">
                <li><strong>Always validate licenses at the middleware level</strong> – never trust client‑side checks.
                </li>
                <li><strong>Cache feature sets per user</strong> to avoid database round trips on every request.</li>
                <li><strong>Use the module system</strong> to isolate business logic – each module can be deployed
                  independently.</li>
                <li><strong>Run the seed command</strong> during development to populate roles and an admin user.</li>
                <li><strong>Enable Swagger</strong> and document all feature‑gated endpoints with OpenAPI extensions.
                </li>
              </ul>
            </div>

            <!-- 10. FAQ -->
            <div id="faq">
              <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  class="w-8 h-8 rounded-lg bg-fire-500/10 flex items-center justify-center text-sm text-fire-400">#</span>
                FAQ
              </h2>
              <div class="space-y-4">
                <div>
                  <p class="font-semibold">Can I use Forge without the licensing engine?</p>
                  <p class="text-sm text-muted-foreground">Yes – you can disable the license validation middleware in
                    <code>Program.cs</code>. But then it's just a normal .NET template.
                  </p>
                </div>
                <div>
                  <p class="font-semibold">How do I create a new feature module?</p>
                  <p class="text-sm text-muted-foreground">Run <code>dotnet new calcifer-module -n MyModule</code>
                    (custom template included). It will generate endpoints, validators, and a feature flag placeholder.
                  </p>
                </div>
                <div>
                  <p class="font-semibold">Does Forge support multi‑tenancy?</p>
                  <p class="text-sm text-muted-foreground">Built‑in multi‑tenancy is on the roadmap. For now, you can
                    implement it via a tenant resolver middleware and inject <code>ITenantContext</code>.</p>
                </div>
              </div>
            </div>

            <!-- CTA (same) -->
            <div class="p-8 rounded-2xl border border-fire-500/20 bg-fire-500/5 text-center">
              <p class="text-xl font-bold text-foreground mb-2">Ready to build?</p>
              <p class="text-muted-foreground text-sm max-w-lg mx-auto mb-6">Forge is designed to get you from zero to a
                monetisable API in under a day.</p>
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <NuxtLink to="/products/forge"><Button class="px-6 bg-fire-500 hover:bg-fire-600 text-white border-0">🔥
                    Get Calcifer.Forge</Button></NuxtLink>
                <NuxtLink to="/docs"><Button variant="outline" class="px-6 border-border hover:border-fire-500/50">←
                    Back to Docs</Button></NuxtLink>
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
import ScrollSpy from '@/components/ScrollSpy.vue'
import { useScrollToHash } from '@/composables/useScrollToHash'

const { scrollToElement } = useScrollToHash()
const activeSection = ref(0)

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'architecture', title: 'Architecture' },
  { id: 'licensing', title: 'Licensing Engine' },
  { id: 'gating', title: 'Feature Gating' },
  { id: 'seats', title: 'Seat Control' },
  { id: 'specs', title: 'Tech Specifications' },
  { id: 'configuration', title: 'Configuration' },
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'best-practices', title: 'Best Practices' },
  { id: 'faq', title: 'FAQ' },
]

function scrollToSection(id: string) {
  scrollToElement(id)
  window.history.pushState({}, '', `#${id}`)
}

const architectureLayers = [
  { name: 'Core', description: 'Entities, interfaces, domain logic. Zero external dependencies.' },
  { name: 'Application', description: 'Use cases, DTOs, validators. Orchestrates domain operations.' },
  { name: 'Infrastructure', description: 'EF Core, Identity, email, external APIs.' },
  { name: 'API', description: 'Minimal API endpoints, middleware, filters.' },
  { name: 'Modules', description: 'Feature modules with self‑contained routes and logic.' },
  { name: 'Licensing', description: 'License engine, activation, feature resolver, seat manager.' }
]

const licensingFeatures = [
  { icon: '🔑', title: 'License Key Generation', detail: 'Generate cryptographically secure keys bound to tiers and feature sets. Time‑limited or perpetual.' },
  { icon: '✅', title: 'Activation & Validation', detail: 'Activate against machine IDs. Validates expiry, features, tier, and seats in one call.' },
  { icon: '💺', title: 'Seat Control', detail: 'Limit concurrent activations per license. Blocks new activations when seats are exhausted.' },
  { icon: '📊', title: 'Usage Tracking', detail: 'Monitor activation patterns and feature usage across your customer base.' }
]

const techSpecs = [
  { label: 'Framework', value: '.NET 8 LTS' },
  { label: 'Architecture', value: 'Clean Architecture + Vertical Slices' },
  { label: 'Auth', value: 'JWT Bearer + ASP.NET Identity' },
  { label: 'Database', value: 'EF Core (SQL Server / PostgreSQL)' },
  { label: 'API Style', value: 'Minimal APIs + Feature Modules' },
  { label: 'License Model', value: 'Key‑based with machine binding' },
  { label: 'Feature Gating', value: 'Attribute‑driven [RequireFeature]' },
  { label: 'Seeding', value: 'Auto‑seed roles, admin, reference data' },
  { label: 'Testing', value: 'xUnit + Integration Tests' },
  { label: 'Docker', value: 'Dockerfile + Compose included' }
]

const gettingStarted = [
  { title: 'Clone the repository', detail: 'Start by cloning the Forge template.', code: 'git clone https://github.com/calcifer-shop/forge.git my-project\ncd my-project' },
  { title: 'Configure your database', detail: 'Update appsettings.json with your connection string.', code: '"ConnectionStrings": { "Default": "Server=localhost;Database=MyApp;Trusted_Connection=true;" }' },
  { title: 'Run migrations & seed data', detail: 'Apply migrations and seed roles, admin user, and reference data.', code: 'dotnet ef database update\ndotnet run --seed' },
  { title: 'Start building', detail: 'The API runs at https://localhost:5001. Swagger at /swagger.', code: 'dotnet run' }
]

useHead({ title: 'Calcifer.Forge Documentation — Calcifer.Shop', meta: [{ name: 'description', content: 'Complete documentation for Calcifer.Forge — .NET 8 architecture engine with licensing, feature gating, seat control.' }] })
</script>

<style scoped></style>