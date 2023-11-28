const generateRandomMessage = () => {

let part1 = ['He', 'She', 'It']
let part2 = ['is', 'was', 'will be']
let part3 = ['good', 'bad', 'normal']

return `${part1[Math.floor(Math.random() * 3)]} ${part2[Math.floor(Math.random() * 3)]} ${part3[Math.floor(Math.random() * 3)]}`

}

console.log(generateRandomMessage());