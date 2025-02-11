<template>
  <section class="flex flex-col gap-10 p-4 min-h-screen bg-gray-900 text-white">
    <div class="relative">
      <NuxtLink
        class="flex items-center absolute top-3 left-3"
        to="/"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path fill="white" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/>
        </svg>
      </NuxtLink>
    </div>

    <form
      @submit.prevent="validatorRegister"
      class="flex flex-col gap-3 mx-3 bg-gray-800 rounded-2xl p-6 shadow-2xl space-y-6 mt-5 mb-15"
    >
    <div class="flex flex-col items-center justify-center">
      <h2 class="font-mono text-3xl font-semibold text-center">
        Moov
      </h2>
  
      <span class="text-gray-300 font-light">
        A melhor experiência de cinema
      </span>
    </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
        <MovInput
          v-model="name"
          label="Nome completo"
          placeholder="Digite seu nome completo"
          type="text"
        />

        <MovInput
          v-model="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          type="text"
        />

        <MovInput
          v-model="birthday"
          label="Data de nascimento"
          placeholder="00/00/0000"
          type="date"
        />

        <MovInput
          v-model="email"
          label="Email"
          placeholder="seuemail@gmail.com"
          type="email"
        />

        <MovInput
          v-model="cep"
          label="CEP"
          placeholder="00-000-000"
          type="number"
        />

        <MovInput
          v-model="neighborhood"
          label="Bairro"
          placeholder="Ex: Liberdade"
          type="text"
        />

        <MovInput
          v-model="numberHouse"
          label="Número da residência"
          placeholder="Ex: 123"
          type="number"
        />

        <MovInput
          v-model="password"
          label="Senha"
          placeholder="Defina sua senha"
          type="text"
        />
      </div>

      <MovButton
        label="Registrar"
      />

      <MovError v-if="errorRegister"
        label="Cadastro inválido. Preencha todos os campos."
      />

      <MovConfirm v-if="confirmRegister"
        label="Cadastro feito com sucesso!"
      />
    </form>

    <MovNavgate />
  </section>
</template>

<script setup>
import { MovConfirm } from '#components';


  const name = ref('');
  const cpf = ref('');
  const birthday = ref('');
  const email = ref('');
  const numberHouse = ref('');
  const cep = ref('')
  const neighborhood = ref('');
  const password = ref('');

  const errorRegister = ref(false);
  const confirmRegister = ref(false);
  
  
  async function validatorRegister() {
    
    if (
      name.value &&
      cpf.value &&
      birthday.value &&
      email.value &&
      numberHouse.value &&
      cep.value &&
      neighborhood.value &&
      password.value
    ) {
      modalConfirmRegister();

    } else {
      modalErrorRegister();

      name.value = '';
      cpf.value = '';
      birthday.value = '';
      email.value = '';
      numberHouse.value = '';
      neighborhood.value = '';
      password.value = '';
    };
  };

  function modalErrorRegister() {
    errorRegister.value = !errorRegister.value;

      setTimeout(() => {
        errorRegister.value = false;
      }, 3000);
  };

  function modalConfirmRegister() {
    confirmRegister.value = !confirmRegister.value;

      setTimeout(() => {
        confirmRegister.value = false;
        navigateTo('/');
      }, 3000);
  };


</script>
