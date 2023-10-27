import "../components/expot"
import { dispatch, state } from "../store"
import { uploadMines } from "../store/actions"
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
        let minesList = []
        if (state.mines === "") {
            minesList = randomCells(10, parseInt(selected))
            console.log(minesList)
            dispatch(
                uploadMines(JSON.stringify(minesList))
            )
        } else {
            minesList = JSON.parse(state.mines)
            console.log(minesList)
        }

        for (let i = 1; i < 65; i++) {
            const row: number = Math.ceil(i / 8)
            const column: number = ((i - 1) % 8) + 1

            const square = document.createElement("square-square")
            square.setAttribute("ident", `${i}`)
            square.setAttribute("column", `${column}`)
            square.setAttribute("row", `${row}`)

            minesList.forEach((mine: number) => {
                if (mine === i) {
                    square.setAttribute("mine", "true")
                }
            });

            squareList.push(square)
        }

        return squareList

    }


}