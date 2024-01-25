<template>
    <section class="contact" id="contact">
        <h2 class="heading">Contact</h2>
        <h5 class="sub-heading">
            Get in touch
        </h5>
        <div class="contact-container">
            <div class="contact-box">
                <div class="container-info">
                    <div class="contact-info">
                        <div class="contact-icon">
                            <a class='bx bxs-map'></a>
                        </div>
                        <span>Pampanga, Philippines 2020</span>
                    </div>
                    <div class="contact-info">
                        <div class="contact-icon">
                            <a class='bx bx-mobile'></a>
                        </div>
                        <span>(0905)-184-9250</span>
                    </div>
                    <div class="contact-info">
                        <div class="contact-icon">
                            <a class='bx bxs-envelope'></a>
                        </div>
                        <span>alonzojoenell2k15@gmail.com</span>
                    </div>
                </div>
            </div>
            <div class="contact-box">
                <form action="#">
                    <div class="input-box">
                        <div class="input">
                            <label for="name">Name</label>
                            <input type="text" id="name">
                        </div>
                    </div>
                    <div class="input-box">
                        <div class="input">
                            <label for="email">Email</label>
                            <input type="email" id="email">
                        </div>
                    </div>
                    <div class="input-box">
                        <div class="input">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject">
                        </div>
                    </div>
                    <div class="input-box">
                        <div class="input">
                            <label for="text-message">Message</label>
                            <textarea id="text-message"></textarea>
                        </div>
                    </div>
                    <button class="btn-sm">Send Message</button>
                </form>
            </div>


        </div>

    </section>
</template>

<script setup>

</script>

<style  scoped>
.contact {
    border: 1px solid red;
    /* background: var(--bg-light); */
}

.contact .contact-container {
    border: 1px solid red;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem;
    gap: 1.5rem;
}

.contact .contact-container .contact-box {
    border: 1px solid red;
    background: var(--card-bg);
    border: .1rem solid rgba(0, 0, 0, .2);
    border-radius: .6rem;
    /* max-width: 90rem; */
    padding: 1.5rem;
    /* margin: 0 auto; */
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
    padding: .5rem 0;
    font-size: 1.5rem;
    color: var(--text-light);
}

.contact .contact-container form .input-box .input input,
.contact .contact-container form .input-box .input textarea {
    background: #F2F2F2;
    border-radius: .5rem;
    padding: .5rem;
    font-size: 1.6rem;
    color: #13141F;
    text-transform: none;
    margin-bottom: 1rem;
    width: 100%;
    border: .1rem solid rgba(0, 0, 0, .2);
}

.contact .contact-container form .input-box .input input:focus,
.contact .contact-container form .input-box .input textarea:focus {
    border: .1rem solid var(--text-purple);
}

.contact .contact-container form .input-box .input textarea {
    height: 10rem;
    resize: none;
}


.contact .contact-container .contact-box .container-info {
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 5rem;
}

.contact .contact-container .contact-box .container-info .contact-info {
    border: 1px solid red;
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
    border-radius: .5rem;
    padding: .8rem 2rem;
    transition: all .2s ease-in-out;
}

.btn-sm:hover {
    background: #7d4ec9;
}

@media (max-width: 768px) {

    .contact .contact-container {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>