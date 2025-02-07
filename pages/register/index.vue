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
      <h2 class="text-2xl font-semibold text-center">
        Moov - Cadastro
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <label class="block mb-1">
            Nome completo
          </label>
          <input
            v-model="name"
            placeholder="Digite seu nome"
            type="text"
            class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label class="block mb-1">
            CPF
          </label>

          <input
            v-model="cpf"
            placeholder="000.000.000-00"
            type="text"
            class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div class="md:col-span-2">
          <label class="block mb-1">
            Data de nascimento
          </label>

          <input
            v-model="birthday"
            type="date"
            class="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div class="md:col-span-2">
          <label class="block mb-1">
            Email
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="seuemail@gmail.com"
            class="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div class="md:col-span-2">
          <label class="block mb-1">
            Cep
          </label>

          <input
            v-model="cep"
            type="number"
            placeholder="00-000-000"
            class="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div class="md:col-span-2">
          <label class="block mb-1">
            Bairro
          </label>

          <input
            v-model="neighborhood"
            type="text"
            placeholder="Ex: Liberdade"
            class="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div class="md:col-span-2">
          <label class="block mb-1">
            Número da residência
          </label>

          <input
            v-model="numberHouse"
            type="number"
            placeholder="Ex: 123"
            class="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div class="md:col-span-2">
          <label class="block mb-1">
            Senha
          </label>

          <input
            v-model="password"
            type="password"
            class="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <MovButton
        label="Registrar"
      />

      <div v-if="errorRegister" class="flex items-start bg-red-500 rounded-xl p-2">
        <span class="text-white">
          Cadastro inválido. Preencha todos os campos.
        </span>
      </div>

      <div v-if="confirmRegister" class="flex items-start bg-green-500 rounded-xl px-2 py-4">
        <span class="text-white">
          Cadastro feito com sucesso!
        </span>
      </div>
    </form>

    <MovNavgate />
  </section>
</template>

<script setup>

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
