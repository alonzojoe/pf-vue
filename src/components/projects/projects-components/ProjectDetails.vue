<template>
  <Modal
    class="modal-details"
    :visible="bool"
    maximizable
    modal
    header="Header"
    @update:visible="closeModal"
    :draggable="false"
    :style="{ width: '60vw' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <p class="m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Modal>
</template>

<script setup>
import { ref, watchEffect } from "vue";
const props = defineProps({
  visible: Boolean,
});

const emit = defineEmits("close-modal");

const closeModal = () => {
  emit("close-modal", false);
};

const bool = ref();
watchEffect(() => {
  bool.value = props.visible;
});
</script>

<style lang="scss" scoped></style>
