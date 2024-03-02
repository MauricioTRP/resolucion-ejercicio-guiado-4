# Desafio transformar días

El siguiente desafío busca transformar una cantidad de días en el formato `<total_años> - <total_semanas> - <total_dias>`, ejemplo:

```text
dias_a_transformar: 374
------------------------

total_años: 1
total_semanas: 1
total_dias: 2
```

## pseudocódigo

Para resolverlo usaremos el siguiente pseudocódigo

```text
totalDiasATransformar = imputUsuario

// Calcula el total de años
totalAños = parteEntera( totalDiasATransformar / 365 )

//Calcula cuantos días sobraron
diasRestantes = totalDiasATransformar % 365

// De los días sobrantes, calcula cuantas semanas hay
totalSemanas = parteEntera( diasRestantes / 7 )

// De los días sobrantes, calcula cuantos días 
// hay después de cumplidas las semanas
totalDias = diasRestantes % 7

// imprime la información en pantalla
muestraFormateado totalAños, totalSemanas totalDias
```

La implementación está definida en el archivo `assets/js/script.js` que muestra información por consola.

## Diagrama de flujo

Para entender mejor el programa, se propone analizar el siguiente diagrama de flujo:

![Diagrama de flujo](/assets/img/Desafio-dias.png)
