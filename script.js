const message = () => {
    const myObj = {
        key1: [1, 2, 3, 4],
        key2: [5, 6, 7, 8],
        key3: [9, 10, 11, 12]
    };
    let toPrint = [];
    for (let index in myObj) {
        const random = Math.floor(Math.random() * myObj[index].length);
        toPrint.push(myObj[index][random])
    }
    console.log(toPrint)
}

message();