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
      console.log("Stored Token Expiration Time:", new Date(expirationTime));
      tokenExpiration.value = new Date(expirationTime);
    }
  }

  // Schedule clearing token after expiration
  watch(
    tokenExpiration,
    (newExpiration, oldExpiration) => {
      console.log("Token Expiration Changed:", newExpiration, oldExpiration);
      if (oldExpiration !== null) {
        const now = new Date();
        console.log("Current Time:", now);
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
        console.log("Decoded Token:", decodedToken);
        const expirationTime = decodedToken.exp * 1000;
        console.log("New Token Expiration Time:", new Date(expirationTime));

        // Set token expiration date
        tokenExpiration.value = new Date(expirationTime);
      }
    } else if (error.value) {
      console.error(error.value);
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
      tokenExpiration.value = null;
    }
  }

  return { login, loggedIn, logout };
});
