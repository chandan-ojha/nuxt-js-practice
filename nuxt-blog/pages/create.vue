<script setup>
const title = ref('')
const body = ref('')
const isLoading = ref(false)
const errors = ref([])

function createPost() {
  alert('create post')
}
</script>

<template>
  <div class="container mx-auto w-1/2 py-8">
    <div class="errors text-red-600 mb-4">Error goes here</div>
    <form action="#" class="space-y-6" @submit.prevent="createPost">
      <div>
        <label for="title" class="block font-semibold">Title</label>
        <input
          type="text"
          v-model="title"
          id="title"
          class="px-2 py-2 w-full shadow rounded mt-2"
        />
      </div>
      <div>
        <label for="body" class="block font-semibold">Body</label>
        <textarea
          v-model="body"
          name="body"
          id="body"
          cols="30"
          rows="10"
          class="px-2 py-2 w-full shadow rounded mt-2"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2"
        >
          Create Post
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
