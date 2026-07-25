<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

useHead({ title: "Create: Explore the World!" });

const headline: string = "Aeronautics now included!";
const title: string = "Create: Explore the World!";
const description: string =
  "A semi-nomadic modpack that encourages you to explore the depths of the world.";
const links: Ref<ButtonProps[]> = ref([
  {
    label: "Install",
    to: "https://modrinth.com/modpack/create-explore-the-world/versions",
    icon: "lucide:download",
    variant: "subtle",
  },
]);
</script>

<template>
  <UContainer>
    <UPageHero
      class="select-none"
      :headline="headline"
      :title="title"
      :description="description"
      :links="links"
    />
  </UContainer>
</template>
