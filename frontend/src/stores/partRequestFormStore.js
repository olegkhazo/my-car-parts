import { defineStore } from "pinia";
import { shallowRef } from "vue";

export const usePartRequestFormStore = defineStore("part-request-form", () => {
    const dataFromFirstFormStep = shallowRef({});
    const dataFromSecondFormStep = shallowRef({});
    const dataFromThirdFormStep = shallowRef({});

    return { dataFromFirstFormStep, dataFromSecondFormStep, dataFromThirdFormStep }; 
  });