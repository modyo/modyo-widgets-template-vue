<template>
  <div id="app">
    <div class="pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-2" />
          <div class="col-md-8 text-center">
            <h1 class="mb-3">
              {{ siteName }}
              Build better digital products to unify your customer experiences and accelerate growth.
            </h1>
            <h2 class="h4 mb-4">
              Welcome to the Minimal theme.
              This is an HTML widget that you can modify in the Page Builder section.
              You can also modify the style in the Template Builder section.
            </h2>
            <a
              class="btn btn-primary btn-lg"
              href="https://www.modyo.com">Go to Modyo</a>
            <a
              class="btn btn-outline-primary ml-2 btn-lg"
              href="https://docs.modyo.com">Read the docs</a>
          </div>
        </div>
        <div class="mt-2">
          <img
            src="https://cloud.modyocdn.com/uploads/2addb891-7316-4cfb-882a-f0fd9745bf3a/original/homeMinimal.png"
            alt="modyo">
        </div>
      </div>
    </div>
    <div class="bg-light py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-2" />
          <div class="col-md-8 text-center">
            <h2 class="mb-3">
              Create and launch digital products faster
            </h2>
            <p class="text-muted mb-4">
              Welcome to the Minimal theme.
              This is an HTML widget that you can modify in the Page Builder section.
              You can also modify the style in the Template Builder section.
            </p>
            <div class="px-5 my-5">
              <img
                class="w-50"
                src="https://cloud.modyocdn.com/uploads/8ab8adac-898d-4c38-a878-8788a4b3df0f/original/diseno.png"
                alt="modyo">
            </div>
            <a
              class="btn btn-outline-primary"
              href="http://www.modyo.com">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-2" />
          <div class="col-md-8 text-center">
            <div class="row">
              <example-component
                v-for="post in posts"
                :key="post.id"
                v-bind="post" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="footer"
        class="py-5 mt-4"
        role="contentinfo">
        <div class="container">
          <div class="mt-2 pt-2 border-top d-flex">
            <span>{{ siteName }} &copy;{{ year }}</span>
            <span class="ml-auto">Made with <font-awesome-icon
              :icon="['fas', 'heart']"
              color="red"
              class="mx-2" /> in <a href="https://www.modyo.com">Modyo CLI</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ExampleComponent from './components/ExampleComponent.vue';
import liquidParser from './liquid/liquidParser';

export default {
  name: 'App',
  components: {
    ExampleComponent,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      siteName: liquidParser.parse('{{site.name | replace: "my", "your" | upcase}}'),
    };
  },
  computed: {
    ...mapState(['posts']),
  },
  created() {
    this.getPosts();
  },
  methods: {
    ...mapActions(['getPosts']),
  },
};
</script>

<style lang="scss">
img {
  max-width: 100%;
}
</style>
