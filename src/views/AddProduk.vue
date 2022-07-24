<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <div class="px-4 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-10">

      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class="shadow sm:rounded-md">
            <div class="px-4 py-5 bg-cyan-300 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label for="productName" class="block text-sm font-medium text-gray-700">Nama Produk</label>
                  <input type="text" name="productName" id="productName" autocomplete="given-name" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>

                <div class="col-span-6">
                  <label for="produkPrice" class="block text-sm font-medium text-gray-700">Harga</label>
                  <input type="text" name="produkPrice" id="produkPrice" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div class="col-span-6">
                  <label for="image" class="block text-sm font-medium text-gray-700">Street address</label>
                  <input type="text" name="image" id="image" autocomplete="image" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>

                <div class="col-span-6">
                  <label for="image" class="block text-sm font-medium text-gray-700">Status</label>
                  <input type="text" name="image" id="image" autocomplete="image" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>

                <div class="col-span-6">
                  <label for="image" class="block text-sm font-medium text-gray-700">Gambar</label>
                  <input type="text" name="image" id="image" autocomplete="image" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>

                <div class="col-span-6">
                  <label for="image" class="block text-sm font-medium text-gray-700">Street address</label>
                  <input type="text" name="image" id="image" autocomplete="image" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
               </div>
  

            </div>
            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <button type="submit" @click="createProduk" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>

<script setup>
import { getFirestore, doc, setDoc } from "firebase/firestore"

const db = getFirestore()

async function createProduk() {
    await setDoc(doc(db, 'produk', 'PR004'),{
    name: 'Batagor Goreng Daun',
    href: '#',
    produkPrice: 'Rp. 15.000',
    imageSrc: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
            })
        }
    
</script>
