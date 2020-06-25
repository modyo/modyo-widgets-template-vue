import { shallowMount, createLocalVue } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from '../../src/App.vue';

const localVue = createLocalVue();
localVue.component('font-awesome-icon', FontAwesomeIcon);
describe('App.vue', () => {
  it('renders Basic info', () => {
    const wrapper = shallowMount(App, {
      localVue,
    });
    expect(wrapper.text()).toContain('Build better digital products to unify your customer experiences and accelerate growth.');
  });
});
