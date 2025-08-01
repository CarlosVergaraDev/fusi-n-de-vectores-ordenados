# Mezclador de Vectores Ordenados

Este proyecto es una aplicación web desarrollada con HTML, CSS y JavaScript puro. Permite al usuario ingresar números en dos vectores de forma creciente, y luego fusionarlos en un solo vector ordenado.

## 🎯 Funcionalidad Principal

- Ingreso de hasta 5 números por vector.
- Validación para garantizar que los números sean:
  - **Numéricos**
  - **Mayores que el último ingresado**
- Visualización tipo "píldoras" para cada número ingresado.
- Fusión de los vectores usando el algoritmo clásico de mezcla ordenada.
- Reinicio completo de la aplicación para volver a usar.

## 🛠️ Tecnologías Usadas

- HTML5
- CSS3
- JavaScript (sin frameworks)

## 📁 Estructura del Proyecto

```
├── README.md
└── public
├── css
│ └── style.css
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
├── index.html
├── js
│ └── script.js
└── site.webmanifest
```



## 🧠 Lógica de Fusión

El algoritmo utilizado para fusionar dos vectores ordenados es similar al paso de mezcla en **Merge Sort**, comparando elementos de ambos vectores hasta que uno se agote, y luego añadiendo los restantes.

## ✅ Reglas de Validación

- No se permite ingresar números que no sean enteros.
- Cada nuevo número debe ser **estrictamente mayor** que el último en el vector.
- Ambos vectores deben estar completos (5 elementos) antes de permitir la fusión.

## 🎮 Interfaz y Uso

1. Escribe un número en el campo.
2. Haz clic en "Agregar a V1" o "Agregar a V2".
3. Repite hasta completar ambos vectores.
4. Haz clic en "Mezclar" para fusionar los vectores.
5. Presiona "Reiniciar" para comenzar de nuevo.

## 📌 👨‍💻 Autor

Desarrollado como actividad académica de JavaScript puro.