<template>
  <div
    id="app"
    class="slkdm"
  >
    <div class="pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-2" />
          <div class="col-md-8 text-center">
            <figure v-html="imagen" />
            <h1
              v-if="_i18n.asyncLoading"
              class="mb-3"
            >
              {{ $t('salutation', [siteName, basePath]) }}
              {{ $t('Path') }}
              {{ $t('Pathnew') }}
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-2" />
          <div class="col-md-8 text-center">
            <h2 class="mb-3">
              {{ $t('resume') }}
            </h2>
            <a
              class="btn btn-outline-primary"
              href="https://sites.google.com/modyo.com/services/nuestra-area/FED"
            >Our WIKI</a>
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
                v-bind="post"
              />
              <button
                type="button"
                class="btn btn-primary my-3"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                {{ $t('launch-demo-modal') }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div
        id="exampleModal"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5
                id="exampleModalLabel"
                class="modal-title"
              >
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="footer"
      class="py-5 mt-4"
      role="contentinfo"
    >
      <div class="container">
        <div class="mt-2 pt-2 border-top d-flex">
          <span>{{ siteName }} <span
            role="img"
            aria-label="copy Rights"
          >©</span>Modyo {{ year }}</span>
          <span class="ml-auto">Made with <font-awesome-icon
            :icon="['fas', 'heart']"
            color="red"
            class="mx-2"
          /> {{ $t('footer') }}</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { usePostsStore } from '@/stores/posts';
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
      siteName: liquidParser.parse('{{site.name | replace: "my", "your" | upcase }}'),
      basePath: liquidParser.parse('{{vars.base_path}}'),
      imagen: liquidParser.parse("{{ 'c94b0179-dba8-43de-ad57-8ce995b53a9e' | asset_image}}"),
    };
  },
  computed: {
    ...mapState(usePostsStore, ['posts']),
  },
  async created() {
    this.getPosts();
  },
  methods: {
    ...mapActions(usePostsStore, ['getPosts']),
  },
};
</script>
<style lang="scss">
  @import "scss/variables";
  @import "~bootstrap";
</style>

<style lang="scss" scoped>
@use "sass:color";

#app {
  ::v-deep {
    .jorge {
      position: block;
      width: 100;
      padding: 0;
      color: red;
    }
  }
}
</style>