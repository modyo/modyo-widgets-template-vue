<template>
  <div class="col-md-4 text-center">
    <img
      :src="image"
      :alt="title">
    <h3 class="h4 mt-3">
      {{ title }}
    </h3>
    <p
      class="text-muted mb-5"
      v-html="description">
    </p>
    <a
      class="btn btn-outline-primary"
      :href="link">Learn more</a>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-width: 100%;
}
p{
  height:300px;
  overflow:hidden;
}
</style>
