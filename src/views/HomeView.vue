<template>
    <div class="px-5 py-10 mx-auto sm:py-1 sm:px-6 lg:max-w-7xl lg:px-10 lg:py-4">
      <h2 class="sr-only">Products</h2>

      <div class="grid grid-cols-2 gap-y-5 sm:grid-cols-4 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-5">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="object-cover object-center w-full h-full group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700 ">
            {{ product.name }}
          </h3>
          <p class="mt-1 text-sm font-medium text-gray-900">
            {{ product.price }}
          </p>
        </a>
    </div>
    
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getFirestore, query, collection, getDocs } from 'firebase/firestore'

const db = getFirestore()
const products = ref([])

onMounted(async () => {
  const querySnap = await getDocs(query(collection(db, 'produk')));
  let fbProducts = []
      querySnap.forEach((doc) => {
        console.log(doc.id, " => ", doc.data() );
        const product = {
          id: doc.id,
          href: doc.data().href,
          imageAlt: doc.data().imageAlt,
          imageSrc: doc.data().imageSrc,
          name: doc.data().name,
          price: doc.data().price,
        }
        fbProducts.push(product)
      })
      products.value = fbProducts
    })
      
  
</script>