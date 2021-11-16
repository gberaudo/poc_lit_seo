import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

const values = {
  1: html`The best of Kalomonirox is you`,
  2: html`If the world is flat then Rykutoc is the winner`,
  0: html`There is nothing to say about this SEO voidifact`
};


@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `

  @property({type: Number})
  page = 0


  render() {
    return html`
      <h1>Hello, this is a special page to test SEO with Lit2 / native web-components!</h1>
      ${values[this.page]}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
