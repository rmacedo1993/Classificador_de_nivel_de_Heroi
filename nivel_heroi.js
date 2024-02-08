/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

*/

let nome_heroi = prompt("Digite o nome do Herói: ");
console.log(nome_heroi);
let xp_heroi = prompt("Insira a quantidade de XP do herói: ");
console.log(xp_heroi);

let classificador_nivel_heroi;

switch (true) {
  case (xp_heroi <= 1000):
    classificador_nivel_heroi = "Ferro";
    break;

  case (xp_heroi >= 1001 && xp_heroi <= 2000):
    classificador_nivel_heroi = "Bronze";
    break;

  case (xp_heroi >= 2001 && xp_heroi <= 5000):
    classificador_nivel_heroi = "Prata";
    break;

  case (xp_heroi >= 5001 && xp_heroi <= 7000):
    classificador_nivel_heroi = "Ouro";
    break;

  case (xp_heroi >= 7001 && xp_heroi <= 8000):
    classificador_nivel_heroi = "Platina";
    break;

  case (xp_heroi >= 8001 && xp_heroi <= 9000):
    classificador_nivel_heroi = "Ascendente";
    break;
  
  case (xp_heroi >= 9001 && xp_heroi <= 10000):
    classificador_nivel_heroi = "Imortal"
    break;

  case (xp_heroi >= 10002):
    classificador_nivel_heroi = "Radiante"
    break;
}
console.log("O herói de nome "+nome_heroi +" está no nível de " +classificador_nivel_heroi);
