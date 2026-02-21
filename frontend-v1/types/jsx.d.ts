/// <reference types="react" />
/// <reference types="react-dom" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface ElementChildrenAttribute {
      children: {};
    }
  }
}

export {};