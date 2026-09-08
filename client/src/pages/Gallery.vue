<template>
  <div>
    <h1>Gallery</h1>

    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>

    <div class="row" v-if="gallery.length">
      <div class="col-md-4 mb-4" v-for="item in gallery" :key="item.id">
        <div class="card h-100">
          <img :src="item.image" class="card-img-top" :alt="'Gallery image ' + item.id" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      gallery: [],
      loading: true,
      error: null
    };
  },
  mounted() {
    axios.get('http://localhost:5000/api/gallery')
      .then(res => {
        this.gallery = res.data;
      })
      .catch(err => {
        this.error = 'Failed to load gallery.';
        console.error(err);
      })
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>

