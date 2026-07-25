<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    icon: "lucide:house",
    to: "/",
  },
  {
    label: "Games",
    icon: "lucide:gamepad",
    children: [
      {
        label: "Counter",
        description: "A counting game",
        icon: "lucide:plus",
        to: "/games/counter",
      },
    ],
  },
  {
    label: "Python",
    icon: "material-icon-theme:python",
    children: [
      {
        label: "Easier Data",
        description: "A Python package that makes managing data easier",
        icon: "lucide:chart-area",
        to: "/python/easier-data",
      },
      {
        label: "Accurate Benchmark",
        description: "A Python package for accurate benchmarks and speed comparisons",
        icon: "lucide:clock",
        to: "/python/accurate-benchmark",
      },
    ],
  },
  {
    label: "Minecraft",
    icon: "vscode-icons:file-type-minecraft",
    children: [
      {
        label: "Create: Explore The World!",
        description: "Feature packed nomadic pack with an emphasis on the Create Mod!",
        icon: "lucide:rocket",
        to: "/minecraft/modpacks/cetw",
      },
    ],
  },
]);

const viewport = useViewport();
const colorMode = useColorMode();

function getNextMode(): string {
  switch (colorMode.value) {
    case "dark":
      return "Switch to Light mode.";
    case "light":
      return "Switch to Dark mode.";
  }
  return "";
}

function titleText(): string {
  if (viewport.isGreaterOrEquals("mobileWide")) {
    return "Volcano";
  }
  return "";
}
</script>

<template>
  <UHeader>
    <template #title>
      <UAvatar src="/favicon.ico" alt="JetVolcano" />
      <p>Jet{{ titleText() }}'s Website</p>
    </template>

    <UNavigationMenu :items="items" class="w-full justify-center" />
    <template #right>
      <UTooltip :text="getNextMode()">
        <UColorModeButton class="active:scale-[0.97]" />
      </UTooltip>

      <UTooltip text="Open on Github">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/JetVolcano/website"
          target="_blank"
          icon="simple-icons:github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="w-full justify-center" />
    </template>
  </UHeader>
</template>
