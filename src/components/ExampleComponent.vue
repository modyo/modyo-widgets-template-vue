<template>
  <div class="col-md-4 text-center">
    <img
      :src="image"
      :alt="title">
    <h3 class="h4 mt-3">
      {{ title }}
    </h3>
    <p
      class="text-muted"
      v-html="description" />
    <a
      class="btn btn-outline-primary"
      :href="linkFull">Learn more</a>
  </div>
</template>

<script>
import { accountUrl, sitePath } from '../repositories/settings/modyo';


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
    link: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    urlBase: accountUrl,
    path: sitePath,
  }),
  computed: {
    linkFull() {
      return `${this.urlBase}/${this.sitePath}/${this.link}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  max-width: 100%;
  height:300px;
  display: block;
}
h3{
  height: 2em;
}
p {
  height: 300px;
  overflow: hidden;
}
</style>
