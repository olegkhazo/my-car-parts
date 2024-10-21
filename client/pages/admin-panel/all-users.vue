<script setup>
definePageMeta({
  layout: "admin-panel",
});

import { useAuthStore } from "@/stores";
const authManager = useAuthStore();
const { userInfo } = storeToRefs(authManager);

import { allUsersTableHeaderContent, infoTabColors } from "@/utils/collections";
import ColorfulInfoTab from "~/components/UI/ColorfulInfoTab.vue";

const dataGeted = ref(false);
const isLoading = ref(true);

//fetching all requests
const { data: allUsers, error } = await useFetch(`${API_URL}users/`);

onMounted(() => {
  if (userInfo.value.role !== "admin") {
    navigateTo("my-requests");
  }

  if (allUsers.value) {
    dataGeted.value = true;
  } else if (error.value) {
    // should to think how better to show errors
    console.error("something wrong:" + error.value);
  }

  isLoading.value = false;
});

async function deleteUser(id) {
  const { data: deletedUser, error } = await useFetch(`${API_URL}delete-user/${id}`, {
    method: "DELETE",
  });

  if (!error.value) {
    allUsers.value = allUsers.value.filter((user) => user._id !== id);
  } else {
    console.log("Error deleting user:", error.value);
  }
}

// Функция для получения данных для компонента ColorfulInfoTab
function getColorfulInfoTabData(condition, trueText = "Yes", falseText = "No") {
  return {
    text: condition ? trueText : falseText,
    bgColor: condition ? infoTabColors.trueBgInfoTab : infoTabColors.falseBgInfoTab,
    textColor: condition ? infoTabColors.trueInfoTab : infoTabColors.falseInfoTab,
  };
}
</script>

<template>
  <div class="all-users-wrapper">
    <h1>All Users</h1>

    <div v-if="isLoading" class="loading-state">
      <p>Loading suggestions...</p>
    </div>

    <div v-else-if="dataGeted && !isLoading" class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th v-for="item in allUsersTableHeaderContent" :key="item" class="form-area-column">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="single-request-row" v-for="user in allUsers" id="tbody" :key="user._id">
            <td>{{ user.first_name }} {{ user.last_name }}</td>
            <td>{{ user.company }}</td>
            <td class="limited-view-column">{{ user.email }}</td>
            <td>{{ user.role }}</td>

            <td>
              <ColorfulInfoTab
                :text="getColorfulInfoTabData(user.tips_agreement).text"
                :bg-color="getColorfulInfoTabData(user.tips_agreement).bgColor"
                :text-color="getColorfulInfoTabData(user.tips_agreement).textColor"
              />
            </td>
            <td>
              <ColorfulInfoTab
                :text="getColorfulInfoTabData(user.terms_agreement).text"
                :bg-color="getColorfulInfoTabData(user.terms_agreement).bgColor"
                :text-color="getColorfulInfoTabData(user.terms_agreement).textColor"
              />
            </td>
            <td>
              <ColorfulInfoTab
                :text="getColorfulInfoTabData(user.isActive, 'Active', 'No').text"
                :bg-color="getColorfulInfoTabData(user.isActive, 'Active', 'No').bgColor"
                :text-color="getColorfulInfoTabData(user.isActive, 'Active', 'No').textColor"
              />
            </td>

            <td><span class="sm-red-btn" @click="deleteUser(user._id)">delete</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="no-db-entries-block">
      <p>It seems you haven't any requests yet</p>
      <NuxtLink to="/part-request" class="yellow-btn">Find parts</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.all-users-wrapper {
  padding: 0 10px;
  margin: 0 auto 40px auto;
  width: 100%;

  @media (max-width: 834px) {
    margin: 20px auto 150px auto;
  }

  h1 {
    font-size: 30px;
    font-weight: 500;

    @media (max-width: 834px) {
      font-size: 25px;
    }

    @media (max-width: 382px) {
      font-size: 22px;
    }
  }

  .no-db-entries-block {
    text-align: center;
    margin-top: 20vh;

    p {
      font-weight: 300;
      font-size: 22px;
    }
  }

  .table-wrapper {
    width: 100%;
    padding-top: 11px;

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      background-color: $gray-850;

      tr:first-child th:first-child {
        border-top-left-radius: 5px;
      }

      tr:first-child th:last-child {
        border-top-right-radius: 5px;
      }

      th {
        color: white;
        padding: 10px;
        background-color: $gray-850;
        text-align: left;
      }
    }

    tbody {
      tr {
        td {
          padding: 10px 5px;
          border-bottom: 1px solid $gray-300;

          &.limited-view-column {
            max-width: 100px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .sm-red-btn {
            padding: 2px 4px;
          }

          a {
            color: $blue-100;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
