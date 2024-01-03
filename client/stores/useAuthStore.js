import { defineStore } from "pinia";
import { API_URL } from "@/utils/constants";

export const useAuthStore = defineStore("auth", () => {
  async function login(creds) {
    const { data: authorisedUser, error } = await useFetch(API_URL + "login", {
      method: "post",
      body: JSON.stringify(creds),
    });

    if (authorisedUser.value) { 
      const token = authorisedUser.value.token;

      // Add token to localStorage
      localStorage.setItem("token", token);

      navigateTo("/");
    } else if (error.value) {
      console.log(error.value);
      // should to think how better to show errors
      console.log("something really wrong:" + error.value);
    }
  }

  async function logout() {
    try {
     
    } catch (error) {
     
    }

    clearUserInfo();
  }

  function clearUserInfo() {
    // Logout successful. Remove token
    localStorage.removeItem("token");
  }
  return { login, logout };
  });