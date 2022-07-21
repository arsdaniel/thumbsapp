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

const products = [
  {
    id: 1,
    name: 'Burger Tusuk Pisau',
    href: '#',
    price: 'Rp. 25.000',
    imageSrc: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Steak With Brokoli',
    href: '#',
    price: 'Rp. 75.000',
    imageSrc: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Batagor Goreng Daun',
    href: '#',
    price: 'Rp. 15.000',
    imageSrc: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Udang Ebi Udah Gede',
    href: '#',
    price: 'Rp. 25.000',
    imageSrc: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Acar With Martabak',
    href: '#',
    price: 'Rp. 45.000',
    imageSrc: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Telur Setengah Matang',
    href: '#',
    price: 'Rp. 15.000',
    imageSrc: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'Sandwich Blubery',
    href: '#',
    price: 'Rp. 61.000',
    imageSrc: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 8,
    name: 'Paket Lengkap Nasi Kucing',
    href: '#',
    price: 'Rp. 23.000',
    imageSrc: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]
</script>