<template>
  <div>
    <h1>Services</h1>

    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>

    <div class="row" v-if="services.length">
      <div class="col-md-4 mb-4" v-for="service in services" :key="service.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ service.name }}</h5>
           

          </div>
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
      services: [],
      loading: true,
      error: null
    };
  },
  mounted() {
    axios.get('http://localhost:5000/api/services')
      .then(res => {
        this.services = res.data;
      })
      .catch(err => {
        this.error = 'Failed to load services.';
        console.error(err);
      })
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>

<style scoped>

</style>

