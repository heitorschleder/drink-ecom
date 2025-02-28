<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  middleware: 'admin'
})

const products = ref([
  { 
    id: '1', 
    title: 'Product 1', 
    subcategory: 'Whiskey', 
    brand: 'Brand A', 
    category: 'Distilled', 
    stock: 10, 
    price: 29.99, 
    description: 'Description of Product 1', 
    specifications: 'Specifications of Product 1', 
    images: ['https://a-static.mlcdn.com.br/1500x1500/cerveja-bohemia-puro-malte-lager-473ml-12-unidades/antenareis/58c3fd78fc9b11ecb5764201ac185079/e2c55f7b9ec3dd7898b66d7cee443b52.jpeg'] 
  },
  { 
    id: '2', 
    title: 'Product 2', 
    subcategory: 'Beer', 
    brand: 'Brand B', 
    category: 'Fermented', 
    stock: 5, 
    price: 19.99, 
    description: 'Description of Product 2', 
    specifications: 'Specifications of Product 2', 
    images: ['https://a-static.mlcdn.com.br/1500x1500/cerveja-bohemia-puro-malte-lager-473ml-12-unidades/antenareis/58c3fd78fc9b11ecb5764201ac185079/e2c55f7b9ec3dd7898b66d7cee443b52.jpeg'] 
  },
  { 
    id: '3', 
    title: 'Product 3', 
    subcategory: 'Gin', 
    brand: 'Brand C', 
    category: 'Distilled', 
    stock: 0, 
    price: 39.99, 
    description: 'Description of Product 3', 
    specifications: 'Specifications of Product 3', 
    images: ['https://a-static.mlcdn.com.br/1500x1500/cerveja-bohemia-puro-malte-lager-473ml-12-unidades/antenareis/58c3fd78fc9b11ecb5764201ac185079/e2c55f7b9ec3dd7898b66d7cee443b52.jpeg'] 
  },
  { 
    id: '4', 
    title: 'Product 4', 
    subcategory: 'Vodka', 
    brand: 'Brand D', 
    category: 'Distilled', 
    stock: 20, 
    price: 49.99, 
    description: 'Description of Product 4', 
    specifications: 'Specifications of Product 4', 
    images: ['https://a-static.mlcdn.com.br/1500x1500/cerveja-bohemia-puro-malte-lager-473ml-12-unidades/antenareis/58c3fd78fc9b11ecb5764201ac185079/e2c55f7b9ec3dd7898b66d7cee443b52.jpeg'] 
  },
])

const deleteProduct = async (id: string) => {
  // Add logic to delete the product
  console.log('Delete product: hehe', id)
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
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subcategory</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-if="products.length === 0">
            <td colspan="8" class="px-6 py-4 text-center text-gray-500">
              No products available
            </td>
          </tr>
          <tr v-for="product in products" :key="product.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <img 
                v-if="product.images.length > 0" 
                :src="product.images[0]" 
                alt="Product Image" 
                class="w-20 h-20 object-cover" 
              />
            </td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.title }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.subcategory }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.brand }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.category }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.stock }}</td>
            <td class="px-6 py-4 whitespace-nowrap">${{ product.price.toFixed(2) }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <NuxtLink
                :to="`/admin/products/edit/${product.id}`"
                class="text-blue-500 hover:text-blue-700"
              >
                Edit
              </NuxtLink>
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