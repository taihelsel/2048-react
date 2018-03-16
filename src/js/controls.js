const addControls = () =>{
    window.onkeyup = function(e) {
        e = e || window.event;
        switch (true) {
            case e.key === "ArrowUp":
                upKey();
                break;
            case e.key === "ArrowDown":
                downKey();
                break;
            case e.key === "ArrowLeft":
                leftKey();
                break;
            case e.key === "ArrowRight":
                rightKey();
                break;
        }
      }
}
const upKey = () => {
    console.log("up key");
}
const downKey = () => {
    console.log("down key");
}
const leftKey = () => {
    console.log("left key");
}
const rightKey = () => {
    console.log("right key");
}

export default addControls