<template>
  <section class="contact" :id="sectionId">
    <h2 class="heading">Contact</h2>
    <h5 class="sub-heading">Let's build awesome stuffs for you.</h5>
    <div class="contact-container">
      <div class="contact-box">
        <div class="container-info">
          <div class="contact-info">
            <div class="contact-icon">
              <a class="bx bxs-map"></a>
            </div>
            <span>Pampanga, Philippines 2020</span>
          </div>
          <div class="contact-info">
            <div class="contact-icon">
              <a class="bx bx-mobile"></a>
            </div>
            <span>(0905)-184-9250</span>
          </div>
          <div class="contact-info">
            <div class="contact-icon">
              <a class="bx bxs-envelope"></a>
            </div>
            <span>alonzojoenell2k15@gmail.com</span>
          </div>
        </div>
      </div>
      <div class="contact-box">
        <form @submit.prevent="sendEmail()">
          <div class="input-box">
            <div class="input" :class="{ 'group-invalid': flagSave && !validationStatus.name }">
              <label for="name">Name <span v-if="flagSave && !validationStatus.name">is required *</span></label>
              <input type="text" v-model="formData.name" id="name" />
            </div>
          </div>
          <div class="input-box">
            <div class="input" :class="{ 'group-invalid': flagSave && !validationStatus.emailFrom }">
              <label for=" email">Email <span v-if="flagSave && !validationStatus.emailFrom">is required *</span></label>
              <input type="email" v-model="formData.emailFrom" id="email" />
            </div>
          </div>
          <div class="input-box">
            <div class="input" :class="{ 'group-invalid': flagSave && !validationStatus.subject }">
              <label for="subject">Subject <span v-if="flagSave && !validationStatus.subject">is
                  required *</span></label>
              <input type="text" v-model="formData.subject" id="subject" />
            </div>
          </div>
          <div class="input-box">
            <div class="input" :class="{ 'group-invalid': flagSave && !validationStatus.message }">
              <label for="text-message">Message <span v-if="flagSave && !validationStatus.message">is
                  required *</span></label>
              <textarea id="text-message" v-model="formData.message"></textarea>
            </div>
          </div>
          <!-- <VueRecaptcha v-if="disableSubmit" ref="recaptchaRef" :sitekey="siteKey" :load-recaptcha-script="true"
            @verify="handleSuccess" @error="handleError"></VueRecaptcha> -->
          <button class="btn-sm" :class="{ 'mt-4': disableSubmit }" type="submit">
            Send Message
          </button>
          <!-- :disabled="disableSubmit" -->
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { VueRecaptcha } from "vue-recaptcha";
import { validationStatus, validationChecker, validateFields } from "./validation";
import emailjs from "emailjs-com";

const props = defineProps({
  id: String,
});

const sectionId = ref();
const sectionName = ref();
const recaptchaRef = ref(null);
const formData = ref({
  emailFrom: "",
  toEmail: "5tscholar2k21@gmail.com,",
  name: "",
  subject: "",
  message: "",
});

const disableSubmit = ref(true);
const resetForm = () => {
  flagSave.value = false
  Object.keys(formData.value).forEach((e) => {
    if (e !== "toEmail") {
      formData.value[e] = "";
    }
  });
  if (recaptchaRef.value) {
    recaptchaRef.value.reset();
  }
  disableSubmit.value = true;
};



const flagSave = ref(false)
const sendEmail = async () => {
  flagSave.value = true
  const errors = await validateFields(1, formData.value, 0)
  if (errors === 0) {
    console.log('you can now send email :V')
  }
  // if (disableSubmit.value) return;

  // const emailParams = {
  //   to_email: formData.value.toEmail,
  //   to_name: "Joe",
  //   from_name: `${formData.value.name} (${formData.value.emailFrom})`,
  //   subject: formData.value.subject.toUpperCase(),
  //   message: formData.value.message,
  // };

  // try {
  //   const response = await emailjs.send(
  //     import.meta.env.VITE_MAIL_SERVICE,
  //     import.meta.env.VITE_MAIL_TEMPLATE,
  //     emailParams,
  //     import.meta.env.VITE_MAIL_USER
  //   );
  //   console.log("Email sent successfully:", response);
  // } catch (error) {
  //   console.log("Email failed to sent", error);
  // }

  // resetForm();
};

watch(() => {
  formData.value
  if (flagSave.value === true) {
    validateFields(1, formData.value, 1)
  }
}, { deep: true })

const siteKey = computed(() => {
  return import.meta.env.VITE_SITE_KEY;
});

const handleError = () => {
  console.log("captcha failed");
};

const handleSuccess = () => {
  disableSubmit.value = false;
};

onMounted(() => {
  sectionId.value = props.id;
  sectionName.value = props.id.charAt(0).toUpperCase() + props.id.slice(1);
});
</script>

<style scoped>
section {
  margin-bottom: 0 !important;
}

.contact {
  border: 1px solid red;
  background: #763ed0;
  /* background: var(--bg-light); */
}

.heading {
  color: #fff !important;
}

.sub-heading {
  color: #e2e2e2 !important;
}

.contact .contact-container {
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  gap: 1.5rem;
}

.contact .contact-container .contact-box {
  /* border: 1px solid red; */
  background: var(--card-bg);
  /* border: 0.1rem solid rgba(0, 0, 0, 0.2);*/
  border-radius: 15px;
  box-shadow: 7px 7px 36px 5px rgba(67, 56, 67, 0.09);
  /* max-width: 90rem; */
  padding: 1.5rem;
  /* margin: 0 auto; */
}

.contact .contact-container form {
  padding-left: 15px;
  padding-right: 15px;
}

.contact .contact-container form .input-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.contact .contact-container form .input-box .input {
  width: 100%;
}

.contact .contact-container form .input-box .input label {
  display: block;
  padding: 0.5rem 0;
  font-size: 1.5rem;
  color: var(--text-light);
}

.contact .contact-container form .input-box .input input,
.contact .contact-container form .input-box .input textarea {
  background: #fff;
  border-radius: 0.5rem;
  /* padding: 0.5rem; */
  padding: 8px 10px;
  font-size: 1.6rem;
  color: #13141f;
  text-transform: none;
  margin-bottom: 1rem;
  width: 100%;
  /*border: 0.1rem solid rgba(0, 0, 0, 0.2);*/
  border: 1px solid #d5d5d7;
}

.contact .contact-container form .input-box .input input:focus,
.contact .contact-container form .input-box .input textarea:focus {
  border: 0.1rem solid var(--text-purple);
}

.contact .contact-container form .input-box .input textarea {
  height: 10rem;
  resize: none;
}

.contact .contact-container .contact-box .container-info {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 5rem;
}

.contact .contact-container .contact-box .container-info .contact-info {
  /* border: 1px solid red; */
  padding: 1rem;
}

.contact .contact-container .contact-box .container-info .contact-info a {
  height: 4.5rem;
  width: 4.5rem;
  line-height: 4.5rem;
  text-align: center;
  background: var(--text-purple);
  border-radius: 50%;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.contact .contact-container .contact-box .container-info .contact-info span {
  color: var(--text-light);
  font-size: 1.7rem;
  margin-bottom: 2rem;
}

.btn-sm {
  cursor: pointer;
  color: var(--text-white);
  font-size: 1.3rem;
  background: var(--text-purple);
  border-radius: 0.5rem;
  padding: 0.8rem 2rem;
  transition: all 0.2s ease-in-out;
}

.btn-sm:hover {
  background: #7d4ec9;
}

.btn-sm:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* .input.group-invalid>textarea {
  animation: shake 0.4s 1 !important;
  border-color: #ff0026 !important;
  background-color: #ed7c7c !important;
} */



@media (max-width: 768px) {
  .contact .contact-container {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
}

@media (max-width: 450px) {}
</style>
