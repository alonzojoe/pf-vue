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
        itemImageSrc: "vp/vp2.png",
        thumbnailImageSrc: "vp/vp2-thumb.png",
        alt: "The landing page of the system after login.",
        title: "Dashboard",
      },
      {
        itemImageSrc: "vp/vp3.png",
        thumbnailImageSrc: "vp/vp3-thumb.png",
        alt: "Theme Switching functionality, Light / Dark Mode.",
        title: "Theme Switch",
      },
      {
        itemImageSrc: "vp/vp4.png",
        thumbnailImageSrc: "vp/vp4-thumb.png",
        alt: "This module displays a list of currently registered patient profiles.",
        title: "Patient Profile List",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
