const moveTiles = (base,selector) =>{
    for(let i =0;i<base.state[selector];i++){
        console.log(document.getElementsByClassName(selector+"-"+i));
    }
}
export default moveTiles