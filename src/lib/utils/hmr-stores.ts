/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// Customized HMR-safe stores
// Based off https://github.com/svitejs/svite/blob/ddec6b9/packages/playground/hmr/src/stores/hmr-stores.js
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

/**
 * @type { Record<string, import('svelte/store').Writable<any>> }
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let stores: { [index: string]: Writable<any> } = {};

/**
 * @template T
 * @param { string } id
 * @param { T } initialValue
 * @returns { import('svelte/store').Writable<T> }
 */
// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
export default function getStore(id: string, initialValue: any): Writable<any> {
  if (!stores[id]) {
    stores[id] = writable(initialValue);
  }
  return stores[id];
}

// preserve the store across HMR updates
if (import.meta.hot) {
  if (import.meta.hot.data.stores) {
    stores = import.meta.hot.data.stores;
  }
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    if (import.meta.hot) {
      import.meta.hot.data.stores = stores;
    }
  });
}
