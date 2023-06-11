//variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 20
let raio = diametro / 2

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5
let yRaquete = 150
let larguraRaquete = 10
let comprimentoRaquete =90

//variáveis da raquete oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;



let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
}

function mostraBolinha() {
circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
    
  }
  if (yBolinha + raio > height || yBolinha -raio < 0){
      velocidadeYBolinha *= -1;
      }
}

function mostraRaquete(x, y){
  
  rect(x, y, larguraRaquete, comprimentoRaquete);
}



function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + comprimentoRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *=-1
  }
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}
