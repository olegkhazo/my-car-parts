import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const userId = ref(null);
  const tokenExpiration = ref(null);
  const currentUserData = ref(null);
  const isAuthenticated = ref(false); // Новая переменная для хранения состояния авторизации

  // Инициализация токена и userId из localStorage при загрузке стора
  if (process.client) {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const decodedToken = JSON.parse(atob(storedToken.split(".")[1]));
      const expirationTime = decodedToken.exp * 1000;
      tokenExpiration.value = new Date(expirationTime);
      userId.value = decodedToken.userId || null;
      isAuthenticated.value = !!storedToken; // Устанавливаем флаг авторизации
    }
  }

  // Проверка истечения срока действия токена
  watch(
    tokenExpiration,
    (newExpiration) => {
      if (newExpiration) {
        const now = new Date();
        if (now >= newExpiration) {
          clearUserInfo(); // Удаляем данные пользователя, если токен истек
        }
      }
    },
    { immediate: true }
  );

  // Функция для авторизации
  async function login(creds) {
    try {
      const { data: authorisedUser, error } = await useFetch(API_URL + "login", {
        method: "post",
        body: JSON.stringify(creds),
      });

      if (error.value) {
        console.error("Login error:", error.value);
        throw new Error("Authentication failed");
      }

      if (authorisedUser.value) {
        const token = authorisedUser.value.token;

        // Если на клиенте, сохраняем токен и декодируем его
        if (process.client) {
          localStorage.setItem("token", token);

          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          const expirationTime = decodedToken.exp * 1000;
          tokenExpiration.value = new Date(expirationTime);

          // Извлекаем и сохраняем userId из токена
          userId.value = decodedToken.userId;

          isAuthenticated.value = true; // Обновляем статус авторизации

          if (!userId.value) {
            console.error("userId is not present in the token");
          }
        }

        return { success: true };
      }
    } catch (err) {
      console.error("Error during login:", err);
      return { success: false, error: err.message };
    }
  }

  watch(userId, (newUserId) => {
    if (newUserId) {
      getUserData(newUserId);
    }
  });

  async function getUserData(userId) {
    try {
      const { data: userData, error } = await useFetch(API_URL + "user/" + userId, {
        method: "get",
      });

      console.log(userData);
      currentUserData.value = userData.value;
    } catch (error) {
      console.error(error);
    }
  }

  // Функция для выхода из системы
  async function logout() {
    clearUserInfo();
    isAuthenticated.value = false; // Сбрасываем статус авторизации
  }

  // Очистка данных пользователя
  function clearUserInfo() {
    if (process.client) {
      localStorage.removeItem("token");
      tokenExpiration.value = null;
      userId.value = null;
      isAuthenticated.value = false; // Сбрасываем статус авторизации
    }
  }

  return {
    login,
    logout,
    isAuthenticated, // Используем новую реактивную переменную
    userId,
    currentUserData,
  };
});
