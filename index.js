const name = document.getElementById("name");

function createRandomColor(){
    let max = 0xFFFFFF;
    let randomNumber = Math.random() * max;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6, 0);
    return `#${randomColor.toUpperCase()}`
}

const changeColors = () => {
    document.documentElement.style.setProperty("--color", `${createRandomColor()}`);
}