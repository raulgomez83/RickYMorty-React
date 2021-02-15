# Proyecto creado como práctica en las llamadas a una API y el uso de hooks ##(useState, useEffect, useContext)

Como librerías externas se han utilizado react-roter-dom https://reactrouter.com/web/guides/quick-start y axios https://www.npmjs.com/package/axios.

Aparace una input de búsqueda en el que al escribir los nombres de un personaje aparece una ficha con su nombre e imagen.
Clicando en cada ficha se obtiene más información del personaje.
En cuanto a la paginación está realiazad mediante el hook de React useContext que e en este caso nos permite acceder al setState desde el componente hijo "Select Page".

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject` (No tocar)

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
