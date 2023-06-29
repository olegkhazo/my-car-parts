<template>
  <MainLayout>
    <div class="content-wrapper">
      <h3>Part request</h3>

      <FormKit type="group">
        <FormKit
          type="text"
          label="Street address"
          name="street"
          placeholder="Your street"
          validation="required"
        />
        <FormKit
          type="text"
          label="City"
          placeholder="Your city"
          name="city"
          validation="required"
        />
        <div class="double">
          <FormKit
            type="select"
            label="State"
            name="state"
            placeholder="Your state"
            validation="required"
          />
          <FormKit
            type="text"
            name="zip"
            label="Zip"
            placeholder="Your zip"
            validation="required|number"
          />
        </div>
      </FormKit>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout";
</script>

<style lang="sass" scoped>
@import "@/styles/pages/_part-request.scss"
</style>
