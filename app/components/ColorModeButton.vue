<script setup lang="ts">
const colorMode = useColorMode();

const MODES: Array<string> = ["light", "dark"];

function getNextMode(): string {
  let nextMode: Array<string> = (
    MODES[(MODES.indexOf(colorMode.value) + 1) % MODES.length] as string
  ).split("");
  nextMode[0] = nextMode[0]?.toLocaleUpperCase() as string;
  return "Switch to " + nextMode.join("");
}
</script>

<template>
  <UTooltip :text="getNextMode()">
    <UColorModeButton
      class="transition ease-in-out delay-50 duration-150 hover:drop-shadow-lg hover:drop-shadow-sky-500"
    />
  </UTooltip>
</template>
