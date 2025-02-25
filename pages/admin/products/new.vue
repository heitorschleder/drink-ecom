
<script setup lang="ts">
definePageMeta({
  middleware: 'admin'
})

// categoria exemplo
const categories = [
  'Whiskey',
  'Beers',
  'Gin',
  'Vodka',
  'Wine'
]

const form = ref({
  title: '',
  category: '',
  price: '',
  stock: '',
  description: '',
  specifications: ''
})

const handleSubmit = async () => {
  try {
    // implementar api pra enviar form
    console.log('Form submitted:', form.value)
    await navigateTo('/admin/products')
  } catch (error) {
    console.error('Error saving product:', error)
  }
}
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Add New Product</h1>
    </div>

    <form @submit.prevent="handleSubmit" class="bg-white rounded-lg shadow p-6 space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">
            Product Title
          </label>
          <input
            id="title"
            v-model="form.title"
            type="text"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            v-model="form.category"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Select a category</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>

        <div>
          <label for="price" class="block text-sm font-medium text-gray-700">
            Price
          </label>
          <div class="mt-1 relative rounded-lg">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              $
            </span>
            <input
              id="price"
              v-model="form.price"
              type="number"
              step="0.01"
              min="0"
              required
              class="block w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div>
          <label for="stock" class="block text-sm font-medium text-gray-700">
            Stock Quantity
          </label>
          <input
            id="stock"
            v-model="form.stock"
            type="number"
            min="0"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          v-model="form.description"
          rows="3"
          required
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        ></textarea>
      </div>

      <div>
        <label for="specifications" class="block text-sm font-medium text-gray-700">
          Detailed Specifications
        </label>
        <textarea
          id="specifications"
          v-model="form.specifications"
          rows="5"
          required
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        ></textarea>
      </div>

      <div class="flex justify-end space-x-4">
        <NuxtLink
          to="/admin/products"
          class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </NuxtLink>
        <button
          type="submit"
          class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Save Product
        </button>
      </div>
    </form>
  </div>
</template>