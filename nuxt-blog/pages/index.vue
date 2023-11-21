<script setup>
// const nuxtApp = useNuxtApp()

// const { data: posts } = useFetch('/api/posts', {
//   baseURL: 'http://127.0.0.1:8000',
// })

const posts = await useNuxtApp().$apiFetch('/api/posts')
</script>

<template>
  <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">
    <PostItem v-for="post in posts" :post="post" :key="post.id" />
  </div>
</template>
