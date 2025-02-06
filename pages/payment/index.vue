<template>
  <section class="flex flex-col gap-10 p-4 min-h-screen bg-gray-900 text-white">
    <div class="relative">
      <NuxtLink
        class="flex items-center absolute top-3 left-3"
        to="/vacancies"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path fill="white" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"/>
        </svg>
      </NuxtLink>
    </div>

    <form class="flex flex-col gap-5 mx-3 bg-gray-800 rounded-2xl p-6 shadow-2xl space-y-6 mt-5 mb-20">
      <h2 class="text-2xl font-semibold text-center">
        Dados do Pagamento
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>

      <div class="bg-gray-700 p-4 rounded-xl">
        <p class="text-lg font-medium mb-3">
          Formas de Pagamento
        </p>
        
        <div class="flex justify-around gap-4">
          <button
            v-for="(method, index) in paymentMethods"
            :key="index"
            :class="[
              'px-4 py-2 rounded-lg transition-all',
               selectedPayment === method ? 'bg-indigo-500 text-white' : 'bg-gray-600 hover:bg-indigo-400'
            ]"
            @click.prevent="selectPayment(method)"
          >
            {{ method }}
          </button>
        </div>
      </div>

      <button
        type="submit"
        class="w-full py-3 mt-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white text-lg font-semibold transition-all"
      >
        Confirmar Pagamento
      </button>
    </form>
  </section>
</template>

<script setup>

  const name = ref('');
  const cpf = ref('');
  const birthday = ref('');
  const paymentMethods = ['Pix', 'Débito', 'Crédito'];
  const selectedPayment = ref('');

  const selectPayment = (method) => {
    selectedPayment.value = method;
  };

</script>
