<script setup>
const title = useState('title')
const route = useRoute()

// const { data: post } = await useFetch(
//   `http://127.0.0.1:8000/api/posts/${route.params.id}`
// )

const post = await useNuxtApp().$apiFetch(`/api/posts/${route.params.id}`)
</script>

<template>
  <div class="container mx-auto w-1/2 py-8">
    <Title>{{ post.title }} | {{ title }}</Title>
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/1`">{{ post.title }}</NuxtLink>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
      <div>{{ post.created_at }}</div>
      <div>&middot;</div>
      <div>{{ post.user.name }}</div>
    </div>
    <div class="post-content mt-4">
      {{ post.body }}
    </div>
  </div>
</template>
