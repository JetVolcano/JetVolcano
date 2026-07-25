<script setup lang="ts">
import { counterStore } from "~/stores/games/counter";

useHead({ title: "Counting Game" });

const gameStorage = counterStore();
const toast = useToast();

/* const TOKENS: Record<string, string | RegExp> = {
  COUNT: /c/i,
  ADD: "+",
  SUB: "-",
  MUL: "*",
  DIV: "/",
  POW: "^",
  MOD: "%",
  OPENPAR: "(",
  CLOSEPAR: ")",
  NUMBER: /(?:\+*\-*!*)*\d+(?:\.\d+)?/,
};

const OPS: Array<[string, number, string, string]> = [
  ["+", 0, "L", "+"],
  ["-", 0, "L", "-"],
  ["*", 1, "L", "*"],
  ["/", 1, "L", "/"],
  ["%", 1, "L", "%"],
  ["^", 2, "R", "**"],
];

function parseNumber(n: string): number {
  return eval(n.replaceAll(/\++/g, "+").replaceAll(/(--)+/g, "+"));
}

function formatUnexpectedLiterals(literals: Array<string>): string {
  const ERRS = ["Unexpected literal(s): "];
  const STYLE = [...literals].includes('"') ? "'" : '"';
  if (literals.length > 1) {
    for (const literal of literals.splice(0, literals.length - 1)) {
      ERRS.push(`${STYLE}${literal}${STYLE}, `);
    }
    ERRS.push(`and ${STYLE}${literals[0]}${STYLE}`);
  } else {
    ERRS.push(`${STYLE}${literals[0]}${STYLE}`);
  }
  return ERRS.join("");
}

function toPostifx(expr: string): Array<string> | number {
  if (expr == "") {
    return gameStorage.count;
  }
  if (+expr) {
    return +expr;
  }
  const ERRS: Array<string> = [];

  const CLEANED = (() => {
    const SPLIT: Array<string> = expr.split(/[\dcC().+\-/*%^!]/g).filter(Boolean);
    if (SPLIT.length) {
      ERRS.push(formatUnexpectedLiterals(SPLIT));
    }
    return expr.replaceAll(/[^\dcC().+\-/*%^!]/g, "");
  })();

  if (ERRS.length) {
    for (const err of ERRS) {
      toast.add({
        title: "Parsing error(s) occurred",
        description: err,
        color: "error",
        icon: "lucide:x",
        duration: 2500,
        ui: {
          root: "dark:bg-slate-900 dark:border-2 dark:border-slate-800",
        },
      });
    }
    return gameStorage.count;
  }
  return gameStorage.count;
}

function evalPostfix(postfix: Array<string> | number): number {
  if (typeof postfix === "number") {
    return postfix;
  }
  return 0;
} */
</script>

<template>
  <UContainer class="flex flex-col h-[70dvh] content-center space-y-3 justify-center-safe">
    <div class="flex flex-row space-x-5">
      <UButton
        variant="subtle"
        @click="gameStorage.double"
        class="transition delay-[5ms] hover:scale-[0.98] active:scale-[0.97] grow"
        label="Double"
      />
      <UButton
        variant="subtle"
        @click="gameStorage.decrement"
        class="transition delay-[5ms] hover:scale-[0.98] active:scale-[0.97] grow"
        label="Decrement"
      />
      <UButton
        variant="subtle"
        @click="gameStorage.reset"
        class="transition delay-[5ms] hover:scale-[0.98] active:scale-[0.97] grow"
        label="Reset"
      />
      <!-- <UTooltip
        text="Set a custom mathematical expression that gets resolved to the counter, use the letter 'c' or 'C' to refer to the current count"
      >
        <UButton
          variant="subtle"
          @click="gameStorage.customSetter(evalPostfix, toPostifx(gameStorage.ce))"
          class="transition delay-[5ms] hover:scale-[0.98] active:scale-[0.97] grow-3"
        >
          <UInput
            icon="lucide:pi"
            class="transform"
            pointer-events-auto
            v-model="gameStorage.ce"
            @click.stop
            placeholder="Custom expression"
          />
        </UButton>
      </UTooltip> -->
    </div>
    <UButton
      variant="subtle"
      @click="gameStorage.increment"
      class="shadow-2xl shadow-current transition delay-[5ms] hover:scale-[0.99] active:scale-[0.98] content-stretch"
      >{{ gameStorage.count }}</UButton
    >
  </UContainer>
</template>
