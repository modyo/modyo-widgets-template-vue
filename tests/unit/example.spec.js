import { shallowMount } from '@vue/test-utils';
import App from '../../src/App.vue';

describe('App.vue', () => {
  it('renders Basic info', () => {
    const wrapper = shallowMount(App, {
    });
    expect(wrapper.text()).toContain('Build better digital products to unify your customer experiences and accelerate growth.');
  });
});
