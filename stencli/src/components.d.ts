/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ClInput {
        "placeholder": string;
        "value": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface ClInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLClInputElement;
}
declare global {
    interface HTMLClInputElement extends Components.ClInput, HTMLStencilElement {
    }
    var HTMLClInputElement: {
        prototype: HTMLClInputElement;
        new (): HTMLClInputElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "cl-input": HTMLClInputElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ClInput {
        "onBlurEvent"?: (event: ClInputCustomEvent<void>) => void;
        "onChangeEvent"?: (event: ClInputCustomEvent<string>) => void;
        "onFocusEvent"?: (event: ClInputCustomEvent<void>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "cl-input": ClInput;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cl-input": LocalJSX.ClInput & JSXBase.HTMLAttributes<HTMLClInputElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
