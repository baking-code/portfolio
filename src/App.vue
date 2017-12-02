<template>
  <div id="app">
    <header-bar />
    <div class="body">
      <intro />
      <div class="grid">
        <div v-for="(item, key) in data.experience" :key="key" class="grid-item experience" >
          <experience-block
            :words="item.words"
            :company="item.company"
            :date="item.date"
            :role="item.role"
            :description="item.description"
          />
        </div>
       <div class="grid-item">
        <other-info />
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro";
import HeaderBar from "@/components/HeaderBar";
import ExperienceBlock from "@/components/ExperienceBlock";
import OtherInfo from "@/components/OtherInfo";

import data from "@/assets/data";

export default {
  name: "app",
  components: {
    Intro,
    HeaderBar,
    ExperienceBlock,
    OtherInfo
  },
  data() {
    return { data, delayFinished: false };
  },
  mounted() {
    setTimeout(() => {
      document
        .querySelectorAll(".grid-item")
        .forEach(e => e.classList.add("fade-in"));
    }, 100);
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(74, 2, 87, 0.8);
  margin: 0 auto;
  height: 842px;
  width: 990px;
  font-size: 18px;
}

.body {
  display: flex;
  flex-direction: column;
}

.grid {
  display: flex;
  flex-wrap: wrap;
}

.grid-item {
  margin: 10px;
  opacity: 0;
  width: 475px;
  border-radius: 2px;
}

.fade-in {
  opacity: 1;
  animation: fadeIn 200ms;
  animation-fill-mode: backwards;
}

.fade-in:nth-child(3) {
  animation-delay: 100ms;
}

.fade-in:nth-child(4) {
  animation-delay: 200ms;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
    transform-origin: top;
  }
}
</style>


// primary: #7b1fa2
// light: #ae52d4
// dark: #4a0072

// text on dark: #fffde7
