<template>
  <section class="flex flex-col gap-10 p-4 min-h-screen bg-gray-900 text-white">
    <form
      @submit.prevent="validatorLogin"  
      class="flex flex-col gap-3 mx-3 bg-gray-800 rounded-2xl p-6 shadow-2xl space-y-6 mt-5 mb-20"
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
            type="text"
            class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <p class="font-light underline" target="_blank">
            Esqueceu sua senha?
          </p>
        </div>
      </div>

      <div class="flex gap-2 font-light items-center justify-center">
        <p>
          Não é cadastrado?
        </p>

        <a class="text-blue-500 underline" target="_blank">
          Clique aqui
        </a>
      </div>

      <button
        type="submit"
        class="w-full py-3 mt-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white text-lg font-semibold transition-all"
      >
        Entrar
      </button>

      <div v-if="errorLogin" class="flex items-start bg-red-500 rounded-xl p-2">
        <span class="text-white font-light">
          Ops! Nome de usuário ou senha incorretos.
        </span>
      </div>
    </form>
  </section>
</template>

<script setup>

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