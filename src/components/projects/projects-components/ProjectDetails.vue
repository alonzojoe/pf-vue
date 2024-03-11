<template>
  <Modal class="modal-details" :visible="bool" modal :header="spacer" @update:visible="closeModal" :draggable="false"
    :style="{ width: '40vw' }" resize="false" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <h1>Performance Governance Digital Monitoring System</h1>
    <p class="ml-4 m-0 mt-2 text-2xl">
      • Created a Performance Governance Digital Monitoring System that monthly tracks the submitted deliverables, and
      at the end of the year, it verifies whether the deliverables have been accomplished.
    </p>

    <p class="ml-4 m-0 mt-2 text-2xl">
      • I was assigned as the lead developer for this project and assigned vital modules, such as User Management,
      Operations
      Review, Department Requests (Addition/Deletion), Graphs &amp; Charts, Dashboard Notifications and Monitoring of
      Monthly
      Reports of Deliverables.
    </p>
    <p class="ml-4 m-0 mt-2 text-2xl"> • Implemented SMS notifications using the Smart API Gateway for system updates,
      including
      deadlines
      for
      submission and
      other important announcements.</p>


  </Modal>
</template>

<script setup>
import { ref, watchEffect } from "vue";
const props = defineProps({
  visible: Boolean,
});

const spacer = ref(' ');

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
