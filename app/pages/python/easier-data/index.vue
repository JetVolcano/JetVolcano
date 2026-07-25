<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

useHead({ title: "Easier Data" });

const title: string = "Easier Data";
const description: string = "";
const links: Ref<ButtonProps[]> = ref([]);
</script>

<template>
  <UPageHero class="select-none" :title="title" :description="description" :links="links" />
</template>
