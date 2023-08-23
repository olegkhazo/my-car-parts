import { defineStore } from "pinia";
import { ref } from "vue";

export const useAllPartRequestsDataStore = defineStore("all-part-requests-data", () => {
   const originalSparePartRequestsData = ref([]);
   const filteredPartRequestsData = ref([])
    
    return { originalSparePartRequestsData, filteredPartRequestsData }; 
});