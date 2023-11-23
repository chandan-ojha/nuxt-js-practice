<script setup>
const title = useState('title')
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const erros = ref([])

const { $apiFetch } = useNuxtApp()

function csrf() {
  return $apiFetch('/sanctum/csrf-cookie')
}

async function login() {
  await csrf()

  await $apiFetch('/login', {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value,
    },
  })
}
</script>

<template>
  <div class="container mx-auto w-1/3 py-8">
    <Title>Login | {{ title }}</Title>
    <form action="#" class="space-y-6" @submit.prevent="login">
      <div>
        <label for="email" class="block font-semibold">Email</label>
        <input
          type="text"
          v-model="email"
          id="email"
          class="px-2 py-2 w-full shadow rounded mt-2"
        />
      </div>
      <div>
        <label for="password" class="block font-semibold">Password</label>
        <input
          type="password"
          v-model="password"
          id="password"
          class="px-2 py-2 w-full shadow rounded mt-2"
        />
      </div>

      <div>
        <button
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
