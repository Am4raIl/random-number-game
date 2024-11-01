 alert("Boas-vindas ao Jogo do Número Secreto!\nREGRAS:\n1- Você terá 5 chances para acertar o número.\n2- Você só pode chutar 1 número por vez.");

 let secretNumber = 1 + parseInt(100 * Math.random());
 let count = 1;
 let pick;

 while(count <= 5){
    pick = prompt(`Digite um número entre 0 e 100 (Tentativa ${count}): `);
    if(secretNumber == pick){ alert("Parabens! Você acertou!"); break; }
    else if(secretNumber > pick) { alert(`O Número Secreto é maior que ${pick}!\nTente novamente!\nTentativas restantes (${5 - count})`); count++; }
    else if(secretNumber < pick) { alert(`O Número Secreto é menor que ${pick}!\nTente novamente!\nTentativas restantes (${5 - count})`); count++; }
 }

 alert(`Você perdeu!\nVocê excedeu o número de tentativas!`);