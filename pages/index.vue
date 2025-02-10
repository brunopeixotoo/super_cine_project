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
        <MovInput
          v-model="name"
          label="Nome"
          place-holder="Nome de usuário"
          text="text"
        />

        <MovInput
          v-model="password"
          label="Senha"
          place-holder="Digite sua senha"
          text="password"
        />
      </div>
      
      <div class="flex flex-col gap-3 font-light items-center justify-center">
        <div class="flex gap-1">
          <span class="font-light">
            Esqueceu sua senha?
          </span>

          <NuxtLink
            class="text-blue-500 underline"
            to="/register"  
          >
            Clique aqui
          </NuxtLink>
        </div>

        <div class="flex gap-1">
          <span>
            Não é cadastrado?
          </span>
          
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

      <MovError v-if="errorLogin"
        label="Ops! Nome de usuário ou senha incorretos."
      />
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