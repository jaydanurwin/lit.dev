import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('word-viewer')
class WordViewer extends LitElement {
  @property() words: string = 'initial value';

  render() {
    return html`<pre>${this.words}</pre>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "word-viewer": WordViewer
  }
}
