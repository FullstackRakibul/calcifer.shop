<template>
  <div class="min-h-screen pt-32 pb-20 px-6">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold tracking-tight mb-8">Shipping Information</h1>
      
      <div class="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 class="text-xl font-semibold text-foreground mb-3">Global Logistics</h2>
          <p>
            We ship to over 50 countries worldwide using premium couriers (FedEx, DHL, and UPS) to ensure 
            your Calcifer unit arrives safely and swiftly.
          </p>
        </section>

        <div class="grid sm:grid-cols-2 gap-4">
          <div class="bg-card border border-border p-6 rounded-xl">
            <p class="font-bold text-foreground mb-1">Domestic (US)</p>
            <p class="text-sm">2-4 Business Days</p>
            <p class="text-xs mt-2 text-accent">Free complimentary shipping</p>
          </div>
          <div class="bg-card border border-border p-6 rounded-xl">
            <p class="font-bold text-foreground mb-1">International</p>
            <p class="text-sm">5-10 Business Days</p>
            <p class="text-xs mt-2">$45 flat rate / Free on orders over $1500</p>
          </div>
        </div>

        <section>
          <h2 class="text-xl font-semibold text-foreground mb-3">Handling & Packaging</h2>
          <p>
            Each unit is packaged in a specialized shock-absorbent eco-friendly case. Due to the high value 
            and calibration requirements, orders typically leave our studio within 48 hours of verification.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-foreground mb-3">Tracking</h2>
          <p>
            Once your order is processed, you will receive a tracking number via email and SMS (if provided). 
            Signatures are required for all deliveries to ensure security.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Shipping - Calcifer.shop'
})
</script>
