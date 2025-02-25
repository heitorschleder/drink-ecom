export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth()
  
  if (!auth.isAuthenticated.value) {
    return navigateTo('/auth/login', { replace: true })
  }
  
  if (!auth.isAdmin.value) {
    return navigateTo('/', { replace: true })
  }
})