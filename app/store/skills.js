import { defineStore } from "pinia";
export const useSkillsStore = defineStore("skills", {
  state: () => ({
    title: "About Us: Expertise in Service, Repair, and Custom Manufacturing",
    skills: [
      {
        id: 1,
        subtitle: "Service Excellence",
        text:
          "Our team of experienced technicians provides prompt and reliable service, ensuring your tarpaulin is always in top condition.",
      },
      {
        id: 2,
        subtitle: "Expert Repairs",
        text:
          "We handle all types of repairs, from minor tears to extensive damage, using high-quality materials to restore your tarpaulin's strength and integrity.",
      },
      {
        id: 3,
        subtitle: "Custom Solutions",
        text:
          "Our skilled craftspeople can create custom tarpaulin solutions to meet your specific requirements, including size, shape, and design.",
      },
    ],
  }),
  getters: {},
  actions: {},
});
