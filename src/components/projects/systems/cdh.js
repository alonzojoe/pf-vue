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
            "alt": "This module displays the monitoring of accomplishments for processes, divided into core and support processes. It follows a color scheme with red indicating not started/stopped, yellow for ongoing, and green for accomplished.",
            "title": "Patient Consultation History"
        },
      ];
    },
  
    getImages() {
      return Promise.resolve(this.getData());
    },
  };
  