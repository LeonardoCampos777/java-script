class Veiculo{
  constructor(rodas,combustivel){
    this.rodas = rodas;
    this.combustivel = combustivel;
  }

  acelerar(){
    console.log('aceelerou');
  }
}

class Moto extends Veiculo{
  constructor(rodas,combustivel,capacete){
    super(rodas,combustivel);
    this.capacete = capacete;
  }

}

const moto = new Moto(2,'gasolina',true);
console.log(moto);