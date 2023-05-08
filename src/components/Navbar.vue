<template>
  <header class="z-30 w-full px-2 py-4 bg-white sm:px-4 border-b border-gray-200">
    <div class="flex items-center justify-between mx-auto max-w-7xl">
      <router-link :to="{name:'home'}" title="Suggestify" class="flex items-center">
        <img src="../assets/img/suggestify-logo-2.png" />
        <span class="sr-only">Suggestify</span>
      </router-link>
      <div class="flex items-center space-x-1">
        <div class="hidden space-x-1 md:inline-flex">
          <router-link :to="{name:'about'}" class="btn btn-sm btn-link">About</router-link>
          <!-- <router-link :to="{name:'find-a-movie'}" class="btn btn-sm btn-link">Find A Movie</router-link> -->
        </div>
      </div>
    </div>
  </header>
</template>