<script setup>
definePageMeta({
  layout: "admin-panel",
});

import { useAuthStore } from "@/stores";
const authManager = useAuthStore();
const { userInfo } = storeToRefs(authManager);

import { allUsersTableHeaderContent, infoTabColors } from "@/utils/collections";
import ColorfulInfoTab from "~/components/UI/ColorfulInfoTab.vue";

//fetching all requests
const { data: allUsers, error } = await useFetch(`${API_URL}users/`);

onMounted(() => {
  if (userInfo.value.role !== "admin") {
    navigateTo("my-requests");
  }
});
</script>

<template>
  <div class="all-users-wrapper">
    <h1>All Users</h1>
    <div class="table-wrapper">
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
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.company }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <ColorfulInfoTab
                v-if="user.tips_agreement"
                text="Yes"
                :bg-color="infoTabColors.trueBgInfoTab"
                :text-color="infoTabColors.trueInfoTab"
              />
              <ColorfulInfoTab
                v-else
                text="No"
                :bg-color="infoTabColors.falseBgInfoTab"
                :text-color="infoTabColors.falseInfoTab"
              />
            </td>
            <td>
              <ColorfulInfoTab
                v-if="user.terms_agreement"
                text="Yes"
                :bg-color="infoTabColors.trueBgInfoTab"
                :text-color="infoTabColors.trueInfoTab"
              />
              <ColorfulInfoTab
                v-else
                text="No"
                :bg-color="infoTabColors.falseBgInfoTab"
                :text-color="infoTabColors.falseInfoTab"
              />
            </td>
            <td>
              <ColorfulInfoTab
                v-if="user.isActive"
                text="Active"
                :bg-color="infoTabColors.trueBgInfoTab"
                :text-color="infoTabColors.trueInfoTab"
              />
              <ColorfulInfoTab
                v-else
                text="No"
                :bg-color="infoTabColors.falseBgInfoTab"
                :text-color="infoTabColors.falseInfoTab"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.all-users-wrapper {
  padding: 0 10px;
  margin: 0 auto 40px auto;

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
          padding: 10px;
          border-bottom: 1px solid $gray-300;

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
