<template>
  <section class="flex flex-col gap-10 p-4 min-h-screen bg-gray-900 text-white">
    <form
      @submit.prevent="validatorLogin"  
      class="flex flex-col gap-6 mx-3 bg-gray-800 rounded-2xl p-6 shadow-2xl space-y-6 mt-5 mb-20"
    >
      <div class="flex flex-col items-center justify-center">
        <h2 class="font-mono text-3xl font-semibold text-center">
          Moov
        </h2>

        <span class="text-gray-300 font-light"> A melhor experiência de cinema </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-1">
            Nome completo
          </label>
          <input
            v-model="name"
            placeholder="Digite seu nome de usuário"
            type="text"
            class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label class="block mb-1">
            Senha
          </label>

          <input
            v-model="password"
            placeholder="Digite sua senha"
            type="password"
            class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      
      <div class="flex flex-col gap-3 font-light items-center justify-center">
        <div class="flex gap-1">
          <p class="font-light">
            Esqueceu sua senha?
          </p>

          <NuxtLink
            class="text-blue-500 underline"
            to="/register"  
          >
            Clique aqui
          </NuxtLink>
        </div>

        <div class="flex gap-1">
          <p>
            Não é cadastrado?
          </p>
          
          <NuxtLink
            class="text-blue-500 underline"
            to="/register"  
          >
            Clique aqui
          </NuxtLink>
        </div>
      </div>

      <MovButton
        label="Entrar"
      />

      <div v-if="errorLogin" class="flex items-start bg-red-500 rounded-xl p-2">
        <span class="text-white">
          Ops! Nome de usuário ou senha incorretos.
        </span>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">

  const name = ref('');
  const password = ref('');
  const errorLogin = ref(false);


  async function validatorLogin() {
    if (name.value && password.value) {
      navigateTo('/home');
    } else {
      menssegeError();
      name.value = '';
      password.value = '';
    };
  };

  function menssegeError() {
    errorLogin.value = !errorLogin.value;

    setTimeout(() => {
      errorLogin.value = false;
    }, 3000);
  }

</script>