<template>
  <div
    contenteditable
    :spellcheck="false"
    class="editable-area"
    ref="editableAreaRef"
    @input="onTextInput"
  ></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, createApp } from "vue";
import { TextGearsResponseError } from "../types/TestGears";
import EditableAreaErrorItem from "./EditableAreaErrorItem.vue";

const props = defineProps<{
  modelValue: string;
  spellErrors: TextGearsResponseError[];
}>();

const emit = defineEmits(["update:modelValue"]);

const editableAreaRef = ref({} as HTMLDivElement);

onMounted(() => {
  editableAreaRef.value.innerHTML = props.modelValue;
});

const onTextInput = () => {
  emit("update:modelValue", editableAreaRef.value.innerText);
};

watch(
  () => props.spellErrors,
  () => {
    highlightWrongWords(props.spellErrors);
  }
);

const highlightWrongWords = (spellErrors: TextGearsResponseError[]) => {
  spellErrors.forEach((errorItem) => {
    const editableComp = createApp(EditableAreaErrorItem, { errorItem, suggestions: errorItem.better })
    const element = document.createElement('span')
    editableComp.mount(element);

    editableAreaRef.value.innerHTML = editableAreaRef.value.innerHTML.replace(errorItem.bad, element.innerHTML)
  });

  setCaretToEnd(editableAreaRef.value)

};

const setCaretToEnd = (target: HTMLDivElement) => {
  const selection = window.getSelection();
  const range = document.createRange();

  selection?.removeAllRanges();
  range.selectNodeContents(target);
  range.collapse(false);

  selection?.addRange(range);
  target.focus();
};
</script>

<style scoped>
.editable-area {
  width: 100%;
  min-height: 20rem;
  border: solid 0.125rem rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 1rem;
}

</style>
