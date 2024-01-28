<template>
    <section class="projects" id="projects">
        <h2 class="heading">Projects</h2>

        <div class="projects-container">
            <div class="project-card">
                <div class="project-title">
                    <div class="image-section">
                        <img src="./assets/images/projects/e1.png" alt="" />
                    </div>
                    <div class="text-section">
                        <div class="title">
                            <h2>Edify</h2>
                            <button class="btn-sm">Preview</button>
                        </div>
                        <p>
                            A Hospital Information System (HIS) that manages various aspects
                            of healthcare administration, from patient registration to
                            billing and payment processing at cashier's desk, as well as
                            inventory and logistics management.
                        </p>
                    </div>
                </div>
                <div class="project-info">
                    <h3>
                        I was a developer in a team working on this project. The assigned
                        modules were as follows:
                    </h3>
                    <p>
                        <i class='bx bxs-circle'></i> In-Patient Module (Registry and
                        Concierge / In-Patient List)
                    </p>
                    <p><i class='bx bxs-circle'></i> PHIC Compliance Module</p>
                    <p>
                        <i class='bx bxs-circle'></i> Guarantor Application Module
                    </p>
                    <p><i class='bx bxs-circle'></i> Professional Fee Module</p>
                    <p><i class='bx bxs-circle'></i> Refund Items Module</p>
                    <p><i class='bx bxs-circle'></i> Discount Module</p>
                    <p>
                        <i class='bx bxs-circle'></i> Patient Account Merging Module
                    </p>
                    <p>
                        <i class='bx bxs-circle'></i> Cashier Module (Payment
                        Processing and Receipt Printing)
                    </p>
                    <p>
                        <i class='bx bxs-circle'></i> Laboratory Modules (File Watcher
                        and Microbiology Results)
                    </p>
                </div>
            </div>
            <div class="project-card">
                <div class="project-title">
                    <div class="image-section">
                        <img src="./assets/images/projects/pd1.JPEG" alt="" />
                    </div>
                    <div class="text-section">
                        <div class="title">
                            <h2>PDMS</h2>
                            <button class="btn-sm">Preview</button>
                        </div>
                        <p>
                            It is a Performance Governance Digital Monitoring System that monthly tracks the submitted
                            deliverables, and at the end of the year, it verifies whether the deliverables have been
                            accomplished.
                        </p>
                    </div>
                </div>
                <div class="project-info">
                    <h3>
                        I was assigned as the lead developer for this project. The
                        assigned modules were as follows:
                    </h3>
                    <p><i class='bx bxs-circle'></i> User Management</p>
                    <p><i class='bx bxs-circle'></i> Operations Review</p>
                    <p>
                        <i class='bx bxs-circle'></i> Department Requests (Addition /
                        Deletion)
                    </p>
                    <p><i class='bx bxs-circle'></i> Graphs & Charts</p>
                    <p><i class='bx bxs-circle'></i> Dashboard Notifications</p>
                    <p><i class='bx bxs-circle'></i> SMS Notifications</p>
                    <p>
                        <i class='bx bxs-circle'></i> Monitoring of Monthly Reports of
                        Deliverables
                    </p>
                </div>
            </div>
            <div class="project-card">
                <div class="project-title">
                    <div class="image-section">
                        <img src="./assets/images/projects/pd1.JPEG" alt="" />
                    </div>
                    <div class="text-section">
                        <div class="title">
                            <h2>PIMS</h2>
                            <button class="btn-sm">Preview</button>
                        </div>
                        <p>
                            The Procurement Information Monitoring System is used to manage
                            the annual procurement plans of each department, while also
                            keeping track of purchased items and inventory.
                        </p>
                    </div>
                </div>
                <div class="project-info">
                    <h3>
                        I was a developer in a team working on this project. The assigned
                        modules were as follows:
                    </h3>
                    <p><i class='bx bxs-circle'></i> Inventory Module</p>
                    <p>
                        <i class='bx bxs-circle'></i> Tagging of Items to Personnel
                        (including acceptance functionality)
                    </p>
                    <p>
                        <i class='bx bxs-circle'></i> Printable Forms such as
                        Accountability Forms
                    </p>
                    <p>
                        <i class='bx bxs-circle'></i> Transferring of Items (Personnel
                        to Personnel)
                    </p>
                    <p>
                        <i class='bx bxs-circle'></i> Masterfile of all items tagged
                        to Personnel
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.projects {
    border: 1px solid red;
    background: var(--bg-light);
}

.projects .projects-container {
    border: 1px solid red;
    padding: 3rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
}

.projects .projects-container .project-card {
    border-radius: .6rem;
    border: .1rem solid rgba(0, 0, 0, .2);
    background: var(--card-bg);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
}

.projects .projects-container .project-card .project-title .image-section {
    /* background: var(--text-purple); */
    border-radius: .6rem .6rem 0 0;
}

.projects .projects-container .project-card .project-title .image-section img {
    width: 100%;
    border-radius: .6rem .6rem 0 0;
    border-bottom: .1rem solid rgba(0, 0, 0, .1);
}


.projects .projects-container .project-card .project-title .text-section {
    padding: 0 1rem;
}

.projects .projects-container .project-card .project-title .text-section .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.projects .projects-container .project-card .project-title .text-section .title h2 {
    font-size: 2.5rem;
    letter-spacing: .1rem;
    color: var(--text-light);
    margin: 1rem 0;
}

.projects .projects-container .project-card .project-title .text-section p {
    font-size: 1.5rem;
    line-height: 1.3;
    color: var(--text-light);
}


.projects .projects-container .project-card .project-info {
    /* border: 1px solid red; */
    padding: 1rem 1rem;
}

.projects .projects-container .project-card .project-info h3 {
    color: var(--text-light);
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 500;
    margin-bottom: .6rem;
}

.projects .projects-container .project-card .project-info p {
    font-size: 1.4rem;
    line-height: 1.2;
    color: var(--text-light);
}

.projects .projects-container .project-card .project-info p .bxs-circle {
    font-size: 1rem;
}

@media (max-width: 991px) {

    .projects .projects-container {
        grid-template-columns: repeat(1, 1fr);
        transition: .3s;
    }

}
</style>