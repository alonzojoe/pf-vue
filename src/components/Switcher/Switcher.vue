<template>
  <div class="switcher-container">
    <div class="switch-container pe-none">
      <input
        type="checkbox"
        v-model="isChecked"
        true-value="true"
        false-value="false"
        id="switch"
      />
      <label for="switch">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>

        <!-- <span class="ball"></span> -->
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
  checkType: Boolean,
  modalSwitch: Boolean
})

const currentTheme = localStorage.getItem("app-theme");
const isChecked = ref(currentTheme == "lara-light-purple" ? true : false);


onMounted(() => {
  setTimeout(() => {
    isChecked.value = props.checkType
  }, 100);
})



</script>

<style scoped>
.switcher-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F7F0F8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999999;
  /* animation: fadeOut 0.1s ease;  */
}

label {
  display: flex;
  width: 150px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;
  background: #2a3447;
  border-radius: 50px;
  transition: opacity 0.5s ease; 
  opacity: 1; 
}

label i {
  font-size: 40px;
}
label .fa-sun {
  color: gold;
  transition: 0.8s;
}
label .fa-moon {
  color: #183153;
  transition: 0.8s;
}
label .ball {
  display: none;
}
input:checked + label .fa-sun {
  transform: translateX(-60px);
}
input:checked + label .fa-moon {
  transform: translateX(60px);
}
label .fa-sun {
  opacity: 1;
}
input:checked + label .fa-sun {
  opacity: 0;
}
label .fa-moon {
  opacity: 0;
}
input:checked + label .fa-moon {
  opacity: 1;
}
label .ball {
  position: absolute;
  display: block;
  width: 44px;
  height: 44px;
  top: 8px;
  left: 10px;
  background: #fff;
  border-radius: 50%;
  transition: 0.8s;
}
input:checked + label .ball {
  transform: translateX(50px);
}
label .fa-moon {
  transform: translateX(70px);
}
input:checked + label .fa-moon {
  transform: translateX(0);
}
label {
  transition: 0.3s;
}
input:checked + label {
  background: #F7F0F8;
}
input:checked + label .ball {
  background: #121212;
}
input {
  display: none;
}
input:checked + label .fa-sun {
  transform: translateX(-60px) rotate(160deg);
}
label .fa-moon {
  transform: translateX(60px) rotate(250deg);
}
input:checked + label .fa-moon {
  transform: translateX(0), rotate(0);
}

@keyframes fadeOut {
  from {
    opacity: 1; 
  }
  to {
    opacity: 0; 
  }
}
</style>
