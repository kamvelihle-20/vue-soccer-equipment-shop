<template>
  <div>
    <h1>Products</h1>

    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>

    <div class="row" v-if="products.length">
      <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <img :src="product.image" class="card-img-top" :alt="product.name" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">$ {{ product.price }}</p>
            <router-link class="btn btn-primary" :to="`/products/${product.id}`">
              View Details
            </router-link>
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
      products: [],
      loading: true,
      error: null
    };
  },
  mounted() {
    axios.get('http://localhost:5000/api/products')
      .then(res => {
        this.products = res.data;
      })
      .catch(err => {
        this.error = 'Failed to load products.';
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

