<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  middleware: 'admin'
})

interface ProductForm {
  title: string;
  subcategory: string; // (Whiskey, Beer, etc.)
  brand: string;
  category: string; // (distilled, fermented, cocktails)
  price: string;
  stock: string;
  description: string;
  specifications: string;
  images: string[];
}

const form = ref<ProductForm>({
  title: '',
  subcategory: '',
  brand: '',
  category: '',
  price: '',
  stock: '',
  description: '',
  specifications: '',
  images: []
})

const subcategories = ref<string[]>([
  'Whiskey',
  'Beers',
  'Gin',
  'Vodka',
  'Wine'
]);

const category = ref<string[]>([
  'Distilled',
  'Fermented',
  'Cocktails'
]);

// images
const addImageLink = () => {
  form.value.images.push('');
}
const removeImageLink = (index: number) => {
  form.value.images.splice(index, 1);
}

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
            <option v-for="categorys in category" :key="categorys" :value="categorys">
              {{ categorys }}
            </option>
          </select>
        </div>
        <!-- transition nao ta querendo -->
        <div v-if="form.category" class=" opacity-0" :class="{'transition-opacity duration-500 delay-200 opacity-100': form.category}">
          <label for="subcategory" class="block text-sm font-medium text-gray-700">
            Subcategory
          </label>
          <select
            id="subcategory"
            v-model="form.subcategory"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Select a subcategory</option>
            <option v-for="subcategory in subcategories" :key="subcategory" :value="subcategory">
              {{ subcategory }}
            </option>
          </select>
        </div>

        <div>
          <label for="brand" class="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <input
            id="brand"
            v-model="form.brand"
            type="text"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
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
        <label class="block text-sm font-medium text-gray-700">
          Product Image Links
        </label>
        <div v-for="(image, index) in form.images" :key="index" class="flex items-center space-x-2">
          <input
            type="text"
            v-model="form.images[index]"
            placeholder="Enter image URL"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="button"
            @click="removeImageLink(index)"
            class="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
        <button
          type="button"
          @click="addImageLink"
          class="mt-2 text-blue-500 hover:text-blue-700"
        >
          Add Another Image Link
        </button>
      </div>

      <div class="flex justify-end space-x-4">
        <NuxtLink
          to="/admin/pages/products"
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