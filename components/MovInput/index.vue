<template>
  <div>
    <input
      :label="labelClass"
      :type="typeClass"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>

  defineProps({
    title: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    typeClass: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
  });

</script>