<template>
  <div id="app">
    <navbar />
    <div>
      <hero />
      <div class="top-section">
        <h3 class="section-title">Top Topic</h3>
        <div class="categories" > 
          <!-- looping for thumbnail component -->
          <div v-for="(item, index) in categoriesList" :key="index">
            <thumbnail :imgSrc="item.src" :title="item.title" :count="item.count"/>
          </div>
          <browse-button/>
        </div>
      </div>
      <div class="bottom-section">
        <h3 class="section-title">Goosebump</h3>
        <Accordion/>
      </div>
    </div>
    <div class="footer">
      <!-- change to footer component soon -->
    </div>
  </div>
</template>

<script>
import { Navbar, Hero, Thumbnail, Accordion } from "@/components";

export default {
  name: "app",
  components: {
    Navbar,
    Hero,
    Thumbnail,
    Accordion
  },
  data() {
    return {
      categoriesList: [
        {
          src: require("@/assets/images/chaos1.jpg"),
          title: "Is This A Chaos?",
          count: "10"
        },
        {
          src: require("@/assets/images/chaos2.jpg"),
          title: "The Beauty Of Chaos",
          count: "1"
        },
        {
          src: require("@/assets/images/chaos3.jpg"),
          title: "We Need  You",
          count: "6"
        },
        {
          src: require("@/assets/images/chaos4.jpg"),
          title: "Find The Limit",
          count: "5"
        },
        {
          src: require("@/assets/images/chaos5.png"),
          title: "STOP",
          count: "7"
        },
        {
          src: require("@/assets/images/chaos2.jpg"),
          title: "The Beauty Of Chaos",
          count: "1"
        },
        {
          src: require("@/assets/images/chaos2.jpg"),
          title: "The Beauty Of Chaos",
          count: "1"
        },
        {
          src: require("@/assets/images/chaos3.jpg"),
          title: "We Need  You",
          count: "6"
        },
        {
          src: require("@/assets/images/chaos3.jpg"),
          title: "We Need  You",
          count: "6"
        }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
@import url("https://fonts.googleapis.com/css?family=Lato:400,700");

#app {
  background-color: rgba(133, 89, 218, 0.3);
}

::-webkit-scrollbar {
  width: 10px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #56e39f;
}

.top-section {
  width: 100%;
  border-bottom: 0.75px solid lightgray;
}

.bottom-section {
  width: 100%;
}

.categories {
  height: 500px;
  width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px 18px;
  box-sizing: border-box;
  margin: 0px auto 30px auto;
}

.section-title {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #292f36;
}

.footer {
  height: 250px;
  width: 100%;
  background-color: #512da8;
  border-top: 4px solid #8559da;
}
</style>
