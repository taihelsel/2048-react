/*React component scope is passed into addControls function using "base" as a parameter*/
/*All mentions of "base" will refer to "this" in the react component*/
const addControls = (base) =>{
    window.onkeyup = function(e) {
        e = e || window.event;
        switch (true) {
            case e.key === "ArrowUp":
                upKey(base);
                break;
            case e.key === "ArrowDown":
                downKey(base);
                break;
            case e.key === "ArrowLeft":
                leftKey(base);
                break;
            case e.key === "ArrowRight":
                rightKey(base);
                break;
        }
      }
}
const upKey = (base) => {
    console.log("up key",base.state.test);
}
const downKey = (base) => {
    console.log("down key",base.state.test);
}
const leftKey = (base) => {
    console.log("left key",base.state.test);
}
const rightKey = (base) => {
    console.log("right key",base.state.test);
}

export default addControls