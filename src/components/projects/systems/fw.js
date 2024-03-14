export const FwService = {
  getData() {
    return [
      {
        itemImageSrc: "fw/fw4.png",
        thumbnailImageSrc: "fw/fw4-thumb.png",
        alt: "A loading screen will appear upon launching the file watcher. It will check if both the orders and target directories are available on the PC, and it will also verify the availability of the API endpoint.",
        title: "Loading Screen",
      },
      {
        itemImageSrc: "fw/fw.png",
        thumbnailImageSrc: "fw/fw-thumb.png",
        alt: "The main home screen of the file watcher. Some functionalities you can perform in this module include starting the file watcher (which runs 24/7), theme switching, clearing the terminal, and configuring settings.",
        title: "Home Screen",
      },
      {
        itemImageSrc: "fw/fw2.png",
        thumbnailImageSrc: "fw/fw2-thumb.png",
        alt: "When started, it will begin watching the orders directory. Upon successful upload results and data updates via API calls, it will display a message in the terminal and a pop-up message.",
        title: "File Watcher when Started",
      },
      {
        itemImageSrc: "fw/fw3.png",
        thumbnailImageSrc: "fw/fw3-thumb.png",
        alt: "Light Mode Theme of the application",
        title: "Theme Switching",
      },
      {
        itemImageSrc: "fw/fw5.png",
        thumbnailImageSrc: "fw/fw5-thumb.png",
        alt: "Adjust settings for the orders and target directories, as well as the API endpoint.",
        title: "System Settings Configuration",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
