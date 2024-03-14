<template>
  <section class="projects" :id="sectionId">
    <h2 class="heading animation-duration-300" v-animateonscroll="{ enterClass: 'fadeindown' }">
      Projects
    </h2>
    <h5 class="sub-heading animation-duration-300" v-animateonscroll="{ enterClass: 'fadeindown' }">
      My collaborative and personal projects, showcasing my skills and
      experiences in web development.
    </h5>

    <div class="projects-container">
      <div class="card-project animation-duration-500" v-animateonscroll="{ enterClass: 'fadeindown' }">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
          <!-- circular
          :autoplayInterval="3000" -->
          <template #item="slotProps">
            <div class="border-1 surface-border border-round m-2 p-3">
              <div class="mb-3">
                <div class="relative mx-auto">
                  <img :src="'/projects/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full border-round"
                    preview />
                  <!-- <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)"
                    class="absolute" style="left: 5px; top: 5px" /> -->
                </div>
              </div>
              <div class="mb-3">
                <h3 class="project-title">{{ slotProps.data.name }}</h3>
              </div>
              <div class="flex justify-content-between align-items-center">
                <span>
                  <button class="btn-sm" @click="viewDetails">Details</button>
                </span>
                <span>
                  <button class="btn-sm" @click="previewSnaps(slotProps.data.alias)">
                    Preview
                  </button>
                </span>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </section>
  <div class="card flex justify-content-center">
    <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveGallery" :numVisible="5"
      containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true">
      <template #item="slotProps">
        <img :src="`/projects-details/${slotProps.item.itemImageSrc}`" :alt="slotProps.item.alt"
          style="width: 100%; display: block" />
      </template>

      <template #thumbnail="slotProps">
        <img :src="`/projects-details/${slotProps.item.thumbnailImageSrc}`" :alt="slotProps.item.alt"
          style="display: block" />
      </template>

      <template #caption="slotProps">
        <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
        <p class="text-white">{{ slotProps.item.alt }}</p>
      </template>
    </Galleria>
  </div>
  <ProjectDetails :visible="visible" @close-modal="visible = false" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import Image from "primevue/image";
import { ProductService } from "./systems";
import ProjectDetails from "./projects-components/ProjectDetails.vue";
import { PhotoService } from "./systems/photos";
import { PdService } from "./systems/pdms";
import { VpService } from "./systems/vpd";
import { CdService } from "./systems/cdh";
import { EdService } from "./systems/ed";
import { FwService } from "./systems/fw";

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

const images = ref();
const responsiveGallery = ref([
  {
    breakpoint: "1500px",
    numVisible: 5,
  },
  {
    breakpoint: "1024px",
    numVisible: 3,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
  },
]);
const displayBasic = ref(false);

const previewSnaps = async (type) => {
  if (type === "pd") {
    PdService.getImages().then((data) => (images.value = data));
  } else if (type === "vp") {
    console.log(type);
    VpService.getImages().then((data) => (images.value = data));
  } else if (type === "cd") {
    CdService.getImages().then((data) => (images.value = data));
  } else if (type === "ed") {
    EdService.getImages().then((data) => (images.value = data));
  } else if (type == "fw") {
    FwService.getImages().then((data) => (images.value = data));
  } else {
    return;
  }
  displayBasic.value = true;
};

onMounted(() => {
  sectionId.value = props.id;
  sectionName.value = props.id.charAt(0).toUpperCase() + props.id.slice(1);
  PhotoService.getImages().then((data) => (images.value = data));
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
  /* border: 1px solid red; */
  /* background: var(--bg-light); */
}

.projects .projects-container {
  /* border: 1px solid red; */
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
