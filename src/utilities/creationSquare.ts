import "../components/expot"
import { state } from "../store"
import { randomCells } from "./randomNumber"

export const creationSquare = (selected: string) => {
    const squareList = []

    if (state.started === false) {
        console.log("No ha comenzado")

        for (let i = 1; i < 65; i++) {
            const row: number = Math.ceil(i / 8)
            const column: number = ((i - 1) % 8) + 1

            const square = document.createElement("square-square")
            square.setAttribute("ident", `${i}`)
            square.setAttribute("column", `${column}`)
            square.setAttribute("row", `${row}`)
            squareList.push(square)
        }

        return squareList
    } else {
        console.log("Ya comenzo")
        const minesList = randomCells(10)
        console.log(minesList)

        for (let i = 1; i < 65; i++) {
            const row: number = Math.ceil(i / 8)
            const column: number = ((i - 1) % 8) + 1

            const square = document.createElement("square-square")
            square.setAttribute("ident", `${i}`)
            square.setAttribute("column", `${column}`)
            square.setAttribute("row", `${row}`)

            minesList.forEach(mine => {
                if (mine === i) {
                    square.setAttribute("mine", "true")
                }
            });

            squareList.push(square)
        }

        return squareList

    }


}