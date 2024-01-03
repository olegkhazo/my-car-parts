import { defineStore } from "pinia";
import { API_URL } from "@/utils/constants";

export const useAuthStore = defineStore("auth", () => {
  const loggedIn = computed(() => {
    if (process.client) {
      return !!localStorage.getItem("token");
    }
    return false;
  });

  async function login(creds) {
    const { data: authorisedUser, error } = await useFetch(API_URL + "login", {
      method: "post",
      body: JSON.stringify(creds),
    });

    if (authorisedUser.value) {
      const token = authorisedUser.value.token;

      // Add token to localStorage
      if (process.client) {
        localStorage.setItem("token", token);
      }

    } else if (error.value) {
      console.error(error.value);
      // Consider better ways to handle and display errors
      console.log("Something went wrong: " + error.value);
    }
  }

  async function logout() {
    clearUserInfo();
  }

  function clearUserInfo() {
    // Logout successful. Remove token
    if (process.client) {
      localStorage.removeItem("token");
    }
  }

  return { login, loggedIn, logout };
});
