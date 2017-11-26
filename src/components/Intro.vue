<template>
  <div class="introduction">
    <p class="text">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "intro",
  data() {
    return {
      msg:
        "I am a software developer with five years' professional experience based in the Cheltenham area. My current passions lie in web development and javascript - the challenge involved in the presentation and consumption of potentially complex data is something that I enjoy. Outside of tech, I am an active person and enjoy football, bouldering and cycling."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.introduction {
  padding: 10px;
}

.text {
  word-wrap: normal;
  font-weight: 400;
}
</style>
