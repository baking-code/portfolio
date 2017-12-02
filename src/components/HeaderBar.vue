<template>
  <div class="header">
    <span class="text">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "header-bar",
  data() {
    return {
      name: "Benjamin King"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  background-color: #7b1fa2;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  font-size: 36px;
  color: white;
  font-weight: 500;
  border-radius: 2px;
}

.text {
  word-wrap: normal;
}
</style>
