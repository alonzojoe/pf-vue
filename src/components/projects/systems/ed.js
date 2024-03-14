export const EdService = {
  getData() {
    return [
      {
        itemImageSrc: "ed/ed.png",
        thumbnailImageSrc: "ed/ed-thumb.png",
        alt: "The login page of the system",
        title: "Login Page",
      },
      {
        itemImageSrc: "ed/ed11.png",
        thumbnailImageSrc: "ed/ed11-thumb.png",
        alt: "Systematic registration of patients upon submission",
        title: "In-Patient Registration",
      },
      {
        itemImageSrc: "ed/ed1.png",
        thumbnailImageSrc: "ed/ed1-thumb.png",
        alt: "Main functionality is to return unused or incorrectly charged items before settling the bill of the patients.",
        title: "Patient Refund Items Application",
      },
      {
        itemImageSrc: "ed/ed9.png",
        thumbnailImageSrc: "ed/ed9-thumb.png",
        alt: "This module is used by Biller to apply discounts to patients, including Senior or PWD discounts, reducing their final bill by 20%.",
        title: "Discounts Application",
      },
      {
        itemImageSrc: "ed/ed2.png",
        thumbnailImageSrc: "ed/ed2-thumb.png",
        alt: "Used by the Social Worker to apply guarantors or sponsors to reduce patients' bills, with budgets allocated as set by accounting/finance.",
        title: "Guarantor Application",
      },
      {
        itemImageSrc: "ed/ed8.png",
        thumbnailImageSrc: "ed/ed8-thumb.png",
        alt: "This module is used by the biller to apply physician professional fees to patients. The amount depends on the case rate for the patient.",
        title: "Professional Fee Charging",
      },
      {
        itemImageSrc: "ed/ed4.png",
        thumbnailImageSrc: "ed/ed4-thumb.png",
        alt: "This module is where the cashier settles the final bill of patients upon payment. The cashier then issues a printable receipt based on BIR regulations.",
        title: "Cashier Module - Payment Details",
      },
      {
        itemImageSrc: "ed/ed6.png",
        thumbnailImageSrc: "ed/ed6-thumb.png",
        alt: "This is the billing statement that displays historical transactions made on a patient, including debits and credits, along with the patient's running balance.",
        title: "Cashier Module - Billing Statement",
      },
      {
        itemImageSrc: "ed/ed5.png",
        thumbnailImageSrc: "ed/ed5-thumb.png",
        alt: "The Payment History tab displays all payments made by the cashier to patients, including both cancelled and completed transactions. It also indicates the payment type, whether cash or cheque. Additionally, it provides the option to cancel payments or reprint receipts.",
        title: "Cashier Module - Payment History",
      },
      {
        itemImageSrc: "ed/ed7.png",
        thumbnailImageSrc: "ed/ed7-thumb.png",
        alt: "This functionality allows searching for the next patient transaction by presenting their charge slip or statement of account containing a unique QR code.",
        title: "Cashier Module - QR Code Search Functionality",
      },
    ];
  },

  getImages() {
    return Promise.resolve(this.getData());
  },
};
