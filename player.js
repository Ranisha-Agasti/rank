class Player{
    constructor(){
        this.index = 0;
        this.name = 0;
        this.distance = 0
        this.rank = 0
    }
    getCount(){
    database.ref('playercount').on("value",function(data){
        playerCount = data.val()
    })
}
updateCount(x){database.ref('/').update({
    playercount:x 
})}
getRank(){
    database.ref('Rank').on("value",function(data){
this.rank=data.val()
    })
}
updateRank(x){database.ref('/').update({
    Rank:x
})}
update(){
    var playerInfo = 'players/player'+ this.index
    database.ref(playerInfo).update({
        name: this.name,
        distance:this.distance
    })
}
getPlayers(){database.ref('players').on("value",(data)=>{
    allplayers = data.val()}
)}

}