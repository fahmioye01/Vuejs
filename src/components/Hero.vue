<template>
    <div class="hero-container">
        <slider>
            <slider-item v-for="(item, index) in heroList" :key="index" >
              <div>
                <img :src="item.src"/>
                <div class="overlay">
                  <h1 class="headline-title">{{item.title}}</h1>
                  <p class="headline-desc">{{item.desc}}</p>
                </div>
              </div>
            </slider-item>
        </slider>
    </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "hero",
  components: {
    Slider,
    SliderItem
  },
  data() {
    return {
      heroList: [
        {
          src: require("@/assets/images/chaos7.jpg"),
          title: "Is This A Chaos",
          desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ut eum temporibus voluptatem officiis cumque harum amet incidunt similique? Rem harum alias error sapiente sed nemo quia perspiciatis, nam a."
        },
        {
          src: require("@/assets/images/chaos7.jpg"),
          title: "Is This A Chaos",
          desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ut eum temporibus voluptatem officiis cumque harum amet incidunt similique? Rem harum alias error sapiente sed nemo quia perspiciatis, nam a."
        },
        {
          src: require("@/assets/images/chaos7.jpg"),
          title: "Is This A Chaos",
          desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ut eum temporibus voluptatem officiis cumque harum amet incidunt similique? Rem harum alias error sapiente sed nemo quia perspiciatis, nam a."
        }
      ]
    };
  }
};
</script>

<style scoped>
.hero-container {
  padding-top: 50px;
  height: 450px;
  width: 100%;
  background-color: rgba(133, 89, 218, 0.3);
}
.slider {
  margin: auto;
  height: 300px !important;
  width: 60% !important;
  z-index: 1;
  margin-top: 30px;
}
.overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.headline-title {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin: 230px 0px 10px 40px;
  color: white;
}
.headline-desc {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin: 0px 0px 0px 40px;
  color: white;
}
</style>
