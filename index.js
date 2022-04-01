const users = [{
    name: 'Matheus Rodrigues de Paula Borges',
    age: 24,
    weight: 50.4,
    gender: 'male',
    city: 'Valparaíso de Goiás',
    state: 'GO'
},{
    name: 'José da Silva',
    age: 40,
    weight: 77.1,
    gender: 'male',
    city: 'Brasilia',
    state: 'DF'
},{
    name: 'Dona Maria',
    age: 39,
    weight: 70,
    gender: 'female',
    city: 'São Paulo',
    state: 'SP'
},{
    name: 'Miguel Silva',
    age: 9,
    weight: 41.6,
    gender: 'male',
    city: 'Rio e Janeiro',
    state: 'RJ'
},{
    name: 'Ana Paula da Silva',
    age: 32,
    weight: 69.6,
    gender: 'female',
    city: 'Bauru',
    state: 'SP'
}];


// // --- FILTER ---
// // Pega todos os usuários com o peso acima de 75 kg.
const allAbove75kg = users.filter(user => user.weight > 75);
/* console.log(allAbove75kg); */

// // Pega todos com a idade menor que 35 anos
const belowAge35 = users.filter(user => user.age < 35);
/* console.log(belowAge35); */

// // Pega todos os masculinos
const allMale = users.filter(user => user.gender === 'male');
/* console.log(allMale); */

// // Pega todos os que moram no estado de São Paulo
const liveInSP = users.filter(user => user.state === 'SP');
/* console.log(liveInSP); */


//--- MAP ---
// // Traz um array com todos os nomes
const allNames = users.map(user => user.name);
/* console.log(allNames); */

// // Traz um array com todas as idades
const allAges = users.map(user => user.age);
/* console.log(allAges); */

// // Traz um array de objeto com apenas o nome e o gênero
const usersGenders = users.map(user => ({
    name: user.name,
    gender: user.gender    
}))
/* console.log(usersGenders); */

// // Traz ums array com o primeiro nome de todos
const firstNames = users.map(user => user.name.split(" ")[0]);
/* console.log(firstNames); */


// --- REDUCE ---
// Pega a soma do peso de todos usuário
const totalWeight = users.reduce((acc, cur) => acc + cur.weight, 0);
/* console.log(totalWeight); */

// Pega a soma de idade de todos
const totalAges = users.reduce((acc, cur) => acc + cur.age, 0);
/* console.log(totalAges); */

// Pega o número total de caracteres no nome de todos os usuários
const totalNameCharacters = users.reduce((acc, cur) => acc + cur.name.length, 0);
/* console.log(totalNameCharacters); */

// Pega o número total de usuários pelo gênero
const usersByGender = users.reduce((acc, cur) => {
    const gender = cur.gender;
    if (acc[gender]) {
        acc[gender]++;
    } else {
        acc[gender] = 1;
    }
    return acc;
}, {});
/* console.log(usersByGender); */


// --- SORT ---
// Ordena por nome
// Ordena pelo peso
// Ordena pela idade
// Ordena pelo gênero


// --- EVERY ---
// Todos os usuários são de SP?
const everyUsersSP = users.every((user) => {
    return user.state === 'SP';
})
/* console.log(everyUsersSP); */

// Todos os usuários tem mais que 100 kg?
const everyAbove100kg = users.every((user) => {
    return user.weight > 100;
})
/* console.log(everyAbove100kg); */

// Todos os usuários tem menos de 90 anos?
const everyBelow90years = users.every((user) => {
    return user.age < 90;
})
/* console.log(everyBelow90years); */

// todos os usuários são masculinos?
const everyMaleGender = users.every((user) => {
    return user.gender === 'male';
})
/* console.log(everyMaleGender); */


// --- SOME ---
// Tem pelo menos um usuário de SP?
const oneUserSP = users.some((user) => {
    return user.state === 'SP'; 
});
/* console.log(oneUserSP); */

// Tem pelo menos um usuário acima de 100 kg?
const above100kg = users.some((user) => {
    return user.weight > 100;
})
/* console.log(above100kg); */

// Tem pelo menos um usuário com menos de 90 anos?
const some90years = users.some((user) => {
    return user.age < 90;
})
/* console.log(some90years); */

// Tem pelo menos um usuário masculino?
const someGenderMasc = users.some((user) => {
    return user.gender === 'male';
})
/* console.log(someGenderMasc); */