import { shallowMount, createLocalVue } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vuex from 'vuex';
import App from '../../src/App.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.component('FontAwesomeIcon', FontAwesomeIcon);

describe('App.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      getPosts: jest.fn(),
    };

    store = new Vuex.Store({
      actions,
    });
  });

  it('renders Basic info', () => {
    const wrapper = shallowMount(App, {
      store,
      localVue,
    });
    expect(wrapper.text()).toContain('Build better digital products to unify your customer experiences and accelerate growth.');
  });
});
