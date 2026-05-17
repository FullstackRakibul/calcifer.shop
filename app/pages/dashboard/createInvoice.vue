<template>
  <div class="min-h-screen bg-background p-4 md:p-8">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="heading-font text-3xl font-black tracking-tight text-foreground">
          Create Invoice
        </h1>
        <Button variant="outline" @click="resetForm">
          <RefreshCw class="mr-2 h-4 w-4" /> Reset
        </Button>
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <!-- LEFT: FORM -->
        <div class="space-y-6">
          <!-- Company & Client (unchanged) -->
          <Card>
            <CardHeader>
              <CardTitle>Company & Client</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <div>
                <Label>Company Logo</Label>
                <div class="mt-2 flex items-center gap-4">
                  <div v-if="companyLogo" class="h-16 w-16 overflow-hidden rounded-md border border-border bg-muted">
                    <img :src="companyLogo" alt="logo" class="h-full w-full object-contain" />
                  </div>
                  <div v-else
                    class="flex h-16 w-16 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground">
                    <Upload class="h-6 w-6" />
                  </div>
                  <Input type="file" accept="image/*" @change="handleLogoUpload" class="flex-1" />
                </div>
              </div>
              <div class="grid gap-4 sm:grid-cols-2">
                <div><Label>Company Name</Label><Input v-model="companyName" placeholder="Your company" /></div>
                <div><Label>Invoice #</Label><Input v-model="invoiceNumber" placeholder="INV-001" /></div>
              </div>
              <div><Label>Client Name</Label><Input v-model="clientName" placeholder="Client / Bill to" /></div>
              <div><Label>Client Email</Label><Input v-model="clientEmail" type="email"
                  placeholder="client@example.com" /></div>
              <div><Label>Client Address</Label><Input v-model="clientAddress" placeholder="Street, city, zip" /></div>
              <div class="grid gap-4 sm:grid-cols-2">
                <div><Label>Invoice Date</Label><Input v-model="invoiceDate" type="date" /></div>
                <div><Label>Due Date</Label><Input v-model="dueDate" type="date" /></div>
              </div>
            </CardContent>
          </Card>

          <!-- Line Items -->
          <Card>
            <CardHeader class="flex flex-row items-center justify-between">
              <CardTitle>Line Items</CardTitle>
              <Button size="sm" variant="outline" @click="addLineItem">
                <Plus class="mr-1 h-4 w-4" /> Add item
              </Button>
            </CardHeader>
            <CardContent>
              <!-- Currency selector -->
              <div class="mb-4 flex items-center gap-4">
                <Label class="w-24">Currency</Label>
                <select v-model="currency" class="rounded-md border border-border bg-background px-3 py-1 text-sm">
                  <option value="BDT">BDT (Taka)</option>
                  <option value="USD">USD (Dollar)</option>
                  <option value="RUB">RUB (Ruble)</option>
                  <option value="CNY">CNY (Yan)</option>
                </select>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead class="border-b border-border">
                    <tr class="text-left text-muted-foreground">
                      <th class="pb-2 font-medium">Description</th>
                      <th class="pb-2 font-medium">Qty</th>
                      <th class="pb-2 font-medium">Price</th>
                      <th class="pb-2 font-medium">Type</th>
                      <th class="pb-2 font-medium">Total</th>
                      <th class="pb-2 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, idx) in lineItems" :key="item.id" class="border-b border-border/50">
                      <td class="py-2 pr-2"><Input v-model="item.description" placeholder="Product / service"
                          class="min-w-40" /></td>
                      <td class="py-2 pr-2"><Input v-model.number="item.quantity" type="number" min="1" class="w-20" />
                      </td>
                      <td class="py-2 pr-2"><Input v-model.number="item.unitPrice" type="number" min="0" step="0.01"
                          class="w-28" /></td>
                      <td class="py-2 pr-2">
                        <select v-model="item.productType"
                          class="w-28 rounded-md border border-border bg-background px-2 py-1 text-sm">
                          <option value="physical">Physical</option>
                          <option value="digital">Digital</option>
                        </select>
                      </td>
                      <td class="py-2 pr-2 font-mono">{{ formatCurrency(item.quantity * item.unitPrice) }}</td>
                      <td class="py-2 text-right">
                        <Button variant="ghost" size="icon" @click="removeLineItem(idx)"
                          :disabled="lineItems.length === 1">
                          <Trash2 class="h-4 w-4 text-destructive" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Discount input -->
              <div class="mt-4 flex items-center justify-end gap-4">
                <Label>Discount (%)</Label>
                <Input v-model.number="discountPercent" type="number" min="0" max="100" step="1" class="w-24" />
              </div>

              <div class="mt-4 flex justify-end">
                <div class="w-48 space-y-1 text-right">
                  <div class="flex justify-between text-sm">
                    <span class="text-muted-foreground">Subtotal:</span>
                    <span class="font-mono font-medium">{{ formatCurrency(subtotal) }}</span>
                  </div>
                  <div v-if="discountAmount > 0" class="flex justify-between text-sm text-fire-500">
                    <span>Discount ({{ discountPercent }}%):</span>
                    <span class="font-mono">-{{ formatCurrency(discountAmount) }}</span>
                  </div>
                  <div class="flex justify-between text-base font-bold">
                    <span>Total:</span>
                    <span class="font-mono">{{ formatCurrency(totalAfterDiscount) }}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Signature & Print -->
          <Card>
            <CardHeader>
              <CardTitle>Signature</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <div><Label>Authorized Signatory Name</Label><Input v-model="signatoryName" placeholder="Full name" />
              </div>
              <Button @click="printInvoice" class="w-full gap-2">
                <Printer class="h-4 w-4" /> Print Invoice
              </Button>
            </CardContent>
          </Card>
        </div>

        <!-- RIGHT: LIVE PREVIEW -->
        <div class="print-only-this">
          <Card class="sticky top-24 shadow-lg">
            <CardContent class="p-6">
              <div id="invoice-preview" class="space-y-6">
                <!-- Header -->
                <div class="flex items-start justify-between border-b border-border pb-4">
                  <div class="flex items-center gap-3">
                    <div v-if="companyLogo" class="h-14 w-14 overflow-hidden rounded-md bg-muted">
                      <img :src="companyLogo" alt="logo" class="h-full w-full object-contain" />
                    </div>
                    <div v-else
                      class="flex h-14 w-14 items-center justify-center rounded-md bg-muted text-muted-foreground">
                      <FileText class="h-6 w-6" />
                    </div>
                    <div>
                      <h2 class="heading-font text-2xl font-bold">{{ companyName || 'Your Company' }}</h2>
                      <p class="text-xs text-muted-foreground">Invoice</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-semibold">#{{ invoiceNumber }}</p>
                    <p class="text-xs text-muted-foreground">Date: {{ invoiceDate }}</p>
                    <p class="text-xs text-muted-foreground">Due: {{ dueDate }}</p>
                  </div>
                </div>

                <!-- Bill to -->
                <div class="border-b border-border pb-4">
                  <p class="text-sm font-semibold">Bill to:</p>
                  <p class="text-sm">{{ clientName || '—' }}</p>
                  <p class="text-sm text-muted-foreground">{{ clientEmail || '—' }}</p>
                  <p class="text-sm text-muted-foreground">{{ clientAddress || '—' }}</p>
                </div>

                <!-- Items table -->
                <table class="w-full text-sm">
                  <thead class="border-b border-border">
                    <tr class="text-left text-muted-foreground">
                      <th class="pb-2 font-medium">Item</th>
                      <th class="pb-2 font-medium">Qty</th>
                      <th class="pb-2 font-medium">Price</th>
                      <th class="pb-2 font-medium">Type</th>
                      <th class="pb-2 text-right font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in lineItems" :key="item.id" class="border-b border-border/50">
                      <td class="py-2 pr-2">{{ item.description || '—' }}</td>
                      <td class="py-2 pr-2">{{ item.quantity }}</td>
                      <td class="py-2 pr-2">{{ formatCurrency(item.unitPrice) }}</td>
                      <td class="py-2 pr-2">
                        <Badge variant="secondary" class="text-xs">{{ item.productType === 'physical' ? 'Physical' :
                          'Digital' }}</Badge>
                      </td>
                      <td class="py-2 text-right font-mono">{{ formatCurrency(item.quantity * item.unitPrice) }}</td>
                    </tr>
                  </tbody>
                  <tfoot class="border-t border-border">
                    <tr>
                      <td colspan="4" class="pt-3 text-right font-medium">Subtotal</td>
                      <td class="pt-3 text-right font-mono">{{ formatCurrency(subtotal) }}</td>
                    </tr>
                    <tr v-if="discountAmount > 0">
                      <td colspan="4" class="pt-1 text-right text-fire-500">Discount ({{ discountPercent }}%)</td>
                      <td class="pt-1 text-right font-mono text-fire-500">-{{ formatCurrency(discountAmount) }}</td>
                    </tr>
                    <tr>
                      <td colspan="4" class="pt-1 text-right font-bold">Total</td>
                      <td class="pt-1 text-right font-mono font-bold">{{ formatCurrency(totalAfterDiscount) }}</td>
                    </tr>
                  </tfoot>
                </table>

                <!-- Signature -->
                <div class="border-t border-border pt-4 text-right">
                  <p class="text-sm text-muted-foreground">Authorized signature</p>
                  <p class="font-mono text-sm">{{ signatoryName || '____________________' }}</p>
                </div>

                <!-- Footer link -->
                <div class="text-center text-xs text-muted-foreground">
                  <a href="https://calcifershop.vercel.app/" target="_blank" class="hover:underline">Calcifer.shop</a>
                </div>
              </div>
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
import { Plus, Trash2, Printer, Upload, RefreshCw, FileText } from '@/composables/useIcons'
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
  if (!invoiceNumber.value) invoiceNumber.value = `INV-${Date.now().toString().slice(-8)}`
})

// State
const companyLogo = ref<string | null>(null)
const companyName = ref('Calcifer Systems')
const invoiceNumber = ref('')
const clientName = ref('Acme Corp')
const clientEmail = ref('billing@acme.com')
const clientAddress = ref('123 Business Blvd, Suite 100')
const invoiceDate = ref(new Date().toISOString().slice(0, 10))
const dueDate = ref(new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10))
const signatoryName = ref('J. Doe')
const currency = ref('USD')
const discountPercent = ref(0)

interface LineItem {
  id: number
  description: string
  quantity: number
  unitPrice: number
  productType: 'physical' | 'digital'
}

const generateId = () => Date.now() + Math.random() * 10000

const lineItems = ref<LineItem[]>([
  { id: generateId(), description: 'Web Development Consultation', quantity: 1, unitPrice: 350, productType: 'digital' },
])

const addLineItem = () => lineItems.value.push({ id: generateId(), description: '', quantity: 1, unitPrice: 0, productType: 'digital' })
const removeLineItem = (index: number) => { if (lineItems.value.length > 1) lineItems.value.splice(index, 1) }

const subtotal = computed(() => lineItems.value.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0))
const discountAmount = computed(() => (subtotal.value * discountPercent.value) / 100)
const totalAfterDiscount = computed(() => subtotal.value - discountAmount.value)

const formatCurrency = (value: number) => {
  const symbol: Record<string, string> = { BDT: '৳', USD: '$', RUB: '₽', CNY: '¥' }
  return `${symbol[currency.value] || '$'}${value.toFixed(2)}`
}

const handleLogoUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) { const reader = new FileReader(); reader.onload = (e) => (companyLogo.value = e.target?.result as string); reader.readAsDataURL(file) }
}

const resetForm = () => {
  companyLogo.value = null
  companyName.value = 'Calcifer Systems'
  invoiceNumber.value = `INV-${Date.now().toString().slice(-8)}`
  clientName.value = 'Acme Corp'
  clientEmail.value = 'billing@acme.com'
  clientAddress.value = '123 Business Blvd, Suite 100'
  invoiceDate.value = new Date().toISOString().slice(0, 10)
  dueDate.value = new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10)
  signatoryName.value = 'J. Doe'
  currency.value = 'USD'
  discountPercent.value = 0
  lineItems.value = [{ id: generateId(), description: 'Web Development Consultation', quantity: 1, unitPrice: 350, productType: 'digital' }]
}

const printInvoice = () => { const t = document.title; document.title = `Invoice ${invoiceNumber.value}`; window.print(); document.title = t }
</script>

<style>
@media print {
  /* ── Remove browser default header / footer ── */
  @page {
    size: A4 portrait;
    margin: 12mm 10mm;
  }

  /* Hide EVERYTHING on the page */
  body * {
    visibility: hidden !important;
  }

  /* Show only the invoice preview section and its children */
  .print-only-this,
  .print-only-this * {
    visibility: visible !important;
  }

  /* Position the printable section to fill the page */
  .print-only-this {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 0 !important;
    margin: 0 !important;
    background: white !important;
    z-index: 99999;
  }

  /* Remove card shadow / border for a clean print */
  .print-only-this .shadow-lg,
  .print-only-this [class*="card"] {
    box-shadow: none !important;
    border: none !important;
  }

  /* Hide any buttons inside the preview */
  .print-only-this button {
    display: none !important;
  }

  /* Force black text on white for readability */
  .print-only-this,
  .print-only-this * {
    color: #000 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* Keep muted/secondary text slightly lighter */
  .print-only-this .text-muted-foreground {
    color: #555 !important;
  }

  /* Fit everything within one A4 page */
  .print-only-this #invoice-preview {
    max-height: 257mm; /* A4 height minus margins */
    overflow: hidden;
    font-size: 11px;
    line-height: 1.4;
  }
}
</style>