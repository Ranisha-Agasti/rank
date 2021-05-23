class Form{
constructor(){
this.input = createInput('name')
this.button = createButton('play')
this.reset = createButton('reset')
this.element = createElement('h1','car racing game')
this.input.position(width/2,height/2)
this.button.position(width/2,height/2+50)
this.element.position(width/2,height/2-50)
this.reset.position(width-100,50)
}

display(){
    this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    this.element.hide()
player.name = this.input.value()
this.greeting1 = createElement('h1','hello '+player.name)
this.greeting1.position(width/2,height/2)
this.greeting2 = createElement('h1','wait for other players to join ')
this.greeting2.position(width/2,height/2+100)
playerCount = playerCount+1
player.index = playerCount
player.updateCount(playerCount)
player.update()
})
this.reset.mousePressed(()=>{
database.ref('/').update({
    gamestate:0,
    playercount:0,
    players:null,
    Rank:0
})
})
}
}