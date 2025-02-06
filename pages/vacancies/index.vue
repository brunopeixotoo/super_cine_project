<template>
  <section class="flex flex-col gap-3 p-1 min-h-screen bg-gray-900">
    <div class="flex flex-col bg-gray-800 rounded-xl drop-shadow-xl m-3 p-2">
      <div class="flex justify-between text-white w-full">
        <NuxtLink
          v-for="hr in hours"
          :key="hr.id"
          @click="hourSelected(hr.hour)"
          :class="[
            'font-light font-semibold text-lg m-3',
            hourSelect === hr.hour ? 'border-b-2 border-white' : ''
          ]"
        >
          {{ hr.hour }}
        </NuxtLink>
      </div>
    </div>

    <p class="flex items-center justify-center text-lg text-white">
      Horários
    </p>

    <div class="flex flex-col text-white m-auto gap-3">
      <div class="flex flex-wrap gap-2 m-2">
        <div
          v-for="(chair, index) in 35"
            @click="chairSelect(index)"
            :class="[
              'flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer',
              selectedChairs.includes(index) ? 'bg-indigo-400' : 'bg-gray-700'
            ]"
          >
          <span v-if="selectedChairs.includes(index)" class="text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="white" d="m1902 196l121 120L683 1657L25 999l121-121l537 537z"/></svg>
          </span>

          <span v-else class="text-sm font-semibold">
            C{{ index }}
          </span>
        </div>
      </div>

      <div class="flex items-center justify-center rounded-lg bg-gray-800 text-sm">
        <p>Tela</p>
      </div>
  
      <p class="flex items-center justify-center text-lg text-white">
        Cadeiras
      </p>
    </div>

    <div class="flex justify-between w-full p-3 text-xs">
      <div
        v-for="status in statusChair"
        :key="status.id"
        class="flex gap-3 text-white font-light items-center"
      >
        <div>
          <span v-if="status.title == 'Selecionado'" :class="status.bg">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="white" d="m1902 196l121 120L683 1657L25 999l121-121l537 537z"/></svg>
          </span>  
          <span v-else :class="status.bg">
            {{ status.value }}
          </span>  
        </div>

        <p>
          {{ status.title }}
        </p>
      </div>
    </div>

    <div class="flex gap-3 items-start m-3 text-white">
      <div class="flex flex-col gap-1 items-center bg-gray-800 rounded-xl drop-shadow-xl p-3">
        <p>Sala</p>
        <span>C</span>
      </div>

      <div class="flex flex-col gap-1 items-center bg-gray-800 rounded-xl drop-shadow-xl p-3">
        <p>
          Lugar selecionado
        </p>

        <span v-if="selectedChairs < 0" class="font-light">
          Nenhum
        </span>
        <span v-else class="font-light">
          C{{ selectedChairs.join(", C") }}
        </span>
      </div>

      <div class="flex flex-col gap-1 items-center bg-gray-800 rounded-xl drop-shadow-xl p-3">
        <p>
          Horário
        </p>

        <span v-if="!hourSelect " class="font-light">
          Nenhum
        </span>
        <span v-else class="font-light">
          {{ hourSelect }}
        </span>
      </div>
    </div>

    <div class="flex gap-3 items-center m-3 text-white">
      <div class="flex gap-2 items-center bg-gray-800 rounded-xl drop-shadow-xl p-3">
        <input
          v-model="isChecked"
          @click="updateRoute"
          type="checkbox"
          class="p-4"
        >
        <p class="text-light">
          Comprar bebidas e comidas online
        </p>
      </div>
    </div>

    <NuxtLink
      class="flex gap-2 items-center justify-center bg-indigo-400/80 text-white font-semibold px-1 py-3 rounded-full mx-3 mb-25 drop-shadow-xl"
      :to="{
        path: nextPage, 
        query: { chairs: JSON.stringify(selectedChairs), total: selectedChairs.length * 20 }
      }"
    >
      <p>
        R${{ selectedChairs.length*20 }}
      </p>

      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56">
        <path fill="white" fill-rule="evenodd"
          d="M7.627 16.697L23.812 5.364a4 4 0 0 1 5.57.982l2.553 3.645q.056.08.107.163zM2.147 29.84L1.04 25.708a4 4 0 0 1 2.83-4.898L44.438 9.94a4 4 0 0 1 4.899 2.828l1.151 4.298a3.2 3.2 0 0 1-1.121 3.35a5.001 5.001 0 0 0 2.433 8.903a3.08 3.08 0 0 1 2.576 2.255l1.172 4.377a4 4 0 0 1-2.828 4.899L12.15 51.72a4 4 0 0 1-4.898-2.828l-1.103-4.118a3.48 3.48 0 0 1 1.16-3.6a5.001 5.001 0 0 0-2.37-8.812a3.46 3.46 0 0 1-2.791-2.52m35.478-6.689a3 3 0 1 0-1.553-5.795a3 3 0 0 0 1.553 5.795m2.07 7.728a3 3 0 1 0-1.552-5.796a3 3 0 0 0 1.553 5.796m2.071 7.727a3 3 0 1 0-1.552-5.795a3 3 0 0 0 1.552 5.795" />
      </svg>
    </NuxtLink>

    <Navgate  
      class="fixed bottom-0 left-0 right-0 z-50"
    />
  </section>
</template>

<script setup>

  const hourSelect = ref(null);
  const selectedChairs = ref([]);
  const nextPage = ref('/payment');


  const hours = ref([
    {
      id: 0,
      hour: '17:00'
    },
    {
      id: 1,
      hour: '18:30'
    },
    {
      id: 2,
      hour: '19:20'
    },
    {
      id: 3,
      hour: '20:00'
    },
    {
      id: 4,
      hour: '21:30'
    },
  ]);
  
  const statusChair = ref([
    {
      id: 0,
      value: 'Nª',
      title: 'Disponível',
      bg: 'w-9 h-9 bg-gray-700 rounded-lg flex items-center justify-center',
    },
    {
      id: 1,
      value: 'X',
      title: 'Não Disponível',
      bg: 'w-9 h-9 bg-gray-700 rounded-lg flex items-center justify-center',
    },
    {
      id: 2,
      value: '#',
      title: 'Selecionado',
      bg: 'w-9 h-9 bg-indigo-400 rounded-lg flex items-center justify-center',
    },
  ]);

  

  const chairSelect = (index) => {
    if (selectedChairs.value.includes(index)) {
      selectedChairs.value = selectedChairs.value.filter((i) => i !== index);
    } else {
      selectedChairs.value.push(index);
    }
  };

  function hourSelected(hour) {
    hourSelect.value = hour;
  };

  const updateRoute = () => {
    nextPage.value = '/premises';
  };


</script>