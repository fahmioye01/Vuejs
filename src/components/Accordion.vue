<template>
<div>
    <div class="card">
    <div class="card-wrap">
      <h2 class="card-title">Just Give Up</h2><!-- /.card-title -->
      <div class="card-content">
        <ul
          v-show-slide:500:ease-in="featuresOpen"
          class="features">
          <li style="list-style-type:none">Aliquam lorem</li>
          <li style="list-style-type:none">Praesent porttitor nulla vitae posuere</li>
          <li style="list-style-type:none">Suspendisse nisl elit rhoncus</li>
          <li style="list-style-type:none">Donec mi odio faucibus</li>
          <li style="list-style-type:none">Curabitur suscipit suscipit</li>
        </ul><!-- /.features -->
        <button
          @click="toggleFeatures"
          class="toggle-features">{{ featuresOpen ? 'Hide Features' : 'View Features' }}</button><!-- /.toggle-features -->
      </div><!-- /.card-content -->
    </div><!-- /.card-wrap -->
    <div class="card-wrap">
      <h2 class="card-title">Just Give Up</h2><!-- /.card-title -->
      <div class="card-content">
        <ul
          v-show-slide:500:ease-in="featuresOpen"
          class="features">
          <li style="list-style-type:none">Aliquam lorem</li>
          <li style="list-style-type:none">Praesent porttitor nulla vitae posuere</li>
          <li style="list-style-type:none">Suspendisse nisl elit rhoncus</li>
          <li style="list-style-type:none">Donec mi odio faucibus</li>
          <li style="list-style-type:none">Curabitur suscipit suscipit</li>
        </ul><!-- /.features -->
        <button
          @click="toggleFeatures"
          class="toggle-features">{{ featuresOpen ? 'Hide Features' : 'View Features' }}</button><!-- /.toggle-features -->
      </div><!-- /.card-content -->
    </div><!-- /.card-wrap -->
    <div class="card-wrap">
      <h2 class="card-title">Just Give Up</h2><!-- /.card-title -->
      <div class="card-content">
        <ul
          v-show-slide:500:ease-in="featuresOpen"
          class="features">
          <li style="list-style-type:none">Aliquam lorem</li>
          <li style="list-style-type:none">Praesent porttitor nulla vitae posuere</li>
          <li style="list-style-type:none">Suspendisse nisl elit rhoncus</li>
          <li style="list-style-type:none">Donec mi odio faucibus</li>
          <li style="list-style-type:none">Curabitur suscipit suscipit</li>
        </ul><!-- /.features -->
        <button
          @click="toggleFeatures"
          class="toggle-features">{{ featuresOpen ? 'Hide Features' : 'View Features' }}</button><!-- /.toggle-features -->
      </div><!-- /.card-content -->
    </div><!-- /.card-wrap -->
    <div class="card-wrap">
      <h2 class="card-title">Just Give Up</h2><!-- /.card-title -->
      <div class="card-content">
        <ul
          v-show-slide:500:ease-in="featuresOpen"
          class="features">
          <li style="list-style-type:none">Aliquam lorem</li>
          <li style="list-style-type:none">Praesent porttitor nulla vitae posuere</li>
          <li style="list-style-type:none">Suspendisse nisl elit rhoncus</li>
          <li style="list-style-type:none">Donec mi odio faucibus</li>
          <li style="list-style-type:none">Curabitur suscipit suscipit</li>
        </ul><!-- /.features -->
        <button
          @click="toggleFeatures"
          class="toggle-features">{{ featuresOpen ? 'Hide Features' : 'View Features' }}</button><!-- /.toggle-features -->
      </div><!-- /.card-content -->
    </div><!-- /.card-wrap -->
</div><!-- /.card -->

</div>
</template>

<script>
export default {
  name: "accordion",
  props: ["data"],
  data() {
    return {
      featuresOpen: false
    };
  },
  methods: {
    toggleFeatures() {
      this.featuresOpen = !this.featuresOpen;
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.card-header {
  display: flex;
  width: 100%;
  height: 65px;
  max-height: 55px;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 auto;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px;
}
.card-content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
}
.card-title {
  color: blue;
  font-size: 1.25rem;
  font-weight: 200;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
}
.card-text {
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-family: Tahoma, Geneva, sans-serif;
}

button {
  background-color: white;
  border: 1px solid;
  border-radius: 1rem;
  color: blue;
  padding: 0.5rem;
  width: 50%;
  text-transform: lowercase;
  font-family: "Comic Sans MS", cursive, sans-serif;
  margin-left: 70px;
}
</style>
