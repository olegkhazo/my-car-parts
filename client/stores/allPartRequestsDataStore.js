import { defineStore } from "pinia";

export const useAllPartRequestsDataStore = defineStore("all-part-requests-data", () => {
   const originalSparePartRequestsData = ref([]);
   const filteredPartRequestsData = ref([])
    
    return { originalSparePartRequestsData, filteredPartRequestsData }; 
});