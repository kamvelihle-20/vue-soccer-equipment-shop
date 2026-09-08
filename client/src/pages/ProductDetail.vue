<template>
  <div>
    <button class="btn btn-secondary mb-3" @click="$router.back()">Back</button>

    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <div v-if="product" class="card">
      <img src="https://via.placeholder.com/600x400" class="card-img-top" :alt="product.name" />
      <div class="card-body">
        <h3 class="card-title">{{ product.name }}</h3>
        <p class="card-text">Price: ${{ product.price }}</p>
        <p class="card-text">ID: {{ product.id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: null,
      loading: true,
      error: null
    };
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => { this.product = res.data; })
      .catch(err => {
        this.error = 'Failed to load product.';
        console.error(err);
      })
      .finally(() => { this.loading = false; });
  }
};
</script>
