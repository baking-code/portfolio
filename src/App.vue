<template>
  <div id="app">
    <header-bar />
    <div class="body">
      <intro />
      <div v-for="(item, key) in experience" :key="key">
        <experience-block
          :words="item.words"
          :company="item.company"
          :date="item.date"
          :role="item.role"
          :description="item.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import HeaderBar from "@/components/HeaderBar";
import ExperienceBlock from "@/components/ExperienceBlock";

import data from "@/assets/data";

export default {
  name: "app",
  components: {
    Intro,
    HeaderBar,
    ExperienceBlock
  },
  data() {
    return data;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(74, 2, 87, 0.8);
  margin: 0 auto;
  height: 842px;
  width: 595px;
  border: 1px solid #7b1fa2;
}

.body {
  display: flex;
  flex-direction: column;
}
</style>


// primary: #7b1fa2
// light: #ae52d4
// dark: #4a0072

// text on dark: #fffde7
