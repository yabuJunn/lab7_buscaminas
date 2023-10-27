console.log("Funciona Typescript")
import "./components/expot"


export class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/index.css")
        this.shadowRoot?.appendChild(link)

        const game = this.ownerDocument.createElement("mine-grid")
        this.shadowRoot?.appendChild(game)
    }
}

customElements.define("app-container", AppContainer)
