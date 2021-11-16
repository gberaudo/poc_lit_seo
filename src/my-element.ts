import { html, css, LitElement, PropertyValues } from 'lit'
import { customElement, property } from 'lit/decorators.js'

const values = [
  'There is nothing to say about this SEO voidifact',
  'The best of Kalomonirox is you',
  'If the world is flat then Rykutoc is the winner',
];


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

  firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    const meta = document.createElement('meta');
    const name = document.createAttribute('name')
    meta.setAttributeNode(name);
    name.value = 'description';
    const content = document.createAttribute('content');
    meta.setAttributeNode(content);
    content.value = `A demo of SEO for lit with page ${this.page}`;
    document.head.appendChild(meta);
    document.title = `Demo for ${values[this.page]}`;
  }


  render() {
    const extra = values[this.page] || '';
    return html`
      <h1>Hello, this is a special page to test SEO with Lit2 / native web-components!</h1>
      ${html`<div>${extra}</div>`}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
