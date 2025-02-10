<template>
  <div class="flex items-start bg-red-500 rounded-xl p-2">
    <span class="text-white">
      {{ label }}
    </span>
  </div>
</template>

<script setup>

  defineProps({
    label: { // definir o texto exibido para o error
      type: String,
      default: '',
    },
  });

</script>