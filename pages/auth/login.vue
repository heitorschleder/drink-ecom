<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-3xl font-bold text-gray-900 mb-8 text-center">
      Login
    </h1>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <p class="mt-1 text-sm text-gray-500">
          For development: Use password "dev_admin_token_2024" to login as admin
        </p>
      </div>
      
      <button
        type="submit"
        class="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
      >
        Login
      </button>
      
      <div class="text-center">
        <NuxtLink 
          to="/auth/register"
          class="text-primary-600 hover:text-primary-700"
        >
          Don't have an account? Register
        </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const auth = useAuth()

const handleSubmit = async () => {
  try {
    await auth.login(email.value, password.value)
    await navigateTo('/')
  } catch (error) {
    console.error('Login error:', error)
  }
}
</script>