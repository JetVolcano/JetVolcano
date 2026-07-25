<template>
  <NuxtRouteAnnouncer>
    <template #default="{ message }">
      <p>Rerouted to {{ message }}.</p>
    </template>
  </NuxtRouteAnnouncer>

  <UApp :toaster="{ expand: false }">
    <NavigationBar class="select-none" />

    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
