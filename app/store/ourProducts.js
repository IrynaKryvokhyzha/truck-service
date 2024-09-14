import { defineStore } from "pinia";
export const useOurProductsStore = defineStore("ourProducts", {
  state: () => ({
    title: "Our PVC Tarpaulin Products",
    products: [
      {
        id: 1,
        subtitle: "Heavy-Duty Truck Covers",
        text:
          "Designed to withstand harsh weather conditions and protect your cargo during transport.",
      },
      {
        id: 2,
        subtitle: "Industrial Tarpaulins",
        text:
          "Robust and durable tarpaulins for construction, industrial, and agricultural applications.",
      },
      {
        id: 3,
        subtitle: "Custom-Made Solutions",
        text:
          "We create personalized tarpaulin solutions to meet your unique needs and specifications.",
      },
      {
        id: 4,
        subtitle: "High-Quality Materials",
        text:
          "We use only the finest PVC materials to ensure superior strength, durability, and longevity.",
      },
      {
        id: 5,
        subtitle: "Custom-Made Solutions",
        text:
          "We create personalized tarpaulin solutions to meet your unique needs and specifications.",
      },
      {
        id: 6,
        subtitle: "High-Quality Materials",
        text:
          "We use only the finest PVC materials to ensure superior strength, durability, and longevity.",
      },
    ],
  }),
  getters: {},
  actions: {},
});
