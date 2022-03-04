const name = document.getElementById("name");

function createRandomColor(){
    let randomColor=Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor.toUpperCase()}`
}

const changeColors = () => {
    document.documentElement.style.setProperty("--color", `${createRandomColor()}`);
}