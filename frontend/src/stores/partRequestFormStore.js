import { defineStore } from "pinia";
import { shallowRef } from "vue";

export const usePartRequestFormStore = defineStore("part-request-form", () => {
    const partRequestFormData = shallowRef({});


    return { partRequestFormData };
  });