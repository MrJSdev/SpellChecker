<template>
  <span class="editable-area-error-item">
    {{ localWrongText }}

    <EditableAreaErrorItemDropdown @replace="localWrongText = $event" :suggestions="errorItem.better" />
  </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import EditableAreaErrorItemDropdown from "./EditableAreaErrorItemDropdown.vue";
import { TextGearsResponseError } from "../types/TestGears";

const props = defineProps<{
  errorItem: TextGearsResponseError;
}>();

const localWrongText = ref(props.errorItem.bad);

</script>

<style scoped>
.editable-area-error-item {
  border-bottom: solid 2px orangered;
  position: relative;
}

.editable-area-error-item:hover:deep(.editable-area-error-item-dropdown)  {
  display: block;
}
</style>
