export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = true

  if (!isLoggedIn) {
    // return navigateTo('/my-info')
    window.location.pathname = '/my-info'
  }
})
