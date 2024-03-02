let totalDiasATransformar = 374;

// Calcula total años
let totalAnios = Math.floor(totalDiasATransformar / 365);

// Calcula cuantos días sobraron
let diasRestantes = totalDiasATransformar % 365;

// De los días sobrantes, calcula cuantas semanas hay
let totalSemanas = Math.floor(diasRestantes / 7);

// De los días sobrantes, calcula cuantos días
// hay después de cumplidas las semanas
let totalDias = diasRestantes % 7;

console.log(`En los ${totalDiasATransformar} encontramos un total de: 

${totalAnios} años,
${totalSemanas} semanas
y ${totalDias} días
`)