export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  nuxtApp.provide(
    'apiFetch',
    $fetch.create({ baseURL: config.public.BASE_URL })
  )
})
