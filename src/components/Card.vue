<script setup>

const props = defineProps({
  details: Object,
})

const parsed = JSON.parse(JSON.stringify(props.details))
</script>

<template>
  <div class="pt-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <div class="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <img
          class="object-cover w-full h-80"
          :src="`${parsed.Poster}`"
          alt="Flower and sky"
        />

        <div class="relative p-4">
          <h3 class="text-base md:text-xl font-medium text-gray-800">
            {{ parsed.Title }}
          </h3>

          <p class="mt-4 text-base md:text-lg text-gray-600">
            {{ parsed.Plot }}
          </p>
        </div>
      </div>
    </div>
  </div>



  <div class="pt-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <div class="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <div class="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
          <div>
            <img :src="`${parsed.Poster}`" class="w-full h-96 object-cover" alt="" />
          </div>
          <div class="absolute inset-0 z-10 bg-gradient-to-t from-black" />
          <div class="absolute inset-x-0 bottom-0 z-20 p-4">
            <p class="mb-1 text-sm text-white text-opacity-80">{{ parsed.Genre }} • <time>{{ parsed.imdbRating }}</time></p>
            <h3 class="text-xl font-medium text-white">{{ parsed.Title }}</h3>
            <p class="mt-1 text-white text-opacity-80">{{ parsed.Plot }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>