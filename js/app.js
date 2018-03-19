var square = function(x,y,side){
  this.x        =  x,
  this.y        =  y,
  this.side     = side,
  this.verbose  = function(){
    console.log('x : '+this.x);
    console.log('y : '+this.y);
    console.log('side : '+this.side);
    this.draw();
  },
  this.draw = function(){
    console.log('Drawing the line');
    var canvas = document.getElementById("test-canvas");
    var context = canvas.getContext("2d");
    context.moveTo(this.x,this.y);
    context.lineTo(this.x+this.side, this.y);
    context.lineTo(this.x+this.side, this.y+this.side);
    context.lineTo(this.x,this.y+this.side);
    context.lineTo(this.x,this.y);
    context.stroke();
  }
};
