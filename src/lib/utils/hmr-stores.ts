// Customized HMR-safe stores
// Based off https://github.com/svitejs/svite/blob/ddec6b9/packages/playground/hmr/src/stores/hmr-stores.js
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store'

/**
 * @type { Record<string, import('svelte/store').Writable<any>> }
 */
let stores: {[index: string]: any} = {}

/**
 * @template T
 * @param { string } id
 * @param { T } initialValue
 * @returns { import('svelte/store').Writable<T> }
 */
export function getStore<T>(id: string, initialValue: T): Writable<T> {
  return stores[id] || (stores[id] = writable(initialValue));
}

// preserve the store across HMR updates
if (import.meta.hot) {
  if (import.meta.hot.data.stores) {
    stores = import.meta.hot.data.stores;
  }
  import.meta.hot.accept()
  import.meta.hot.dispose(() => {
    if (import.meta.hot) {
      import.meta.hot.data.stores = stores;
    }
  });
}
