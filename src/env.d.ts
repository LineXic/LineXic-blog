/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
// Remove twikoo import error
declare module 'twikoo';

// Twikoo 通过 CDN 加载后暴露的全局对象
interface Window {
  twikoo: {
    init: (config: Record<string, unknown>) => void;
  };
}

declare const twikoo: Window['twikoo'];
