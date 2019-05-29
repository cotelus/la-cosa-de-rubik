Ve borrando esto y añadiendo unos nuevos conforme se vayan haciendo cosas
# El orden de las cosas
## 1.- Rotación del cubo
Ahora se gira al pinchar pero luego vuelve a la posición inicial. Estaría bien hacer que cuando el cubo pase de 90º en cualquier eje, se cambien las posiciones respecto a ese eje (Se rota Y=90º -> las posiciones del cubo cambian como si las 3 caras de Y se hubieran girado).
Así podemos conseguir que los controles sigan funcionando a pesar de las rotaciones
## 2.- Rotación de las caras
Hay que intentar que al pinchar y arrastrar un cubo, se mueva su cara anexa en el eje que se quiera, sin usar los controles de la GUI

# Cosas resultonas que podemos añadir de forma sencilla
## 1.- Contador de tiempo
Añadir en la parte de arriba un contador de tiempo es medianamente sencillo. Javascript tendrá alguna función para devolver en segundos el tiempo que ha pasado desde algún evento. Se puede almacenar en un entero, que no consume mucha memoria y representar el tiempo tal que así:  

* 1001 = 10 minutos 01 segundos
* 0040 = 0 minutos 40 segundos

Imagino que habrá otras formas de hacerlo, pero esta me parece sencilla

## 2.- Un comprobador de soluciones
Cuando hayas empezado el cubo, es fácil saber si se ha resuelto. Solo hay que comprobar los colores de cada cubo en su posición actual, con los colores que tendría cada cubo en esa posición. La forma mas sencilla tal vez sea que cuando se pinche el botón "LO RESOLVÍ" se llame a la función checkResult() y esta misma cree un nuevo cubo 3x3x3 con los colores que sea, y compruebe uno a uno si los 27 cubos son los mismos
(Aunque esto requiere que el usuario coloque el cubo una vez resuelto en la misma posición que estaba al principio tambien (AZUL ARRIBA)(BLANCO IZQUIERDA)(ROJO DERECHA))

Otra forma de hacerlo, seria crear la clase Cubito, a la que le pasas una posición inicial y una serie de colores. Ese objeto lo vas a usar de la misma forma que los cubies, pero además va a almacenar su posición inicial tambien, por lo que la comprobación es tan sencilla como llamar a todos los cubies y preguntarles si estan en su posición inicial ( inicial y actual coinciden ) Y aquí ya no hace falta ningun tipo de interacción mas por parte del usuario mas que pulsar el botón para comprobar que rula.
O ni eso, pasarle su indice original y que la comprobación en realidad compruebe si su indice actual en los cubies y su indice inicial que se le pasó en la creación es el mismo

## 3.- Botón que desordene el cubo
Conforme lo pulsas, hace RANDOM rotaciones de RANDOM' caras. Lo mas sencillo quizás


















# El Rubik de CUBO
## Práctica de la asignatura Sistemas Gráficos. UGR

### 1.-Primeros pasos
Vamos a desarrollar un cubo de rubik convencional usando las herramientas de THREE.JS. Los requisitos indispensables para nosotros son que el cubo pueda rotar sobre los ejes X e Y para poder visualizar todas las caras además de poder rotar cada una de las caras del cubo para poder resolverlo. Al empezar a jugar, el cubo deberá desordenarse solo para permitir al usuario que lo resuelva.

#### 1.1.- Añadidos
Hemos pensado, que de forma adicional si el tiempo lo permite, se podría incluir una tabla de puntuaciones como registro histórico además de un contador del tiempo en el momento que se está resolviendo el cubo. 

## ESTARIA DE PUTA MADRE INCLUIR AQUÍ LA DOCUMENTACIÓN, CON LOS ERRORES QUE HEMOS COMETIDO Y LOS IMPEDIMENTOS QUE HEMOS ENCONTRADO Y COMO LOS HEMOS RESUELTO. PUEDE QUEDAR CURIOSETE
