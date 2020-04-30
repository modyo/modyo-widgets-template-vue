<template>
  <div class="bg-white py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-2" />
        <div class="col-md-8 text-center">
          <div class="row">
            <div class="col-md-4 text-center">
              <img src="https://cloud.modyocdn.com/uploads/98fcf5ac-0fe4-4de7-9d22-a4b54cdd9f0c/original/hless.jpg">
              <h3 class="h4 mt-3">
                {{ titleOne }}
              </h3>
              <p class="text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <a
                class="btn btn-outline-primary"
                href="https://www.modyo.com">Learn more</a>
            </div>
            <div class="col-md-4 text-center">
              <img src="https://cloud.modyocdn.com/uploads/72b243da-62f8-477d-83f8-b7946fc5c439/original/code.jpg">
              <h3 class="h4 mt-3">
                {{ titleTwo }}
              </h3>
              <p class="text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <a
                class="btn btn-outline-primary"
                href="https://www.modyo.com">Learn more</a>
            </div>
            <div class="col-md-4 text-center">
              <img src="https://cloud.modyocdn.com/uploads/1b8b4919-8b5f-4589-9c66-cd2db87dd7d6/original/flujo.jpg">
              <h3 class="h4 mt-3">
                {{ titleThree }}
              </h3>
              <p class="text-muted mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <a
                class="btn btn-outline-primary"
                href="https://www.modyo.com">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  props: {
    titleOne: {
      type: String,
      required: true,
    },
    titleTwo: {
      type: String,
      required: true,
    },
    titleThree: {
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
</style>
