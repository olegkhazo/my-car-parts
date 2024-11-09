<script setup></script>
<template>
  <div class="filter-by-make-wrapper">
    <div class="filter-inputs">
      <select id="car-year" name="car-year">
        <option value="Year">Select Year</option>
        <option>Year</option>
      </select>

      <select id="make" name="make">
        <option value="Select Make">Select Make</option>
        <option>Make</option>
      </select>

      <select id="model" name="model">
        <option value="Select Model">Select Model</option>
        <option>Model</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-by-make-wrapper {
  width: 100%;
  padding: 70px 0;
  background-image: url("https://www.thehogring.com/wp-content/uploads/2020/06/The-Hog-Ring-Car-Interiors-are-Becoming-More-Important-than-Exteriors.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }

  .filter-inputs {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    select {
      width: 30%;
      position: relative;
      z-index: 10;

      @media (max-width: 768px) {
        width: 75%;
        padding: 3px;
        margin-bottom: 5px;
        margin-top: 5px;
      }
    }
  }
}
</style>
