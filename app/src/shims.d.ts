// Shim for Vue composition API
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  export default component;
}

// Shims for dependencies which don't support TypeScript, so we use these to avoid `Could not find a declaration
// file for module 'moduleName'` errors
declare module '@heroicons/*';
declare module 'nightwind/helper';

// Shims for environment variables
interface ImportMeta {
  env: {
    VITE_BLOCKNATIVE_API_KEY: string;
    VITE_INFURA_API_KEY: string;
  };
}