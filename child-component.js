import { LitElement, html, css } from "lit-element";

class ChildComponent extends LitElement {
  static get properties() {
    return {
      backgroundColor: { type: String },
      message: { type: String },
    };
  }
  render() {
    return html` <div>
      <h1>Child component</h1>
      <p>${this.message}</p>
      <input type="text" .value="${this.message}" @input="${this.onInput}" />
      <div class="buttonList">
        <button id="redBtn" class="red" @click="${this.onClick}">Red</button>
        <button id="blueBtn" class="blue" @click="${this.onClick}">Blue</button>
        <button id="greenBtn" class="green" @click="${this.onClick}">
          Green
        </button>
      </div>
    </div>`;
  }

  constructor() {
    super();
    this.backgroundColor = "LimeGreen";
    this.message = "Mensaje del componente padre";
  }
  onClick(e) {
    var color = "Green";
    if (e.target.id === "redBtn") {
      color = "Red";
    } else if (e.target.id === "blueBtn") {
      color = "Blue";
    } else if (e.target.id === "greenBtn") {
      color = "Green";
    }
    this.dispatchEvent(
      new CustomEvent("changeBackgroundColor", {
        detail: {
          el: this,
          color: color,
        },
      })
    );
  }
  onInput(e) {
    this.message = e.target.value;
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
        display: block;
        padding: 2rem;
        margin: 0.5rem;
      }
      h1 {
        text-transform: uppercase;
      }
      p {
        color: white;
      }
      input {
        width: 100%;
      }
      input {
        text-align: center;
      }
      .buttonList {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 0.5rem;
      }
      button {
        padding: 0.5rem 2rem;
        margin: 0.2rem;
        cursor: pointer;
        width: 10rem;
        color: white;
        border: 0;
        background: none;
        box-shadow: none;
        border-radius: 0px;
        font-weight: bold;
      }
      .red {
        background: red;
      }
      .blue {
        background: blue;
      }
      .green {
        background: green;
      }
    `;
  }
}
customElements.define("child-component", ChildComponent);
