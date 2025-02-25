<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  middleware: 'admin'
})

const products = ref([
  { id: '1', title: 'Product 1', category: 'Category A', stock: 10, price: 29.99 },
  { id: '2', title: 'Product 2', category: 'Category B', stock: 5, price: 19.99 },
  { id: '3', title: 'Product 3', category: 'Category C', stock: 0, price: 39.99 },
  { id: '4', title: 'Product 4', category: 'Category A', stock: 20, price: 49.99 },
])

const editProduct = (id: string) => {
  navigateTo(`/admin/products/${id}/edit`)
}

const deleteProduct = async (id: string) => {
  // adicionar a lógica para deletar o produto
  console.log('Delete product:', id)
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Product Management</h1>
      <NuxtLink
        to="/admin/products/new"
        class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
      >
        Add New Product
      </NuxtLink>
    </div>

    <div class="bg-white rounded-lg shadow">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-if="products.length === 0">
            <td colspan="5" class="px-6 py-4 text-center text-gray-500">
              No products available
            </td>
          </tr>
          <tr v-for="product in products" :key="product.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ product.title }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.category }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.stock }}</td>
            <td class="px-6 py-4 whitespace-nowrap">${{ product.price.toFixed(2) }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button 
                class="text-primary-600 hover:text-primary-900 mr-4"
                @click="editProduct(product.id)"
              >
                Edit
              </button>
              <button 
                class="text-red-600 hover:text-red-900"
                @click="deleteProduct(product.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>