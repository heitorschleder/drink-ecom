<script setup lang="ts">
import Footer from '@/components/organism/FooterHome/index.vue';
import AboutBrand from '@/components/organism/AboutBrand/index.vue';
import { ref } from 'vue';

const featuredProducts = ref([
  { id: '1', title: 'Vodka Premium', category: 'Destilados', price: 79.99, image: 'https://m.media-amazon.com/images/I/41vlnCEINQL._AC_SX679_.jpg' },
  { id: '2', title: 'Whisky 12 anos', category: 'Whisky', price: 199.99, image: 'https://m.media-amazon.com/images/I/51CL2s7YMEL._AC_SY500_.jpg' },
  { id: '3', title: 'Gin Artesanal', category: 'Gin', price: 89.99, image: 'https://db7qxt7xxlq5m.cloudfront.net/n49shopv2_boccatispa/images/products/61df0bf433b2a/12121_gin_tanqueray_london_dry_gin_750ml-61df0bf433b99.jpg' },
]);

const categories = ref(['Cervejas', 'Vinhos', 'Destilados', 'Coquetéis']);
</script>

<template>
  <div>
    <section class="bg-cover bg-center h-[500px] flex items-center justify-center text-white text-center" 
             :style="{ backgroundImage: `url('/images/background.png')` }">
      <div class="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 class="text-4xl md:text-6xl font-bold">Drinks de Transporte Rápido</h1>
        <p class="text-lg mt-4">Os melhores drinks na velocidade que você precisa!</p>
        <NuxtLink to="/products" class="mt-6 inline-block bg-primary-600 px-6 py-3 rounded-lg text-white hover:bg-primary-700 transition">
          Ver Produtos
        </NuxtLink>
      </div>
    </section>

    <!-- Destaques -->
    <section class="container mx-auto my-12 px-4">
      <h2 class="text-3xl font-bold text-center">Destaques</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div v-for="product in featuredProducts" :key="product.id" class="bg-white p-4 rounded-lg shadow-lg text-center">
          <img :src="product.image" :alt="product.title" class="w-full h-48 object-cover rounded-lg" />
          <h3 class="text-xl font-bold mt-4">{{ product.title }}</h3>
          <p class="text-gray-600">{{ product.category }}</p>
          <p class="text-lg font-semibold text-primary-600 mt-2">R$ {{ product.price.toFixed(2) }}</p>
          <NuxtLink :to="`/products/${product.id}`" class="mt-4 inline-block bg-primary-600 px-4 py-2 text-white rounded-lg hover:bg-primary-700">
            Comprar
          </NuxtLink>
        </div>
      </div>
    </section>
    <AboutBrand />
    <Footer />
  </div>
</template>

<style>
.bg-primary-600 { background-color: #d81b60; }
.bg-primary-700 { background-color: #b61850; }
.text-primary-600 { color: #d81b60; }
</style>