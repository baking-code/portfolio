<template>
  <div class="wrapper">
    <div class="title">
      <span>{{ company }}</span>
      <span class="subtitle">{{ role }} - {{ date }}</span>
    </div>
    <div class="cloud" v-show="toggleOn" v-on:click="onToggleCloud">
      <vue-word-cloud :words="words" color="#fffde7" rotation=0 font-family="Avenir">
    </vue-word-cloud>
    </div>
    <div class="description" v-show="!toggleOn" v-on:click="onToggleCloud">
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
  data() {
    return {
      toggleOn: true,
      words: [
        {
          text: "javascript",
          weight: 15
        },
        {
          text: "react",
          weight: 10
        },
        {
          text: "team lead",
          weight: 12
        },
        {
          text: "nodejs",
          weight: 8
        },
        {
          text: "webpack",
          weight: 4
        },
        {
          text: "git",
          weight: 10
        },
        {
          text: "backbone",
          weight: 6
        }
      ],
      company: "Ripjar",
      date: "2016 - present",
      role: "Senior Front-End Engineer",
      description: [
        "Front end developer on new and existing products",
        "Involved in full lifecycle of project",
        "Promotion of leading web technologies including React, webpack and ES6",
        "Liasing with UX designer whilst leading a small team of junior developers",
        "Upskilling others in version control techniques"
      ]
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
