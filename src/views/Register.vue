<template>
    <div class="px-4 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-10">

  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">SignIn With Goolge</button></p>

    </div>
</template>
<script setup>

  import { ref } from 'vue'
  import { useRouter } from 'vue-router' // import router
  import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  
  const auth = getAuth();
  const email = ref('')
  const password = ref('')
  const router = useRouter() // get a reference to our vue router
  const register = () => {
     // get the auth api
    createUserWithEmailAndPassword (auth, email.value, password.value) // need .value because ref()
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/')
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
      
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/");
    })
    .catch((error) =>{
      
    })
  }

</script>