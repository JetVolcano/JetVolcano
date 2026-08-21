<script setup lang="ts">
defineProps<{
  icon: string;
  link: string;
  tooltip?: string;
  class?: string;
}>();
</script>

<template>
  <UTooltip :text="tooltip">
    <UButton
      :class="class"
      color="neutral"
      variant="ghost"
      :to="link"
      target="_blank"
      :icon="icon"
      :aria-label="tooltip"
    />
  </UTooltip>
</template>
