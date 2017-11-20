<template>
  <div class="wrapper">
    <div class="title">
      <span>{{ company }}</span>
      <span class="subtitle">{{ role }} - {{ date }}</span>
    </div>
    <div class="container" :class="{ slide: toggleOn }" v-on:click="onToggleCloud">
      <div class="cloud">
        <vue-word-cloud :words="words" color="#fffde7" rotation=0 font-family="Avenir">
        </vue-word-cloud>
      </div>
      <div class="description">
        <ul>
          <li v-for="(item, key) in description" :key="key">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import WordCloud from "vuewordcloud";

export default {
  name: "experience-block",
  components: {
    WordCloud
  },
  props: {
    words: {
      type: Array,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    description: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      toggleOn: false
    };
  },
  methods: {
    onToggleCloud: function() {
      this.toggleOn = !this.toggleOn;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  background: #7b1fa2;
  color: #fffde7;
  padding: 10px 0;
  max-height: 300px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #fffde7;
  min-height: 60px;
  font-size: large;
}

.subtitle {
  font-size: 17px;
}

.cloud {
  height: 150px;
  padding: 45px 0;
  cursor: pointer;
  width: 575px;
}

.description {
  text-align: left;
  padding: 20px 0;
  cursor: pointer;
  width: 575px;
}

.container {
  display: flex;
  width: 1150px;
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  overflow: hidden;
}

.slide {
  transform: translateX(-50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
