class TelaInicial {
  constructor(){
    
  }
  
  draw(){
  this._imagemDeFundo();
  this._texto();
  this._botao();
  }

  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
    }

  _texto(){
  textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
  text('As aventuras da', width / 2, 100);
    textSize(50);
  text('Bruxinha Hipster', width / 2, 150);
    
  }

_botao(){
  botaoGerenciador.y = height / 7 * 5;
  botaoGerenciador.draw();
}
}
  
