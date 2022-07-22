<template>
  <ShowCart :open="openCart" />
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open" >
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
              <div class="flex px-4 pt-5 pb-2">
                <button type="button" class="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md" @click="open = false">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              <div class="px-4 py-6 space-y-6 border-t border-gray-200">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                <router-link :to="page.href" @click="open = false" class="block p-2 -m-2 font-medium text-gray-900">{{ page.name }}</router-link>

                </div>
              </div>

              <div class="px-4 py-6 space-y-6 border-t border-gray-200">
                <div class="flow-root">
                  <a href="#" class="block p-2 -m-2 font-medium text-gray-900">Joni</a>
                </div>
                <div class="flow-root">
                  <a href="#" class="block p-2 -m-2 font-medium text-gray-900">Create account</a>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">
      <nav aria-label="Top" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex items-center h-16">
            <button type="button" class="p-2 text-gray-400 bg-white rounded-md lg:hidden" @click="open = true">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="w-6 h-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="flex ml-4 lg:ml-0">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img class="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <router-link v-for="page in navigation.pages" :key="page.name"  :to="page.href" class="flex items-center text-sm font-medium text-gray-700 hover:text-red-800">{{ page.name }}</router-link>
              </div>
            </PopoverGroup>

            <div class="flex items-center ml-auto">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="#" class="flex items-center p-2 -m-2 group">
                  <UserIcon class="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-red-500" aria-hidden="true" />
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-red-800">Joni</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
                
              </div>

              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-red-500">
                  <span class="sr-only">Search</span>
                  <SearchIcon class="w-6 h-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Cart -->
              <div class="flow-root ml-4 lg:ml-6">
                <a class="flex items-center p-2 -m-2 group">
                  <ShoppingBagIcon class="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-red-500" @click="getCart" aria-hidden="true" />
                  <span class="ml-2 text-sm font-medium text-red-700 group-hover:text-red-800">1</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon, UserIcon } from '@heroicons/vue/outline'
import ShowCart from '@/components/ShowCart.vue'

const navigation = {
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Produk', href: '/Produk' },
    { name: 'Review', href: '/review' },
    { name: 'Location', href: '/location' },
  ],
}

const open = ref(false)

const openCart = ref(false)

async function getCart() {
  openCart.value = true

}
console.log(openCart.value);

</script>

<style scoped>
a.router-link-active{
  color : red;
}
</style>