import { render, unmountComponentAtNode } from 'react-dom'
import ReactDOM from 'react-dom/client'
import App from 'App'

class HeaderApp extends HTMLElement {
  static observedAttributes = ['value']

  connectedCallback() {
    // this._innerHTML = this.innerHTML
    this.mount()
  }

  disconnectedCallback() {
    this.unmount()
  }

  attributeChangedCallback() {
    this.unmount()
    this.mount()
  }

  mount() {
    // const mountPoint = document.createElement('span');
    // this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    // const root = ReactDOM.createRoot(mountPoint);

    // root.render(<App />)
    render(<App />, this)
  }

  unmount() {
    unmountComponentAtNode(this)
  }
}

customElements.define('header-app', HeaderApp)
