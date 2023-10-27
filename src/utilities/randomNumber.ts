const randomIntFromInterval = (min: number, max: number) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomCells = (minesCount: number) => {
    const minesList = []
    for (let i = 0; i < minesCount; i++) {
        minesList.push(randomIntFromInterval(1, 64))
    }
    return minesList
}