const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmCm = 1.80;
let IMC; // Peso / altura²
let anoNascimento = 2003;

IMC = peso / (alturaEmCm * alturaEmCm);

console.log(
  'O', nome, sobrenome, 'nascido em', anoNascimento,
  'com', idade, 'anos de idade, pesando', peso, 'kg e com',
  alturaEmCm, 'metros de altura, teve um IMC de aproximadamente', IMC.toFixed(2)
);

console.log(
  `O ${nome} ${sobrenome}, nascido em ${anoNascimento}, com ${idade} anos de idade, pesando ${peso}kg e com ${alturaEmCm} metros de altura, teve um IMC de aproximadamente ${IMC.toFixed(2)}`
);
