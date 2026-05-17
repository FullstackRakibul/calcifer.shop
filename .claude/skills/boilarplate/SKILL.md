---
name: calcifer-page-builder
description: Generate Vue 3 pages/components for Calcifer.shop – a Nuxt 4 + shadcn‑vue + lucide icons project. Use this skill when building forms, dashboards, invoices, or any UI with Tailwind CSS, shadcn components, and strict icon/component conventions. Keywords: invoice generator, dashboard page, form, CRUD, shadcn, lucide, Nuxt page, print layout, authentication guard.
---

# Calcifer.shop Page Builder Skill

This skill provides the **exact patterns** to follow when generating new pages or components for the Calcifer.shop project.

## Core Rules (non‑negotiable)

1. **Icons** – Only from `@/composables/useIcons.ts`.  
   _Never_ import `lucide-vue-next` directly. If an icon is missing, add it to `useIcons.ts` first.

2. **No hugeicons, no Reka UI** – The project removed them. Use native HTML elements or shadcn‑vue components (which are based on Radix Vue, not Reka UI). Do not import `reka-ui` anywhere.

3. **shadcn‑vue components** – Use `Button`, `Card`, `Input`, `Label`, `Badge`, `Select` (the shadcn‑vue version or fallback to native `<select>` if not installed). Prefer shadcn for consistency.

4. **Styling** – Use semantic CSS variables (`bg-background`, `text-foreground`, `border-border`, `bg-fire-500`, etc.). Never hardcode colors like `text-orange-500`.

5. **Navigation** – `<NuxtLink>` for links; `navigateTo()` only for programmatic redirects after actions (form submit, logout).

6. **Auth guard** – In any protected page (e.g., dashboard), inside `onMounted()`:
   ```ts
   const authStore = useAuthStore()
   authStore.checkAuth()
   if (!authStore.isLoggedIn) router.push('/login')
   ```

7. **Print support** – Use a scoped style with `@media print` to hide non‑essential UI. Mark the printable section with a class like `.print-only-this`.

8. **Responsive** – Breakpoint `lg` (1024px) for desktop/mobile switch. Use Tailwind's `grid lg:grid-cols-2` etc.

## Page Template (Quick Start)

When asked to create a new form/dashboard page, follow this structure:

```vue
<template>
  <div class="min-h-screen bg-background p-4 md:p-8">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="heading-font text-3xl font-black tracking-tight text-foreground">
          Page Title
        </h1>
        <Button variant="outline" @click="someAction">
          <IconName class="mr-2 h-4 w-4" /> Action
        </Button>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <!-- Left column: form -->
        <div class="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Section Title</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <!-- form fields -->
            </CardContent>
          </Card>
        </div>

        <!-- Right column: live preview / output -->
        <div class="print-only-this">
          <Card class="sticky top-24 shadow-lg">
            <CardContent class="p-6">
              <!-- preview content -->
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { IconName, Plus, Trash2, Printer, etc } from '@/composables/useIcons'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  authStore.checkAuth()
  if (!authStore.isLoggedIn) router.push('/login')
})

// reactive state, methods, computed
</script>

<style scoped>
@media print {
  body * { visibility: hidden; }
  .print-only-this, .print-only-this * { visibility: visible; }
  .print-only-this { position: absolute; top: 0; left: 0; width: 100%; }
  .print-only-this button { display: none; }
}
</style>
```

## Common Patterns

### Adding a missing icon to useIcons.ts

Open `app/composables/useIcons.ts` and add the export:

```ts
export { Plus, Trash2, Printer, Upload, RefreshCw, FileText } from 'lucide-vue-next'
```

### Using native select (avoid Reka UI)

```html
<select v-model="item.type" class="w-28 rounded-md border border-border bg-background px-2 py-1 text-sm">
  <option value="physical">Physical</option>
  <option value="digital">Digital</option>
</select>
```

### Formatting currency

```ts
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(value)
}
```

### Generating unique IDs (for line items)

```ts
const generateId = () => Date.now() + Math.random() * 10000
```

## What NOT to do

❌ `import { Plus } from 'lucide-vue-next'` in a page – always use the composable.

❌ `import { HugeiconsIcon } from '@hugeicons/vue'` – removed.

❌ `import { Select, SelectContent } from 'reka-ui'` – forbidden.

❌ Hardcoding `class="text-orange-500"` – use `text-fire-500` or `text-primary`.

❌ Using `router.push()` for static links – use `<NuxtLink>`.

❌ Forgetting the auth guard on dashboard pages.

## Use Case Example

**Task:** "Create an invoice generator page with line items, logo upload, and print preview."

**Action:** Generate a Vue file following the template above, with:

- Left column: form fields for company/client, line items table (add/remove rows), signature, print button.
- Right column: live invoice preview that updates reactively.
- Print media query to hide left column and buttons.
- All icons from `useIcons.ts`.
- Native select for product type.
- Auth guard on mount.

This skill ensures consistency with the existing Calcifer.shop codebase.
