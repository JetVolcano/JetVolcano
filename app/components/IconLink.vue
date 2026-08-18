<script setup lang="ts">
defineProps<{
  tooltip: string;
  icon: string;
  link: string;
  buttonClass?: string;
}>();
</script>

<template>
  <UTooltip :text="tooltip">
    <UButton
      :class="buttonClass"
      color="neutral"
      variant="ghost"
      :to="link"
      target="_blank"
      :icon="icon"
      :aria-label="tooltip"
    />
  </UTooltip>
</template>
