<template>
  <div class="cloud">
    <vue-word-cloud :words="words" color="#fffde7" rotation=0 font-family="Avenir">
    </vue-word-cloud>
  </div>
</template>

<script>
import WordCloud from "vuewordcloud";

export default {
  name: "word-cloud-wrapper",
  components: {
    WordCloud
  },
  data() {
    return {
      toggleOn: true,
      words: [{
        text: "javascript",
        weight: 15
      }, {
        text: "react",
        weight: 10
      }, {
        text: "team lead",
        weight: 12
      }, {
        text: "nodejs",
        weight: 8
      }, {
        text: "webpack",
        weight: 4
      }, {
        text: "git",
        weight: 10
      }, {
        text: "backbone",
        weight: 6
      }],
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
  mounted() {
    console.log("WORD CLOUD UPDATE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cloud {
  height: 150px;
  padding: 20px 0;
  cursor: pointer;
}
</style>
