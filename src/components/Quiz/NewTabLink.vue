<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  to: {
    type: [String, Object],
    required: true
  }
});
</script>

<template>
  <RouterLink
    :to="to"
    target="_blank"
    rel="noopener noreferrer"
    v-bind="$attrs"
  >
    <slot />
  </RouterLink>
</template>
