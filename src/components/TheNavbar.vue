<template>
  <div>
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open" >
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto shadow-xl bg-cyan-300">
              <div class="flex px-4 pt-5 pb-2">
                <button type="button" class="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md" @click="open = false">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              <div class="px-4 py-6 space-y-6 ">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                <router-link :to="page.href" @click="open = false" class="block p-2 -m-2 font-medium text-gray-900">{{ page.name }}</router-link>

                </div>
              </div>

              <div class="px-4 py-6 space-y-6 border-t border-gray-400">
                <div class="flow-root">
                  <a href="#"  class="block p-2 -m-2 font-medium text-gray-900">{{ displayName }}</a>
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

    <header class="relative bg-cyan-300">
      <nav aria-label="Top" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <div class="flex items-center h-16">
            <button type="button" class="p-2 text-gray-700 rounded-md bg-cyan-300 lg:hidden" @click="open = true">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="w-6 h-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="flex ml-4 lg:ml-0">
              <a href="#">
                <span class="sr-only">THUMBSUP FOOD</span>
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
                  <UserIcon v-if="!isLoggedIn" class="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-red-500" aria-hidden="true" />
                  <img :src="photoURL" v-if="isLoggedIn" class="flex-shrink-0 w-6 h-6 text-gray-400 rounded group-hover:text-red-500" aria-hidden="true" />
                </a>
                
              </div>

              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-700 hover:text-red-500">
                  <span class="sr-only">Search</span>
                  <SearchIcon class="w-6 h-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Cart -->
              <div class="flow-root ml-4 lg:ml-6">
                <a class="flex items-center p-2 -m-2 group">
                  <ShoppingBagIcon class="flex-shrink-0 w-6 h-6 text-gray-700 group-hover:text-red-500" @click="isOpen = true" aria-hidden="true" />
                  <span class="ml-2 text-sm font-medium text-red-700 group-hover:text-red-800">1</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

     <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-10" @close="closeCart">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="w-screen max-w-md pointer-events-auto">
                <div class="flex flex-col h-full overflow-y-scroll shadow-xl bg-cyan-300">
                  <div class="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900"> Pesanan Anda </DialogTitle>
                      <div class="flex items-center ml-3 h-7">
                        <button type="button" class="p-2 -m-2 text-gray-400 hover:text-gray-500"  @click="closeCart">
                          <span class="sr-only">Close panel</span>
                          <XIcon class="w-6 h-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <ShowCart />
                  </div>

                  <div class="px-4 py-6 border-t border-gray-700 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>Rp 120.262</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Harga Sudah Termasuk Pajak</p>
                    <div class="mt-6">
                      <a href="#" class="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>
                    <div class="flex justify-center mt-6 text-sm text-center text-gray-500">
                      <p>
                        atau <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="closeCart">Lanjut Belanja<span aria-hidden="true"> &rarr;</span></button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
  TransitionChild,
  TransitionRoot,
  DialogTitle,
} from '@headlessui/vue'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon, UserIcon } from '@heroicons/vue/outline'
import { useRouter } from "vue-router"
import ShowCart from '@/components/ShowCart.vue'
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth'

const isLoggedIn = ref(false)
const displayName = ref()
const email = ref()
const photoURL = ref()
const emailVerified = ref()

let auth;
onMounted (() => {
  auth = getAuth();
  const user = auth.currentUser;
  

  onAuthStateChanged(auth, (user) => {
    if (user) {
  // The user object has basic properties such as display name, email, etc.
      displayName.value = user.displayName;
      email.value = user.email;
      photoURL.value = user.photoURL;
      emailVerified.value = user.emailVerified;
      console.log(displayName.value);
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      isLoggedIn.value = true 
    }else {
      isLoggedIn.value =false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(( )=> {
    router.push('/sign-in');
  })
}

function closeCart() {
  isOpen.value = false
}

const navigation = {
  pages: [
    { name: 'THUMBSUP FOOD', href: '/' },
  ],
}

const open = ref(false)

const isOpen = ref(false)


</script>

