// Customized HMR-safe stores
// Based off https://github.com/svitejs/svite/blob/ddec6b9/packages/playground/hmr/src/stores/hmr-stores.js
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

/**
 * @type { Record<string, import('svelte/store').Writable<any>> }
 */
let stores: { [index: string]: Writable<any> } = {};

/**
 * @template T
 * @param { string } id
 * @param { T } initialValue
 * @returns { import('svelte/store').Writable<T> }
 */
export default function getStore(id: string, initialValue: any): Writable<any> {
  if (!stores[id]) {
    stores[id] = writable(initialValue);
  }
  return stores[id];
}

const meta = import.meta as any;
// preserve the store across HMR updates
if (meta.hot) {
  if (meta.hot.data.stores) {
    stores = meta.hot.data.stores;
  }
  meta.hot.accept();
  meta.hot.dispose(() => {
    if (meta.hot) {
      meta.hot.data.stores = stores;
    }
  });
}
