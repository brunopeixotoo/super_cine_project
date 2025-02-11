<template>
    <section class="flex flex-col gap-10 p-4 min-h-screen bg-gray-900 text-white">
      <div class="relative">
        <NuxtLink
          class="flex items-center absolute top-2 left-4"
          to="/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path fill="white" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/>
          </svg>
        </NuxtLink>
      </div>

      <form
        @submit.prevent="validatorLogin"  
        class="flex flex-col gap-6 mx-3 bg-gray-800 rounded-2xl p-6 shadow-2xl space-y-6 mt-5 mb-20"
      >
        <div class="flex flex-col items-center justify-center">
          <h2 class="font-mono text-3xl font-semibold text-center">
            Moov
          </h2>
  
          <span class="text-gray-300 font-light">
            A melhor experiência de cinema
          </span>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MovInput
            v-model="name"
            label="Nome"
            placeholder="Nome de usuário"
            type="text"
          />
          
          <MovInput
            v-model="newPassword"
            label="Nova senha"
            placeholder="Digite sua nova senha"
            type="password"
          />
        </div>
        
        <div class="flex flex-col gap-3 font-light items-center justify-center">
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
          type="submit"
        />
  
        <MovError v-if="errorLogin"
          label="Ops! Nome de usuário ou senha incorretos."
        />
      </form>
    </section>
  </template>
  
  <script setup lang="ts">
  
    const name = ref('');
    const newPassword = ref('');
    const errorLogin = ref(false);
  
  
    async function validatorLogin() {
      if (name.value && newPassword.value) {
        navigateTo('/home');
      } else {
        menssegeError();
        name.value = '';
        newPassword.value = '';
      };
    };
  
    function menssegeError() {
      errorLogin.value = !errorLogin.value;
  
      setTimeout(() => {
        errorLogin.value = false;
      }, 3000);
    }
  
  </script>