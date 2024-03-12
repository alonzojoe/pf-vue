export const CdService = {
    getData() {
      return [
        {
          itemImageSrc:
            "cd/cd1.png",
          thumbnailImageSrc:
            "cd/cd1-thumb.png",
          alt: "The login page of the system",
          title: "Login Page",
        },
        {
          itemImageSrc:
            "cd/cd2.png",
          thumbnailImageSrc:
            "cd/cd2-thumb.png",
          alt: "The landing page of the system after login.",
          title: "Dashboard",
        },
        {
            itemImageSrc:
            "cd/cd3.png",
          thumbnailImageSrc:
            "cd/cd3-thumb.png",
            "alt": "This module contains the list of all patients filtered by consultation date and time.",
            "title": "Patient Master File"
        },
        {
           itemImageSrc:
            "cd/cd4.png",
          thumbnailImageSrc:
            "cd/cd4-thumb.png",
            "alt": "Presents the complete consultation history of a patient, enabling you to view both past and present consultations.",
            "title": "Patient Consultation History"
        },
        {
            itemImageSrc:
             "cd/cd6.png",
           thumbnailImageSrc:
             "cd/cd6-thumb.png",
             "alt": "Facilitates the systematic recording of patient data upon consultation.",
             "title": "Patient Chart Registration"
         },
         {
            itemImageSrc:
             "cd/cd5.png",
           thumbnailImageSrc:
             "cd/cd5-thumb.png",
             "alt": "Users must complete the chart section requirements before proceeding to saving.",
             "title": "Patient Chart Registration Validation"
         },
         {
            itemImageSrc:
             "cd/cd7.png",
           thumbnailImageSrc:
             "cd/cd7-thumb.png",
             "alt": "Vital Signs",
             "title": "Patient Chart Sections"
         },
    
         {
            itemImageSrc:
             "cd/cd9.png",
           thumbnailImageSrc:
             "cd/cd9-thumb.png",
             "alt": "Past History and Family History",
             "title": "Patient Chart Sections"
         },
         {
            itemImageSrc:
             "cd/cd10.png",
           thumbnailImageSrc:
             "cd/cd10-thumb.png",
             "alt": "Vaccination and SOAP (Subjective, Objective, Assessment and Plan)",
             "title": "Patient Chart Sections"
         },
         {
            itemImageSrc:
             "cd/cd11.png",
           thumbnailImageSrc:
             "cd/cd11-thumb.png",
             "alt": "Users can generate a PDF report by selecting a consultation date range",
             "title": "Report Generation"
         },
      ];
    },
  
    getImages() {
      return Promise.resolve(this.getData());
    },
  };
  