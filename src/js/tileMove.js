const moveTiles = (base,selector) =>{
    let tileValues = [];
    for(let i =0;i<base.state[selector];i++){
        let x = document.getElementsByClassName(selector+"-"+i);
        tileValues.push(combineTiles(x));
    }
    updateGrid(tileValues);
}
const combineTiles = (x) =>{
    let activeTiles = [];
    let lastTile = null;
    for(let i = 0;i<x.length;i++){
        if(x[i].textContent > 0 && x[i].textContent.length > 0){
            if(x[i].textContent == activeTiles[lastTile]){
                activeTiles[lastTile] = activeTiles[lastTile] * 2;
                activeTiles.unshift(0);
                lastTile+=2;
            }else{
                activeTiles.push(parseInt(x[i].textContent));
                lastTile = i;
            }
        }else{
            activeTiles.unshift(0);
        }
    }
    return activeTiles;
}
const updateGrid = (newTiles) =>{
    console.log(newTiles);
}
export default moveTiles