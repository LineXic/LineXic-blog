/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
// Remove twikoo import error
declare module 'twikoo';
type NetlifyLocals = import('@astrojs/netlify').NetlifyLocals

declare namespace App {
  interface Locals extends NetlifyLocals {
    // ...
  }
}
