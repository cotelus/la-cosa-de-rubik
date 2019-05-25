Ve borrando esto y añadiendo unos nuevos conforme se vayan haciendo cosas
# El orden de las cosas
## 1.- Rotación del cubo
Por ahora la rotación se hace con la GUI. Hay que cambiarlo para que la rotación se haga al pinchar en la escena y arrastre. No obstante es una solución meh mientras se siguen haciendo el resto de cosas
## 2.- Creo que se complica la cosa al tratar el cubo de rubik como un group
Se suele usar para hacer las mismas operaciones X veces en Y objetos distintos. Para que funcione bien creo que hay que diferenciar los cubos ANTES de meterlos en el cubo grande. Es decir, coger los cubitos, pillar el cubo que se está pinchando, crear otro grupo con los cubos de la cara que se quiere girar y girarla.


















# El Rubik de CUBO
## Práctica de la asignatura Sistemas Gráficos. UGR

### 1.-Primeros pasos
Vamos a desarrollar un cubo de rubik convencional usando las herramientas de THREE.JS. Los requisitos indispensables para nosotros son que el cubo pueda rotar sobre los ejes X e Y para poder visualizar todas las caras además de poder rotar cada una de las caras del cubo para poder resolverlo. Al empezar a jugar, el cubo deberá desordenarse solo para permitir al usuario que lo resuelva.

#### 1.1.- Añadidos
Hemos pensado, que de forma adicional si el tiempo lo permite, se podría incluir una tabla de puntuaciones como registro histórico además de un contador del tiempo en el momento que se está resolviendo el cubo. 

