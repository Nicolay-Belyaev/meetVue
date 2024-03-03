<script>
export default {
  name: "footerComponent"
}
</script>

<template>
  <section class="footer">
    <div class="logo">
      <img class = "logo-img" src="../assets/logo.png" alt="logo">
      <span class = "logo-text">It is a long established fact that a reader will be distracted lookings.</span>
      <div class="logo-socials">
        <img src="../assets/twitter.png" alt="twitter">
        <img src="../assets/in.png" alt="in">
      </div>
    </div>
    <div class="links">
      <span class="link">Pages</span>
      <span class="link">Home</span>
      <span class="link">Project</span>
      <span class="link">Blog</span>
    </div>
    <div class="contacts">
      <span class="contact">Contacts</span>
      <span class="contact"> 55 East Birchwood Ave. Brooklyn, New York 11201</span>
      <span class="contact">contact@interno.com</span>
      <span class="contact">(123) 456 - 7890</span>
    </div>

  </section>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 100px auto 100px auto;
}
.logo {
    display: flex;
    flex-direction: column;
    gap: 30px;

    &-img {
      width: 176px;
      height: 50px;
    }

    &-text {
      width: 385px;
      color: rgb(77, 80, 83);
      font-family: Jost, serif;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      text-align: left;
    }

    &-socials {
      display: flex;
      gap: 54px;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }


.links {
  display: flex;
  flex-direction: column;
  width: 258px;
}
.link {
  color: rgb(77, 80, 83);
  font-family: Jost, serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 300%;
  text-align: left;
}

.contacts {
  display: flex;
  flex-direction: column;
  width: 258px;
}
.line {
    color: rgb(77, 80, 83);
    font-family: Jost, serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 300%;
    text-align: left;
  }
.contacts {
  display: flex;
  flex-direction: column;
  width: 258px;
}
.contact {
    color: rgb(77, 80, 83);
    font-family: Jost, serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 300%;
    text-align: left;
}
</style>
