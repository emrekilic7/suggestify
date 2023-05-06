<template>
  <header class="border-b border-gray-200 bg-white w-full">
    <div class="container mx-auto">
      <nav class="p-4 flex items-center justify-between">
        <div class="text-lg font-medium">
          <router-link :to="{name:'home'}">Home</router-link>
        </div>
        <div class="text-xl text-cyan-700 font-bold text-center">
          <router-link :to="{name:'home'}">Suggestify</router-link>
        </div>
        <div class="flex items-center gap-4">
          <router-link :to="{name:'about'}">About</router-link>
          <router-link :to="{name:'test'}">Test</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>