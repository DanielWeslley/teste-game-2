//variaveis do menu
var Xdomenu=300;
var Ydomenu=85;
var Ydomenu2=145;
var Ydomenu3=205;

//variaveis do jogo
var tela=1;//telas
var p1x = 10;//X do jogador
var p1y = 300;//Y do jogador
var p1w = 100;
var p1h= 100;
var pose=0;//controla as animaçoes
var Timer=0;//controla o tempo das animaçoes
var mode=0;//controla a mudança de animaçoes
var jump=[];//animaçao pulando
var idle=[];//animaçao parado
var run=[];//animaçao de andar/correr
var run2=[];//animaçao espelhada do run
var objeto_W=150;//largura da plataforma no mapa
var objeto_H=30;//altura da plataforma no mapa
var objeto_X=200; //X do objeto
var objeto_Y=320; //Y do objeto


//gravidade
var pulando = false;//finalmente pulando ?
var direcao = 1;// força da gravidade na direçao Y
var velocidade=2;//velocidade do player
var poderdopulo=12;//energia/força do player
var velocidade_de_queda=2;// igual a velocidade
var minimoaltura=375;//minimo de altura(chao)
var maximoaltura=50;//maximo de altura  (ceu)
var contador_pulo=0;//mantem o controle do quanto pula




function preload(){
idle[0] = loadImage("./poses/idle/Idle (1).png");
idle[1] = loadImage("./poses/idle/Idle (2).png");
idle[2] = loadImage("./poses/idle/Idle (3).png");
idle[3] = loadImage("./poses/idle/Idle (4).png");
idle[4] = loadImage("./poses/idle/Idle (5).png");
idle[5] = loadImage("./poses/idle/Idle (6).png");
idle[6] = loadImage("./poses/idle/Idle (7).png");
idle[7] = loadImage("./poses/idle/Idle (8).png");
idle[8] = loadImage("./poses/idle/Idle (9).png");
idle[9] = loadImage("./poses/idle/Idle (10).png");

run[0] = loadImage("./poses/run/Run (1).png");
run[1] = loadImage("./poses/run/Run (2).png");
run[2] = loadImage("./poses/run/Run (3).png");
run[3] = loadImage("./poses/run/Run (4).png");
run[4] = loadImage("./poses/run/Run (5).png");
run[5] = loadImage("./poses/run/Run (6).png");
run[6] = loadImage("./poses/run/Run (7).png");
run[7] = loadImage("./poses/run/Run (8).png");

run2[0] = loadImage("./poses/run/run2/Run2 (1).png");
run2[1] = loadImage("./poses/run/run2/Run2 (2).png");
run2[2] = loadImage("./poses/run/run2/Run2 (3).png");
run2[3] = loadImage("./poses/run/run2/Run2 (4).png");
run2[4] = loadImage("./poses/run/run2/Run2 (5).png");
run2[5] = loadImage("./poses/run/run2/Run2 (6).png");
run2[6] = loadImage("./poses/run/run2/Run2 (7).png");
run2[7] = loadImage("./poses/run/run2/Run2 (8).png");

jump[0] = loadImage("./poses/jump/Jump (1).png");
jump[1] = loadImage("./poses/jump/Jump (2).png");
jump[2] = loadImage("./poses/jump/Jump (3).png");
jump[3] = loadImage("./poses/jump/Jump (4).png");
jump[4] = loadImage("./poses/jump/Jump (5).png");
jump[5] = loadImage("./poses/jump/Jump (6).png");
jump[6] = loadImage("./poses/jump/Jump (7).png");
jump[7] = loadImage("./poses/jump/Jump (8).png");
jump[8] = loadImage("./poses/jump/Jump (9).png");
jump[9] = loadImage("./poses/jump/Jump (10).png");
jump[10] = loadImage("./poses/jump/Jump (11).png");
jump[11] = loadImage("./poses/jump/Jump (12).png");
}//fim do loadimage





function setup() {
  createCanvas(800,600);
  frameRate(120);

}//fim do setup





function draw() {
  background(220);



  //tela do menu
    if(tela==1){
      text(mouseX+" "+mouseY,50,60);
      textAlign(CENTER);
      textSize(25);
      background(20);
      
    //BOTOES DO MENU
    //iniciar
    if(mouseX>298 && mouseX<501 && mouseY>85 && mouseY<135){
  
        stroke(200);
        fill(20);
        rect( Xdomenu,Ydomenu,200,50,50);
        if (mouseIsPressed){
          tela = 2;
        }
    }
    fill(240);
    noStroke();
    text("iniciar",400,120);
    text(mouseX+" "+mouseY,50,60);
    

    //instruçoes
    if(mouseX>298 && mouseX<501 && mouseY>145 && mouseY<200){
        stroke(200);
        fill(20);
        rect( Xdomenu,Ydomenu2,200,50,50);
        if (mouseIsPressed){
          tela = 3;
        }
    }
    fill(240);
    noStroke();
    text("instruções",400,180);
    
    //creditos
    if(mouseX>298 && mouseX<501 && mouseY>205 && mouseY<250){
        stroke(200);
        fill(20);
        rect( Xdomenu,Ydomenu3,200,50,50);
        if (mouseIsPressed){
          tela = 4;
        }
    
    }
    fill(240);
    noStroke();
    text("creditos",400,240);
    //fim dos botoes
    
   
      
    
      }//fim da tela_menu
  





  //tela do jogo
  if(tela==2){
    background(200);
    text(mouseX+" "+mouseY,50,50)
    
     //objeto 
     stroke(0);
     strokeWeight(5);
     fill(200,200,0);
     rectMode(CENTER);      
     rect(objeto_X, objeto_Y, objeto_W, objeto_H);
     
    //inicio do carregamento de textura e coordenadas do player
            if (mode == 0){
            imageMode(CENTER);
            image(idle[pose%10],p1x,p1y,p1w,p1h);
            imageMode(CORNER);
          }else{
                if(mode == 1){
                  imageMode(CENTER);
                  image(run[pose%8],p1x,p1y,p1w,p1h);
                  imageMode(CORNER);
                          }else{if(mode == 2){
                            imageMode(CENTER);
                            image(jump[pose%12],p1x,p1y,p1w,p1h);
                            imageMode(CORNER);
            }
            }
                            if(mode=== 3){
                              imageMode(CENTER);
                              image(run2[pose%8],p1x,p1y,p1w,p1h);
                              imageMode(CORNER);
                            }

                      }//fim do carregamento de textura e coordenadas do player
  
  if(Timer==5){
    pose++;
    Timer=0;
  }else{
    Timer++;
  }
  


if (keyIsDown(LEFT_ARROW)||keyIsDown(65)){
  p1x=p1x-3;
 mode = 3;
}else{mode = 0;}

if (keyIsDown(RIGHT_ARROW)||keyIsDown(68)){
p1x=p1x+3;
mode=1;
}


if (keyIsDown(UP_ARROW)||keyIsDown(87)){
  pulando=true;
  mode=2;
}
else{pulando=false;}
gravidade();
/////////////////////////////////////////////////////
if(p1x >= 115 && p1x <= 275 && p1y >270 && p1y < 340 && pulando == false ){
  p1y = p1y; // para nao ficar voando
  velocidade = 0;//sem velocidade porque não estamos caindo
  contador_pulo=0;
  
}






}//fim da tela_jogo









  //tela de instruçoes
if(tela == 3){


}


//tela de creditos
if (tela == 4){

}







}//termina draw

function gravidade(){

if(p1y>=minimoaltura && pulando == false){

  p1y = p1y; //NAO CAI
  contador_pulo=0;//resetar contador de pulo quando chegar no chao
}
else{

  p1y = p1y + (direcao*velocidade);// faz a gravidade funcionar
}

if (pulando == true){
  if (p1y <= maximoaltura || contador_pulo >= poderdopulo){
    if (p1y >= minimoaltura){
      p1y= minimoaltura;
    }
    else{
    velocidade = velocidade_de_queda;//cair ao maximo
    }
  }
  else{
    velocidade = -poderdopulo;
    contador_pulo = contador_pulo+1;
  }
}
else{
  velocidade = velocidade_de_queda;
}
}//temina gravidade

function keyPressed(){
  if (keyCode === (27)){
  tela=1;
  console.log("saida para o menu esta ok.");
}  
}

 
