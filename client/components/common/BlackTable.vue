<script setup>
const props = defineProps({
  allUserSuggestions: Object,
  userSuggestionTableData: Array,
});

onMounted(() => {
  console.log(props.allUserSuggestions);
});
</script>

<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th v-for="item in props.userSuggestionTableData" :key="item" class="form-area-column">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="single-request-row" v-for="request in props.allUserSuggestions" id="tbody" :key="request._id">
          <td>{{ request.car_make }}</td>
          <td>{{ request.car_model }}</td>
          <td>{{ request.car_year }}</td>
          <td>{{ request.part_name }}</td>
          <td>${{ request.price }}</td>
          <td>
            <!-- Here add more convinient approach to view all part request details. Maybe modal window -->
            <NuxtLink :to="`/offer-page/${request.related_request_id}`">DETAILS</NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

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
</style>
