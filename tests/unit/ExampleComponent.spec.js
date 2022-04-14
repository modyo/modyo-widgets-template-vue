import { shallowMount } from '@vue/test-utils';
import ExampleComponent from '../../src/components/ExampleComponent.vue';

describe('ExampleComponent', () => {
  test('runs as expected', () => {
    const title = 'Titulo';
    const description = 'descripción';
    const image = 'imagen';
    const imageAlt = 'alternative image text';
    const slug = 'slug';
    const wrapper = shallowMount(ExampleComponent, {
      propsData: {
        title,
        description,
        image,
        imageAlt,
        slug,
      },
    });
    expect(wrapper.find('img').attributes().src).toBe(image);
    expect(wrapper.find('img').attributes().alt).toBe(imageAlt);
    expect(wrapper.find('h3').text()).toBe(title);
    expect(wrapper.find('p').text()).toBe(description);
    expect(wrapper.find('.btn').attributes().href).toBe(`${wrapper.vm.siteUrl}/${wrapper.vm.contentViewPath}/${slug}`);
  });

  test('imageAlt has a default \'imagen\' value', () => {
    const title = 'Titulo';
    const description = 'descripción';
    const slug = 'slug';
    const image = 'imagen';

    const wrapper = shallowMount(ExampleComponent, {
      propsData: {
        title,
        description,
        image,
        slug,
      },
    });
    expect(wrapper.find('img').attributes().alt).toBe('imagen');
  });
});
