import { defineStore } from "pinia";

export const counterStore = defineStore("games.counter", () => {
  const count = ref(0);
  const ce = ref("");

  const increment = (): void => {
    count.value++;
  };
  const decrement = (): void => {
    count.value--;
  };
  const double = (): void => {
    count.value *= 2;
  };
  const reset = (): void => {
    count.value = 0;
  };

  function customSetter(input: (_: any) => number, param: any) {
    count.value = input(param) ?? count.value;
  }

  return {
    count,
    ce,
    increment,
    decrement,
    double,
    reset,
    customSetter,
  };
});
