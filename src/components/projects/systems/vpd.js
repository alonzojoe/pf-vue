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
      {
        itemImageSrc: "vp/vp6.png",
        thumbnailImageSrc: "vp/vp6-thumb.png",
        alt: "Systematic registration of patients' disease medical record.",
        title: "Patient Disease Registration",
      },
      {
        itemImageSrc: "vp/vp5.png",
        thumbnailImageSrc: "vp/vp5-thumb.png",
        alt: "Custom skeleton loader component displayed while waiting for data from the backend API.",
        title: "Skeleton Loader"
      },
      {
        itemImageSrc: "vp/vp7.png",
        thumbnailImageSrc: "vp/vp7-thumb.png",
        alt: "Module for creating a linelist by selecting multiple patients, similar to an 'add to cart' functionality",
        title: "Linelist Creation"
      },
    {
      itemImageSrc: "vp/vp8.png",
      thumbnailImageSrc: "vp/vp8-thumb.png",
      alt: "Module used for creating new user data, assigning roles, and uploading photos and signatures.",
      title: "User Management"
    },
      {
      itemImageSrc: "vp/vp9.png",
      thumbnailImageSrc: "vp/vp9-thumb.png",
      alt: "User Management in dark mode.",
      title: "User Management - Dark Mode"
    }
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
