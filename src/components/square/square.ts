const enum Square_SquareProperties {
    "mine" = "mine",
    "number" = "number",
    "opened" = "opened",
    "id" = "id"
}

export class Square_Square extends HTMLElement {
    properties: Record<Square_SquareProperties, string> = {
        mine: "",
        number: "",
        opened: "",
        id: ""
    }

    static get observedAttributes() {
        const properties: Record<Square_SquareProperties, null> = {
            mine: null,
            number: null,
            opened: null,
            id: null

        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: Square_SquareProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case Square_SquareProperties.mine:
                this.properties.mine = newValue
                break;
            case Square_SquareProperties.number:
                this.properties.number = newValue
                break;
            case Square_SquareProperties.opened:
                this.properties.opened = newValue
                break;
            case Square_SquareProperties.id:
                this.properties.id = newValue
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/square/square.css")
        this.shadowRoot?.appendChild(link)

        const square = this.ownerDocument.createElement("div")
        square.classList.add("square")
        this.shadowRoot?.appendChild(square)

    }
}

customElements.define("square-square", Square_Square)