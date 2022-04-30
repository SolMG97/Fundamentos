let arregloMatriz=[[1,2,3],[4,5,6],[7,8,9]];

function matrizOriginal(arregloMatriz) {  //Ordenamiento de la matriz i(filas),j(columnas), de acuerdo a sus respectivos componentes.
    console.log("Matriz Original");    
                                   
    for(let i=0, j=0; i<3; i++)
    {
        console.log(arregloMatriz[i][j],
                    arregloMatriz[i][j+1],
                    arregloMatriz[i][j+2]);  //usamos j+1, j+2 para ir agregando los componentes por columnas, tiene esta apariencia para que me imprima los numeros en forma de matriz.   
    }
}

function salida1(arregloMatriz) {
    console.log("Salida 1");

    for(let i=2, j=2; i>=0; i--)  //Empezamos con la posición 2 que en este caso es la ultima parte del arregloMatriz [7,8,9] agregamos el decremento i-- de forma que quede 9,8,7.
    {
        console.log(arregloMatriz[i][j],
                    arregloMatriz[i][j-1],
                    arregloMatriz[i][j-2]); // para ir agregando los valores de j ponemos -1,-2 respectivamente, ya que estamos con decremento y siga el mismo orden.    
    }
}

function salida2(arregloMatriz) {
    console.log("Salida 2");

    for(let i=0,j=0;j<3;j++)       //Se puede decir que es una "matriz transpuesta"  A 3*3 transposición  A^{t} 3*3.
    {
        console.log(arregloMatriz[i][j],
                    arregloMatriz[i+1][j],
                    arregloMatriz[i+2][j]); //cambiamos a i+1, i+2 para ir agregando sus componentes por filas.   
    }
}

function salida3(arregloMatriz) {
    console.log("Salida 3");

    for(let i=2,j=2;j>=0;j--) //intercambio de filas y columnas, empezando por la posición 2 del arregloMatriz [7,8,9] e ir decrementando por columnas(j).
    {
        console.log(arregloMatriz[i][j],
                    arregloMatriz[i-1][j],
                    arregloMatriz[i-2][j]); // para ir agregando los valores de i ponemos -1,-2 respectivamente, ya que estamos con decremento y siga el mismo orden.
    }
}

matrizOriginal(arregloMatriz);
salida1(arregloMatriz);
salida2(arregloMatriz);
salida3(arregloMatriz);