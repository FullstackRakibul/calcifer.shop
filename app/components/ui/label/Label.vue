<script setup>
import { reactiveOmit } from "@vueuse/core"
import { Label } from "reka-ui"
import { cn } from "@/lib/utils"


</script>

<template>
  <Label v-bind="delegatedProps"
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    <slot />
  </Label>
</template>