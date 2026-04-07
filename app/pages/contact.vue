<template>
  <div class="min-h-screen pt-32 pb-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
          <p class="text-muted-foreground mb-8 text-lg">
            Have questions about the Calcifer ecosystem? Our concierge team is here to assist you.
          </p>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                <HugeiconsIcon :icon="Mail01Icon" :size="20" />
              </div>
              <div>
                <p class="font-medium">Email</p>
                <p class="text-muted-foreground">support@calcifer.shop</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                <HugeiconsIcon :icon="Location01Icon" :size="20" />
              </div>
              <div>
                <p class="font-medium">Studio</p>
                <p class="text-muted-foreground text-sm">
                  N/S 01, #A Block, Banasree <br />
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-card border border-border p-8 rounded-2xl shadow-xl">
          <form @submit.prevent class="space-y-4">
            <div>
              <label class="text-sm font-medium mb-1.5 block">Name</label>
              <Input placeholder="Your Name" />
            </div>
            <div>
              <label class="text-sm font-medium mb-1.5 block">Email</label>
              <Input type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label class="text-sm font-medium mb-1.5 block">Message</label>
              <Textarea placeholder="How can we help?" class="min-h-37.5" />
            </div>
            <Button class="w-full h-12 text-md">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { Mail01Icon, Location01Icon } from '@hugeicons/core-free-icons'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

useHead({
  title: 'Contact - Calcifer.shop'
})
</script>