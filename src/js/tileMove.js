import addTile from "./addTile.js";
const moveTiles = (base,selector) =>{
    let tileValues = [];
    for(let i =0;i<base.state[selector];i++){
        let x = document.getElementsByClassName(selector+"-"+i);
        tileValues.push(combineTiles(x));
    }
    updateGrid(base,tileValues,selector);
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
            lastTile++;
        }
    }
    return activeTiles;
}
const updateGrid = (base,newTiles,selector) =>{
    let offset = 0;
    newTiles.forEach((newTile,newIndex)=>{
        base.state.tiles.forEach((stateTile,stateIndex)=>{
            if(stateTile[selector] === newIndex){
                if(offset >= 4){
                    offset = 0;
                }
                const _tile_ = base.state.tiles;
                _tile_[stateIndex].value = newTile[offset];
                base.setState({
                    tiles:_tile_
                })
                offset ++;
            }
        });
    });
    addTile(base);
}
export default moveTiles