<template>
  <div class="text-editor">
    <EditableArea :spell-errors="spellErrors" ref="editableAreaRef" v-model="text" @update:model-value="onTextInput" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import debounce from "../helpers/debounce";
import spellingChecker from "../shared/spelling-checker";
import EditableArea from "./EditableArea.vue";
import { TextGearsResponseError } from "../types/TestGears";

const text = ref("");
const spellErrors = ref<TextGearsResponseError[]>([])

const checkSpelling = () => {
  spellingChecker(text.value)
    .then((response) => {
      spellErrors.value = response.data.response.errors;
    })
    .catch((error) => {
      console.log({ error });
    });
};

const onTextInput = debounce(checkSpelling, 500);

</script>

<style scoped>
.text-editor {
  padding: 1rem;
}
</style>
