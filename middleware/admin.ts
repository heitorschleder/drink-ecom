// middleware/admin.js
import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';
import { useAuth } from '@/composables/useAuth'; // Certifique-se de que o caminho está correto

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth(); // Supondo que você tenha um composable useAuth que gerencia a autenticação

  // Verifica se o usuário está autenticado
  if (!auth.isAuthenticated.value) {
    return navigateTo('/auth/login', { replace: true }); // Redireciona para a página de login
  }

  // Verifica se o usuário é um administrador
  if (!auth.isAdmin.value) {
    return navigateTo('/', { replace: true }); // Redireciona para a página inicial
  }
});