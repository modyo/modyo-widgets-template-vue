<template>
  <div id="app">
    <div class="pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-2" />
          <div class="col-md-8 text-center">
            <h1 class="mb-3">
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
            src="./assets/homeMinimal.png"
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
                src="./assets/diseno.png"
                alt="modyo">
            </div>
            <a
              class="btn btn-outline-primary"
              href="http://www.modyo.com">Learn more</a>
          </div>
        </div>
      </div>
    </div>

    <examplecomponent
      title-one="Lorem ipsum dolor"
      title-two="Adipiscing elit"
      title-three="Sed do eiusmod" />

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
</template>

<script>
import Examplecomponent from './components/ExampleComponent.vue';

export default {
  name: 'App',
  components: {
    Examplecomponent,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      siteName: 'My Site',
    };
  },
};
</script>

<style lang="scss">
img {
  max-width: 100%;
}
</style>
