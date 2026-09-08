<template>
  <div>
    <button class="btn btn-secondary mb-3" @click="$router.back()">
      Back
    </button>

    <div v-if="product" class="card">
      <img
        :src="product.image"
        class="card-img-top"
        :alt="product.name"
      />

      <div class="card-body">
        <h3 class="card-title">{{ product.name }}</h3>

        <p class="card-text">
          Price: ${{ product.price }}
        </p>

        <p class="card-text">
          Product ID: {{ product.id }}
        </p>

        <button class="btn btn-success" @click="addToCart">
          Add to Cart
        </button>

        <p v-if="added" class="text-success mt-2">
          ✓ Added to cart!
        </p>
      </div>
    </div>

    <div v-else class="alert alert-danger">
      Product not found.
    </div>
  </div>
</template>

<script>
import { products } from '../products';

export default {
  data() {
    return {
      product: null,
      added: false
    };
  },

  mounted() {
    const id = Number(this.$route.params.id);

    this.product = products.find(product => product.id === id);
  },

  methods: {
    addToCart() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      cart.push(this.product);

      localStorage.setItem('cart', JSON.stringify(cart));

      this.added = true;
    }
  }
};
</script>