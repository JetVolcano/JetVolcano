<script setup lang="ts">
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
</script>

<template>
  <UTooltip :text="getNextMode()">
    <UColorModeButton
      class="transition ease-in-out delay-50 duration-150 hover:drop-shadow-lg hover:drop-shadow-sky-500"
    />
  </UTooltip>
</template>
