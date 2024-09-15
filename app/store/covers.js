import { defineStore } from "pinia";
export const useCoversStore = defineStore("covers", {
  state: () => ({
    title: "Truck Cover Solutions",
    options: [
      {
        id: 1,
        subtitle: "Heavy-Duty Fabric",
        text: "Protects against weather and debris",
      },
      {
        id: 2,
        subtitle: "Secure Straps and Buckles",
        text: "Ensures a tight and secure fit",
      },
      {
        id: 3,
        subtitle: "Custom Fit",
        text: "Designed to perfectly match your truck's dimensions",
      },
      {
        id: 4,
        subtitle: "UV Resistance",
        text: "Protects against sun damage and fading",
      },
    ],
  }),
  getters: {},
  actions: {},
});
