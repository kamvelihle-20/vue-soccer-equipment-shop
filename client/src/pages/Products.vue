<template>
  <div>
    <h1>Products</h1>

    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card h-100">
          <img
            :src="product.image"
            class="card-img-top"
            :alt="product.name"
          />

          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>

            <p class="card-text">
              ${{ product.price }}
            </p>

            <router-link
              class="btn btn-primary"
              :to="`/products/${product.id}`"
            >
              View Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from '../products';

export default {
  data() {
    return {
      products
    };
  }
};
</script>