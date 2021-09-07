import { LitElement, html, css } from "lit-element";
import "./child-component";
class ParentComponent extends LitElement {
  static get properties() {
    return {
      backgroundColor: { type: String },
    };
  }
  render() {
    return html` <div>
      <h1>Parent component</h1>
      <p>Jugando con colores</p>
      <child-component
        @changeBackgroundColor="${this.changeBackgroundColor}"
      ></child-component>
    </div>`;
  }

  constructor() {
    super();
    this.backgroundColor = "Green";
  }

  changeBackgroundColor(details) {
    this.backgroundColor = details.detail.color;
  }

  set backgroundColor(value) {
    this.style.setProperty("--background", value);
  }

  get backgroundColor() {
    this.style.getPropertyValue("--background");
  }
  static get styles() {
    return css`
      :host {
        background: var(--background);
        width: 100%;
      }
      div {
        display: flex;
        flex-direction: column;
        text-align: center;
      }
      p {
        color: white;
      }
    `;
  }
}
customElements.define("parent-component", ParentComponent);
