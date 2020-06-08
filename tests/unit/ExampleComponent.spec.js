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
    expect(wrapper.find('.btn').attributes().href).toBe(`${wrapper.vm.urlBase}/${wrapper.vm.sitePath}/${slug}`);
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
    expect(wrapper.find('img').attributes().src).toBe(image);
    expect(wrapper.find('img').attributes().alt).toBe('imagen');
    expect(wrapper.find('h3').text()).toBe(title);
    expect(wrapper.find('p').text()).toBe(description);
    expect(wrapper.find('.btn').attributes().href).toBe(`${wrapper.vm.urlBase}/${wrapper.vm.sitePath}/${slug}`);
  });
  test('title is required', () => {
    const spy = jest.spyOn(global.console, 'error');
    const description = 'descripción';
    const image = 'imagen';
    const imageAlt = 'alternative image text';
    const slug = 'slug';

    shallowMount(ExampleComponent, {
      propsData: {
        description,
        image,
        imageAlt,
        slug,
      },
    });
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(
      expect.stringMatching(/^\[Vue warn\]: Missing required prop: "title/),
    );
    spy.mockReset();
  });
  test('description is required', () => {
    const spy = jest.spyOn(global.console, 'error');
    const title = 'Titulo';
    const image = 'imagen';
    const imageAlt = 'alternative image text';
    const slug = 'slug';

    shallowMount(ExampleComponent, {
      propsData: {
        title,
        image,
        imageAlt,
        slug,
      },
    });
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(
      expect.stringMatching(/^\[Vue warn\]: Missing required prop: "description/),
    );
    spy.mockReset();
  });
  test('image is required', () => {
    const spy = jest.spyOn(global.console, 'error');
    const title = 'Titulo';
    const description = 'descripción';
    const imageAlt = 'alternative image text';
    const slug = 'slug';

    shallowMount(ExampleComponent, {
      propsData: {
        title,
        description,
        imageAlt,
        slug,
      },
    });
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(
      expect.stringMatching(/^\[Vue warn\]: Missing required prop: "image/),
    );
    spy.mockReset();
  });

  test('slug is required', () => {
    const spy = jest.spyOn(global.console, 'error');

    const title = 'Titulo';
    const description = 'descripción';
    const image = 'imagen';
    const imageAlt = 'alternative image text';

    shallowMount(ExampleComponent, {
      propsData: {
        title,
        description,
        image,
        imageAlt,
      },
    });
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(
      expect.stringMatching(/^\[Vue warn\]: Missing required prop: "slug/),
    );
    spy.mockReset();
  });
});
