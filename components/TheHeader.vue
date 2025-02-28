<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-primary-600">
          E-Drinks
        </NuxtLink>
        
        <div class="flex items-center space-x-6">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-primary-600 transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
          
          <NuxtLink
            v-if="isAdmin"
            to="/admin/products"
            class="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Manage Products
          </NuxtLink>
          
          <button class="relative">
            <Icon 
              name="material-symbols:shopping-cart-outline" 
              class="w-6 h-6 text-gray-600 hover:text-primary-600 transition-colors"
            />
            <span 
              class="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { isAdmin } = useAuth()

const navigationItems = [
  { label: 'Products', path: '/products' },
  { label: 'Login', path: '/auth/login' },
  { label: 'Register', path: '/auth/register' },
]
</script>