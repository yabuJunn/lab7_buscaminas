import { dispatch } from "../../store";
import { addOpened, changeSelected } from "../../store/actions";

const enum Square_SquareProperties {
    "mine" = "mine",
    "number" = "number",
    "opened" = "opened",
    "ident" = "ident"
}

export class Square_Square extends HTMLElement {
    properties: Record<Square_SquareProperties, string> = {
        mine: "",
        number: "",
        opened: "",
        ident: ""
    }

    static get observedAttributes() {
        const properties: Record<Square_SquareProperties, null> = {
            mine: null,
            number: null,
            opened: null,
            ident: null

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
            case Square_SquareProperties.ident:
                this.properties.ident = newValue
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

        if (this.properties.mine === "true") {
            square.classList.add("mine")
        }
        if (this.properties.opened === "true") {
            square.classList.add("opened")
        }

        square.addEventListener("click", () => {
            dispatch(
                changeSelected(this.properties.ident)
            )
            dispatch(
                addOpened(this.properties.ident)
            )
        })
    }
}

customElements.define("square-square", Square_Square)