import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const loggedIn = computed(() => {
    if (process.client) {
      return !!localStorage.getItem("token");
    }
    return false;
  });

  const tokenExpiration = ref(null);

  // Initialize tokenExpiration from localStorage on store creation
  if (process.client) {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const decodedToken = JSON.parse(atob(storedToken.split(".")[1]));
      const expirationTime = decodedToken.exp * 1000;
      tokenExpiration.value = new Date(expirationTime);
    }
  }

  // Schedule clearing token after expiration
  watch(
    tokenExpiration,
    (newExpiration, oldExpiration) => {
      if (oldExpiration !== null) {
        const now = new Date();
        if (now >= newExpiration) {
          clearUserInfo();
        }
      }
    },
    { immediate: true }
  );

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

        // Parse token to get expiration time
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const expirationTime = decodedToken.exp * 1000;

        // Set token expiration date
        tokenExpiration.value = new Date(expirationTime);
      }
    } else if (error.value) {
      console.error(error.value);
    }
  }

  async function logout() {
    clearUserInfo();
  }

  function clearUserInfo() {
    // Logout successful. Remove token
    if (process.client) {
      localStorage.removeItem("token");
      tokenExpiration.value = null;
    }
  }

  return { login, loggedIn, logout };
});
