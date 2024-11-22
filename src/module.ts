import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit';
import { name, version } from '../package.json';

export default defineNuxtModule({
  meta: {
    name,
    version
  },
  defaults: {},
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);

    await addComponent({
      name: 'TransitionExpand',
      filePath: resolver.resolve('./runtime/components/TransitionExpand.vue')
    });
  }
});
