import "../expot"

export class MineGrid extends HTMLElement {
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
        link.setAttribute("href", "/src/components/grid/grid.css")
        this.shadowRoot?.appendChild(link)

        const gridContainer = this.ownerDocument.createElement("section")
        this.shadowRoot?.appendChild(gridContainer)

        const title = this.ownerDocument.createElement("h1")
        title.innerHTML = "Buscaminas"
        gridContainer.appendChild(title)

        const squaresContainer = this.ownerDocument.createElement("div")
        gridContainer.appendChild(squaresContainer)

        for (let i = 0; i < 64; i++) {
            const square = this.ownerDocument.createElement("square-square")
            squaresContainer.appendChild(square)
        }
    }
}

customElements.define("mine-grid", MineGrid)