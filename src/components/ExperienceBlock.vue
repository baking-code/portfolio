<template>
  <div class="wrapper">
    <div class="title">
      <span>{{ company }}</span>
      <span class="subtitle">{{ role }} - {{ date }}</span>
    </div>
    <div class="cloud" v-if="toggleOn" v-on:click="onToggleCloud">
      <vue-word-cloud :words="words" color="#fffde7" rotation=0 font-family="Avenir">
    </vue-word-cloud>
    </div>
    <div class="description" v-if="!toggleOn" v-on:click="onToggleCloud">
      <ul>
        <li v-for="(item, key) in description" :key="key">
          {{ item }}
        </li>
      </ul>
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
      type: String,
      required: true
    }
  },
  data() {
    return {
      toggleOn: true
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
  padding: 10px;
  height: 250px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #fffde7;
  height: 60px;
  font-size: large;
}

.subtitle {
  font-size: medium;
}

.cloud {
  height: 150px;
  padding: 20px 0;
  cursor: pointer;
}

.description {
  text-align: left;
  padding: 20px 0;
  cursor: pointer;
}
</style>
