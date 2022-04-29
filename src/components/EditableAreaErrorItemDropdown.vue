<template>
  <div contenteditable="false" class="editable-area-error-item-dropdown">
    <div
      v-for="suggestedWord in suggestions"
      class="editable-area-error-item-dropdown-item"
      @click="$emit('replace', suggestedWord)"
    >
      {{ suggestedWord }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  suggestions: string[];
}>();

defineEmits(['replace'])
</script>

<style scoped>
.editable-area-error-item-dropdown {
  position: absolute;
  display: none;
  top: 1rem;
  left: 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  border-radius: .5rem;
  min-width: 9.375rem;
  overflow: hidden;
}

.editable-area-error-item-dropdown-item {
  padding: 0.5rem 1rem;
  border-bottom: solid thin rgba(0, 0, 0, 0.06);
  cursor: pointer;
}
.editable-area-error-item-dropdown-item:hover{
  background-color: #f4f4f4;
}
</style>
