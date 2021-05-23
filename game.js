class Game{
getState(){
    database.ref('gamestate').on("value",function(data){
        gameState = data.val()
}

)
}
updateState(x){database.ref('/').update({
    gamestate:x 
})}
play(){
    form.greeting1.hide()
    form.greeting2.hide()
    player.getPlayers()
    background("white")
    image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
   
    if (allplayers !== undefined){

        var index = 0
        var x = 420
        var y = 0
        for(var plr in allplayers){
            index = index + 1
            x = x+340
            y = displayHeight - allplayers[plr].distance - 200
            cars[index - 1].x = x
            cars[index - 1].y = y
            if(index == player.index){ camera.position.y = cars[index-1].y 
            fill("red")
                ellipse(cars[index-1].x , cars[index-1].y,70,70)

           
        }
    }
    if(keyDown(UP_ARROW)){
player.distance=player.distance+10
player.update()
    }
    if(player.distance>6900){
        player.rank=player.rank+1
        player.updateRank(player.rank)
        console.log(player.rank)
        gameState = 2
        game.updateState(2)
      }
}
drawSprites()
}
}
