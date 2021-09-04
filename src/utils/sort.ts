export const BubbleSort = (inputArray: number[]) => {
    return inputArray.sort((a,b ) => a -b);
}

export const BubbleSortByID = (inputArray: {id:number}[]) => {
    /** @todo Proper Type Definition */
    return inputArray.sort((a,b) => a.id - b.id)
}