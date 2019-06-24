<template>
    <div>
        <button @click="toogle" class="menu-btn">&#9776;</button>
        <transition 
            name="fade"
        >
            <div v-if="show" class="menu-content" >
              <div class="content-container">
                
                <a class="mmm">Home</a>
                <a class="mmm">Forum</a>
                <a class="mmm">Entertainment</a>
                
              </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: "burger",
  data() {
    return {
      show: false
    };
  },
  methods: {
    toogle() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.menu-btn {
  font-size: 28px;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
}
.menu-content {
  height: 40px;
  width: 100%;
  position: absolute;
  top: 54px;
  left: 0px;
  background-color: #8559da;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.mmm {
  padding-right: 30px;
}
</style>
