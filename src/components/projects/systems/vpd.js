export const VpService = {
  getData() {
    return [
      {
        itemImageSrc: "vp/vp1.png",
        thumbnailImageSrc: "vp/vp1-thumb.png",
        alt: "The login page of the system",
        title: "Login Page",
      },
      {
        itemImageSrc: "vp/pd2.png",
        thumbnailImageSrc: "vp/pd2-thumb.png",
        alt: "The landing page of the system after login.",
        title: "Dashboard",
      },
      {
        itemImageSrc: "vp/pd3.png",
        thumbnailImageSrc: "vp/pd3-thumb.png",
        alt: "This is the main module of the system for creating target deliverables and submitting them monthly.",
        title: "Operations Review",
      },
      {
        itemImageSrc: "vp/pd4.png",
        thumbnailImageSrc: "vp/pd4-thumb.png",
        alt: "This module displays the monitoring of accomplishments for processes, divided into core and support processes. It follows a color scheme with red indicating not started/stopped, yellow for ongoing, and green for accomplished.",
        title: "Graphs Representation",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
