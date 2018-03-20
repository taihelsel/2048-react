/*All mentions of "base" will refer to "this" in the react component*/
const random = (min,max) =>{
    return Math.floor(Math.random() * max) + min;
}
const addTile = (base) => {
    const max_len = base.state.tiles.length - 1;
    const min_len = 0
    let newTile = random (min_len,max_len);
    if(base.state.tiles[newTile].value > 0){
        /*Tile is taken*/
        addTile(base);
    }else{
        /*Free tile*/
        const newTiles = base.state.tiles;
        newTiles[newTile].value = 2;
        base.setState({
            tiles:newTiles
        });
        document.getElementsByClassName("tile")[newTile].textContent = 2;
    }
}
export default addTile