<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

useHead({ title: "Accurate Benchmark" });

const title: string = "Accurate Benchmark";
const description: string = "";
const links: Ref<ButtonProps[]> = ref([]);
</script>

<template>
  <UPageHero class="select-none" :title="title" :description="description" :links="links" />
</template>
