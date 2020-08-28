/*
Создайте модуль constants/Products, экспортирующий массив объектов 
с описанием товаров ({ id, title, price, imageUrl }). 
Это временно будет списком товаров.
*/
let Products = [
    {
        id: 1,
        title: 'Холодильник Stinol STS 167',
        price: 3700,
        img:{
            imageUrl: require('../../img/stinol400x400.jpg'),
            alt:'холодильник'
        }
    },
    {
        id: 2,
        title: 'Стиральная машина DAEWOO DWD-6T1023',
        price: 3900,
        img:{
            imageUrl: require('../../img/daewoo400x400.jpg'),
            alt:'стиральная машина'
        }        
    },
    {
        id: 3,
        title: 'Пылесос Karcher T8/1 1.527-160.0',
        price: 1499,
        img:{
            imageUrl: require('../../img/karcher400x400.jpg'),
            alt:'пылесос'
        }        
    },
    {
        id: 4,
        title: 'Кондиционер TCL TAC-07CHSA/XA91',
        price: 3000,
        img:{
            imageUrl: require('../../img/tcl400x400.JPG'),
            alt:'кондиционер'
        }
    },
    {
        id: 5,
        title: 'Кофемашина Delonghi ESAM 4000.B',
        price: 7000,
        img:{
            imageUrl: require('../../img/delonghi400x400.png'),
            alt:'Кофемашина'
        }        
    }
];

export default Products;