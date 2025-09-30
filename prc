PFont fontStyle;
PGraphics textLayer, glitch;

void setup() {
  size(1280, 640);
  background(255);
  noStroke();
  frameRate(8);

  //Text Layer
  fontStyle = createFont("HelveticaNowDisplay-Bold.ttf", 68);

  textLayer = createGraphics(width, height);
  textLayer.beginDraw();
  textLayer.fill(0);        //visible
  textLayer.textAlign(CENTER, CENTER);
  textLayer.textFont(fontStyle);
  textLayer.textSize(80);
  
  String s = "WW*#84";
  
  textLayer.text(s, textLayer.width/2.0, textLayer.height/2.0);
  textLayer.endDraw();
  textLayer.loadPixels();

  //Glitch Layer
  glitch = createGraphics(width, height);
  glitch.beginDraw();
  
  int h = 4;
  for(int x=0;x<textLayer.width;x++){
    for(int y=0; y<textLayer.height; y++){
      color c =  textLayer.pixels[x+y*textLayer.width];
      if(red(c)==0 && green(c)==0 && blue(c)==0){
        push();
        glitch.fill(#60B83A);
        glitch.circle(x,y,1.0);
        pop();
        textLayer.pixels[x+y*textLayer.width]=color(255,255,255);
      }
      if(y%h==0){y+=2;}
    }
  }
  glitch.endDraw();
  
  image(textLayer,0,0);
  image(glitch,0,0);
}

void draw() {
 
}
