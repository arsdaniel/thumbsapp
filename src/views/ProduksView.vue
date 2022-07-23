<template>
    <div class="px-4 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-10">
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-1 gap-y-5 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-5">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="object-cover object-center w-full h-full group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700 ">
            {{ product.name }}
          </h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ product.price }}
          </p>
        </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const db = getFirestore()
const products = ref('')

async function getProduk() {
      const querySnap = await getDocs(collection(db, 'produk'));

      querySnap.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      })
    }
  
</script>