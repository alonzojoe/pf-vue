export const PdService = {
    getData() {
      return [
        {
          itemImageSrc:
            "pd/pd1.jpeg",
          thumbnailImageSrc:
            "pd/pd1-thumb.jpeg",
          alt: "The login page of the system",
          title: "Login Page",
        },
        {
          itemImageSrc:
            "pd/pd2.jpeg",
          thumbnailImageSrc:
            "pd/pd2-thumb.jpeg",
          alt: "The landing page of the system after login.",
          title: "Dashboard",
        },
        {
            itemImageSrc:
            "pd/pd3.jpeg",
          thumbnailImageSrc:
            "pd/pd3-thumb.jpeg",
            "alt": "This is the main module of the system for creating target deliverables and submitting them monthly.",
            "title": "Operations Review"
        },
        {
           itemImageSrc:
            "pd/pd4.png",
          thumbnailImageSrc:
            "pd/pd4-thumb.png",
            "alt": "This module displays the monitoring of accomplishments for processes, divided into core and support processes. It follows a color scheme with red indicating not started/stopped, yellow for ongoing, and green for accomplished.",
            "title": "Graphs Representation"
        },
      ];
    },
  
    getImages() {
      return Promise.resolve(this.getData());
    },
  };
  