<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const title: string = "Welcome!";
const description: string = "This is my website where you can find the projects I have created.";
const links: Ref<ButtonProps[]> = ref([]);
</script>

<template>
  <UPageHero class="select-none" :title="title" :description="description" :links="links" />
</template>
