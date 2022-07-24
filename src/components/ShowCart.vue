<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li v-for="product in products" :key="product.id" class="flex py-6">
                            <div class="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                              <img :src="product.imageSrc" :alt="product.imageAlt" class="object-cover object-center w-full h-full" />
                            </div>

                            <div class="flex flex-col flex-1 ml-4">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <p> {{ product.name }} </p>
                                  </h3>
                                  <p class="ml-4">{{ product.price }}</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                              </div>
                              <div class="flex items-end justify-between flex-1 text-sm">
                                <p class="text-gray-500">Jumlah dipesan {{ product.quantity }}</p>

                                <div class="flex">
                                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Hapus</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
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