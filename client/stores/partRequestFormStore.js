import { defineStore } from "pinia";

export const usePartRequestFormStore = defineStore("part-request-form", () => {
    const dataFromFirstFormStep = shallowRef({});
    const dataFromSecondFormStep = shallowRef({});
    const dataFromThirdFormStep = shallowRef({});

    return { dataFromFirstFormStep, dataFromSecondFormStep, dataFromThirdFormStep }; 
  });