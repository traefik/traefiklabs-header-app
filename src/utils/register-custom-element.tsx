import type { ComponentType } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyleSheetManager } from 'styled-components'

type BaseProps = { [key: string]: string | undefined }

type Args<P extends BaseProps> = {
  name: string
  component: ComponentType<P>
  attributes?: string[]
}

/**
 * Register a custom element that wraps a React component.
 *
 * @param name       - the name of the custom element
 * @param component  - the React component
 */
export default function registerCustomElement<P extends BaseProps>({
  name,
  component: Component,
}: Args<P>) {
  const webComponentClass = class extends HTMLElement {
    private readonly styleHost: HTMLElement
    private readonly mountPoint: HTMLElement

    constructor() {
      super()

      this.styleHost = document.createElement('head')
      this.mountPoint = document.createElement('div')
      this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
      if (this.isConnected) {
        const attrs = Object.assign({}, ...Array.from(this.attributes, ({ name, value }) => ({ [name]: value })))

        this.shadowRoot?.appendChild(this.styleHost)
        this.shadowRoot?.appendChild(this.mountPoint)

        const mount = ReactDOM.createRoot(this.mountPoint)
        mount.render(
          <StyleSheetManager target={this.styleHost}>
            <Component {...attrs} />
          </StyleSheetManager>,
        )
      }
    }

    disconnectedCallback() {
      if (!this.isConnected) {
        this.shadowRoot?.removeChild(this.mountPoint)
        this.shadowRoot?.removeChild(this.styleHost)
      }
    }
  }

  customElements.define(name, webComponentClass)
}
