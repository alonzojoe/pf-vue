<template>
    <footer class="footer" id="footer">
        <div class="footer-box">
            <div class="footer-items">
                <h3>Joe's Portfolio</h3>
            </div>
            <div class="footer-items">
                <a href="#" class='bx bxl-github'></a>
                <a href="#" class='bx bxl-linkedin'></a>
                <a href="#" class='bx bxl-facebook'></a>
            </div>
        </div>
        <hr />
        <p>&copy; Joenell Alonzo. All Rights Reserved {{ currentYear }}</p>
    </footer>
</template>

<script setup>
import { ref } from "vue"
import moment from "moment";

const currentYear = ref(moment().year())
</script>

<style scoped>
.footer {
    border: 1px solid red;
    padding: 0 20%;
    padding-bottom: 5rem;
}

.footer-items h3 {
    font-size: 2rem;
    font-weight: 600;
}

.footer .footer-box {

    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 1px solid #b3b4b7;
}

.footer p {
    font-size: 1.3rem;
    text-align: center;
}

/*.footer {
    background: var(--bg-light);
    border: 1px solid red;
    padding: 0 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.footer p {
    max-width: 100%;
    margin: 0 auto;
    font-size: 1.7rem;
    color: var(--text-light);
}*/
</style>