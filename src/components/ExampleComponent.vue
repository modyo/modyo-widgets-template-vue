<template>
  <div class="col-md-4 text-center">
    <img
      :src="image"
      :alt="imageAlt">
    <h3 class="h4 mt-3">
      {{ title }}
    </h3>
    <!-- eslint-disable vue/no-v-html-->
    <p
      class="text-muted"
      v-html="description" />
    <!-- eslint-enable -->
    <a
      class="btn btn-outline-primary"
      :href="linkFull">Learn more</a>
  </div>
</template>

<script>
import liquidParser from '../liquid/liquidParser';

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
      default: 'imagen',
    },
    slug: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    siteUrl: liquidParser.parse('{{site.url}}'),
    contentViewPath: 'contenido',
  }),
  computed: {
    linkFull() {
      return `${this.siteUrl}/${this.contentViewPath}/${this.slug}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  display: block;

  max-width: 100%;
  height: 300px;
}

h3 {
  height: 2em;
}

p {
  height: 300px;
  overflow: hidden;
}
</style>
