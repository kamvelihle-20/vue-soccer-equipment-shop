<template>
  <div>
    <h1>Gallery</h1>

    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="item in gallery"
        :key="item.id"
      >
        <div class="card h-100">
          <img
            :src="item.image"
            class="card-img-top"
            :alt="'Gallery image ' + item.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        { id: 1, image: '/vue-soccer-equipment-shop/images/ball.jpg' },
        { id: 2, image: '/vue-soccer-equipment-shop/images/football2.jpg' },
        { id: 3, image: '/vue-soccer-equipment-shop/images/football3.jpg' },
        { id: 4, image: '/vue-soccer-equipment-shop/images/football4.jpg' },
        { id: 5, image: '/vue-soccer-equipment-shop/images/football5.jpg' },
        { id: 6, image: '/vue-soccer-equipment-shop/images/football6.jpg' },
        { id: 7, image: '/vue-soccer-equipment-shop/images/football7.jpg' },
        { id: 8, image: '/vue-soccer-equipment-shop/images/football8.jpg' },
        { id: 9, image: '/vue-soccer-equipment-shop/images/football9.jpg' }
      ]
    };
  }
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>

