import loader from './components/loader.js'
import showMenu from './components/show-menu.js'
import showCart from '../components/showCart.js'
import products from '../components/products.js'
import getProducts from '../components/Getproducts.js'

/* Ul Elements */
/* Ocultar Loader */
 loader()

 /* Mostrar Menu */
 showMenu()
 /* Mostrar Carrito */

 showCart()

 // products //

 const { db, printProducts } = products(await getProducts())

 /* Carrito */

 cart(db, printProducts)


