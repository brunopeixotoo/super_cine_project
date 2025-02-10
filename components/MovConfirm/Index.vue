<template>
  <div class="flex items-start bg-green-500 rounded-xl px-2 py-4">
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