//CONSTRUINDO RADAR
// LIMITE VELOCIDADE ATÉ (65 POR HORA) O MOTORISCA NÃO RECEBERA MULTA!!
//DE 66KM POR HORA ATÉ 70KM ELE RECEBERA 1 PONTO NA CARTEIRA 
// DE 71 ATÉ 80 ELE RECEBERA 2 PONTO NA CARTEIRA 
// DE 81 ATÉ 90 ELE RECEBERA 3 PONTO NA CARTEIRA 
// DE 91 A MAIS ELE TERÁ A CARTEIRA SUSPENSA!!!

// MOSTRE NO LOG ATÉ 65 POR HORA A VELOCIDADE
// DE 66 PRA CIMA VÁ MOSTRANDO A QUANTIDADE DE PONTOS PERDIDOS NO LOG!!

function checkSpeed(speed){
  if(speed <= 65){
    return speed;
  }
  if(speed >= 66 && speed <= 70){
    console.log('Points:', -1); 
  }

  if(speed > 70 && speed <= 80){
    console.log('Points:', -2); 
  }
  if(speed >= 81 && speed <= 90){
    console.log('Points:', -3); 
  }

  if(speed > 90){
    console.log('Licence suspended!')
  }
}

checkSpeed(72);
