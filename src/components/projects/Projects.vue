<template>
  <section class="projects" :id="sectionId">
    <h2 class="heading">Projects</h2>

    <div class="projects-container">
      <div class="card-project">
        <Carousel
          :value="products"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
        >
          <!-- circular
          :autoplayInterval="3000" -->
          <template #item="slotProps">
            <div class="border-1 surface-border border-round m-2 p-3">
              <div class="mb-3">
                <div class="relative mx-auto">
                  <img
                    :src="
                      'https://primefaces.org/cdn/primevue/images/product/' +
                      slotProps.data.image
                    "
                    :alt="slotProps.data.name"
                    class="w-full border-round"
                  />
                  <Tag
                    :value="slotProps.data.inventoryStatus"
                    :severity="getSeverity(slotProps.data.inventoryStatus)"
                    class="absolute"
                    style="left: 5px; top: 5px"
                  />
                </div>
              </div>
              <div class="mb-3">
                <h3 class="project-title">{{ slotProps.data.name }}</h3>
              </div>
              <div class="flex justify-content-between align-items-center">
                <div class="mt-0 font-semibold text-xxl">
                  <!-- ${{ slotProps.data.price }} -->
                </div>
                <span>
                  <button class="btn-sm" @click="viewDetails">Details</button>
                </span>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </section>
  <Modal
    class="modal-details"
    v-model:visible="visible"
    maximizable
    modal
    header="Header"
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
import { ref, onMounted } from "vue";
import { ProductService } from "./systems";

const props = defineProps({
  id: String,
});

const sectionId = ref();
const sectionName = ref();

const products = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};

const visible = ref(false);

const viewDetails = () => {
  visible.value = true;
};

onMounted(() => {
  sectionId.value = props.id;
  sectionName.value = props.id.charAt(0).toUpperCase() + props.id.slice(1);
  ProductService.getProductsSmall().then(
    (data) => (products.value = data.slice(0, 9))
  );
});
</script>

<style scoped>
.btn-sm {
  cursor: pointer;
  color: var(--text-white);
  font-size: 1.4rem;
  background: var(--text-purple);
  border-radius: 0.5rem;
  padding: 0.8rem 2rem;
  transition: all 0.2s ease-in-out;
}

.btn-sm:hover {
  background: #7d4ec9;
}
.card-project {
  background: #f5fbf5;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  transition: ease 0.5s;
  box-shadow: 7px 7px 36px 5px rgba(67, 56, 67, 0.09) !important;
}

p {
  line-height: 1.75;
}
.projects {
  border: 1px solid red;
  /* background: var(--bg-light); */
}

.projects .projects-container {
  border: 1px solid red;
  padding: 3rem 0;
  /* display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr); */
}

.project-title {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.3;
}

.p-carousel-indicators {
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  flex-wrap: wrap !important;
  gap: 0.5rem !important;
}

@media (max-width: 991px) {
  .projects .projects-container {
    grid-template-columns: repeat(1, 1fr);
    transition: 0.3s;
  }
}
</style>
