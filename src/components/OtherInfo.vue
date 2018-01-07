<template>
  <div class="wrapper">
    <div class="title">
      <span>Other information</span>
    </div>
    <div class="other">
      <ul>
        <li><a href="mailto:benjamin.allan.king@gmail.com">benjamin.allan.king@gmail.com</a></li>
        <li><a href="https://www.linkedin.com/in/benjamin-king-938b63b1/">LinkedIn Profile</a></li>
        <li>Master of Mathematics, University of Exeter</li>
        <li>Java 7 Certified Professional</li>
        <li>Java Best Practices and Design Patterns (Learning Tree 2013)</li>
        <li>C++ for Java Developers (Verhoef 2014)</li>
        <li>Java EE for web apps (Verhoef 2016)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherInfo"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  border: 1px solid #7b1fa2;
  padding: 10px 0;
  height: 330px;
  width: 475px;
  overflow: hidden;
  border-radius: 2px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #7b1fa2;
  min-height: 60px;
  font-size: large;
}

.other {
  text-align: left;
  padding: 0 10px;
  font-size: 18px;
}

a:link,
a:visited {
  color: rgba(74, 2, 87, 0.8);
}

a:hover {
  color: #ae52d4;
}
</style>

