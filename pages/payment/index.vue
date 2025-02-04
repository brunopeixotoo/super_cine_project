<template>
  <section class="flex flex-col gap-3 p-1 min-h-screen bg-gray-900">
    <Header></Header>
    <form class="grid grid-cols-3 gap-4 m-3 bg-gray-800 rounded-xl p-3 text-lg drop-shadow-xl">
      <div :class="gridColumns">
        <p class="text-light text-white mb-1">
          Nome completo
        </p>
        <input
          v-model="name"
          placeholder="Digite seu nome"
          type="text"
          class="bg-white rounded-lg w-full p-2"
        >
      </div>

      <div :class="gridColumns">
        <p class="text-light text-white mb-1">
          CPF
        </p>
        <input
          v-model="cpf"
          placeholder="000.000.000-00"
          type="text"
          class="bg-white rounded-lg w-full p-2"
        >
      </div>

      <div :class="gridColumns">
        <p class="text-light text-white w-full mb-1">
          Data de nascimento
        </p>
        <input
          v-model="birthday"
          placeholder="Digite seu nome"
          type="date"
          class="bg-white rounded-lg p-2"
        >
      </div>

      <div class="flex flex-col gap-3 p-3 bg-gray-800 rounded-lg shadow-md">
        <p class="text-white font-light text-lg">
          Formas de Pagamento
        </p>

        <ul class="flex justify-between w-full gap-2 text-white">
          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              id="pix"
              class="accent-indigo-500 w-4 h-4 cursor-pointer"
            >
            <label
              for="pix"
              class="cursor-pointer"
            >
              Pix
            </label>
          </li>

          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              id="debito"
              class="accent-indigo-500 w-4 h-4 cursor-pointer"
            >
            <label
              for="debito"
              class="cursor-pointer"
            >
              Débito
            </label>
          </li>

          <li class="flex items-center gap-2">
            <input
              type="checkbox"
              id="credito"
              class="accent-indigo-500 w-4 h-4 cursor-pointer"
            >
            <label
              for="credito"
              class="cursor-pointer"
            >
              Crédito
            </label>
          </li>
        </ul>
      </div>
    </form>
  </section>
</template>

<script setup>
  
  const gridColumns = ref('xl:col-span-1 md:col-span-2 col-span-3');

</script>