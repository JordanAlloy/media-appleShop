const person = [
    {
        FullName: 'Alloysius Prosper',
        Age: 28,
        Hobbie: ['Eating,', 'Sleeping', 'watching Movies', 'Speaking', 'Studying'],
        Occupation: 'FullStack Developer',
        Married: false,
        Address: {
            Street: 'Ishade',
            City: 'Ilese Brk',
            Town: 'Ijebu Ode',
            State: 'Ogun State',
            Country: 'Nigeria',
            PostalCode: 210210,
            isHome: true
        }
    },
    {
        FullName: 'Jordan Walters',
        Age: 26,
        Hobbie: ['Traveling,', 'Playing Video Games', 'watching Movies', 'Speaking', 'Driving'],
        Occupation: 'Truck Driver',
        Married: true,
        Address: {
            Street: 'Illoinis',
            City: 'MaryLand',
            Town: 'Koituns',
            State: 'MaryLand MD',
            Country: 'USA',
            PostalCode: 320187,
            isHome: false
        }
    },
]
if(person.Married === false){
    console.log('is single')
}else{
    console.log('is married')
}

person.forEach((Person)=>{
    console.log(Person.Occupation)
})

const personNew = person.map((New)=>{
    return New.Occupation
})
console.log(personNew)

const personIsHome = person.filter((IsHome)=>{
    return IsHome.Address.isHome===false 
})
console.log(personIsHome)


function thisNum (num1, num2, numm3){
    return num1 + num2 / numm3
}
console.log(thisNum(10, 3, 5))


class Student{
    constructor(firstName, lastName, DOB,CGPA, Department){
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = new Date(DOB);
        this.CGPA = CGPA;
        this.Department = Department;
    }
    getFullName(){
        return ` ${this.firstName}, ${this.lastName}`;
    }
    getBirthYear(){
        return this.DOB.getFullYear();
    }
    getCGPA(){
        return this.CGPA;
    }
    getDepartment(){
        return this.Department
    }
    getStudent(){
        return `${this.getFullName()}, ${this.getBirthYear()}, ${ this.getCGPA()}, ${this.getDepartment()}`
    }
    
}

const newStudent = new Student('Alloysius', 'Prosper', '6-8-1994', 2.2, 'Economics' )

console.log(newStudent.getStudent())


























































































































// const data  =[
//     {
//         id: 0,
//         img: 'IMAGES/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large_2x.Webp ',
//         name:'Apple macbook pro 16',
//         price: 2600,
//         save:25,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 1,
//         img: 'IMAGES/apple14 m1 pro  chip mac book.jpg',
//         name:'Apple macbook pro 19',
//         price:2150,
//         save:50,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 2,
//         img: 'IMAGES/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg',
//         name:'Apple macbook pro 20',
//         price:2200,
//         save:30,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 3,
//         img: 'IMAGES/apple pro 3d model.jpg',
//         name:'Apple macbook pro 19',
//         price:2410,
//         save:43,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 4,
//         img: 'IMAGES/powerbook.jpg',
//         name:'Apple vintage powerbook 100',
//         price: 2510,
//         save:50,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 5,
//         img: 'IMAGES/powerbook,500.jpg',
//         name:'Apple vintage powerbook 500',
//         price:1400,
//         save:43,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 6,
//         img: 'IMAGES/powerbookG3.jpg',
//         name:'Apple vintage powerbook G3',
//         price:1190,
//         save:43,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 7,
//         img: 'IMAGES/ibook,g3.jpg',
//         name:'Apple ibook G3',
//         price:323,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 8,
//         img: 'IMAGES/powerbook,titeniumg4.jpg',
//         name:'Apple powerbook Titenium 4',
//         price:2100,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 9,
//         img: 'IMAGES/macbook pro2016.jpg',
//         name:'Macbook pro 2016',
//         price:1210,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 10,
//         img: 'IMAGES/macbookpro,poly.jpg',
//         name:'Apple macbookpro polycarbonate',
//         price:1130,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 11,
//         img: 'IMAGES/macbook,air.jpg',
//         name:'Apple macbook Air',
//         price:1400,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 12,
//         img: 'IMAGES/macbook,unibody.jpg',
//         name:'Apple macbook Unibody',
//         price:2100,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 13,
//         img: 'IMAGES/macbookpro,retina display.jpg',
//         name:'Apple macbookpro Retina Display',
//         price:2300,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 14,
//         img: 'IMAGES/macbook,unibody.jpg',
//         name:'macbook pro Unibody',
//         price:1200,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 15,
//         img: 'IMAGES/macbook pro2016.jpg',
//         name:'Macbookpro 2016',
//         price:2000,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 16,
//         img: 'IMAGES/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large_2x.Webp',
//         name:'apple',
//         price:2999,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 17,
//         img: 'IMAGES/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg',
//         name:'apple',
//         price:2100,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 18,
//         img: 'IMAGES/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large_2x.Webp',
//         name:'apple',
//         price:1200,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
//     {
//         id: 19,
//         img: 'IMAGES/apple pro 3d model.jpg',
//         name:'apple',
//         price:1200,
//         save:33,
//         delivery:'in 3-4 days',
//         itemInCart: false
//     },
// ];

// let cartList =[];//array to stre cart list
// var i;

// var detail = document.getElementsByClassName('card-item') 
// var detailsImg = document.getElementById('detail-image')
// var detailTitle = document.getElementById('detail-title')
// var detailPrice = document.getElementById('detail-price')
// var youSave = document.getElementById('you-save')
// var detailsPage = document.getElementById('details-page')





// var back = document.getElementById('back');
//  // click events to back home page
// back.addEventListener('click', refreshPage);
// //back to home page details page
// function refreshPage(){
//     detailsPage.style.display='none'
// } 




// var cart = document.getElementById('cart');
// cart.addEventListener('click', displayCart)// click event to dispaly cart
// //function to display cart page
// function displayCart(){
//     document.querySelector('.main').style.display ='none'
//     document.getElementById('details-page').style.display ='none'
//     document.getElementById('cart-container').style.display ='block'
//     if(cartList.length==0){
//         document.getElementById('cart-with-items').style.display='none'
//         document.getElementById('empty-cart').style.display='block'
//     }else{
//         document.getElementById('cart-with-items').style.display='block'
//         document.getElementById('empty-cart').style.display='none'

//     }
// }

// var carts = document.getElementById('carts')
// carts.addEventListener('click', ()=>addToCart(getId)) //click events to add item to carts from details page


// var getId;
// var home = document.getElementById('logo')
// // click event to hide cart to page return to home page
// home.addEventListener('click', hideCart) 
// //hide your cart page
// function hideCart(){
//     document.querySelector('.main').style.display='block'
//     document.getElementById('cart-container').style.display='none'
// }

// //click events on dynamically created elements to remove items from list
// document.addEventListener('click', function(e){
//     if (e.target.id=='remove'){
//         var itemId =e.target.parentNode.id
//         removeFromCart(itemId)
//     }
// })

// //click event to display details page 

// for (i=0; i < data.length; i++){
//     detail[i].addEventListener('click', handleDetail)
// }

// //click evnets to add items to acrt from home page cart icon
// var addToCarts = document.querySelectorAll('#add-to-carts')
// addToCarts.forEach(val=>val.addEventListener('click'),()=>addToCart(val.parentNode.id));

// //detail function
// function handleDetail(){
//     detailsPage.style.display = 'block';
//     getId = this.parentNode.id;
//     detailsImg.src=data[getId].img;
//     detailTitle.innerHTML=data[getId].name;
//     detailPrice.innerHTML = 'price :$ '+ data[getId].price;
//     youSave.innerHTML = 'you save :( $' + data[getId].save + ')';

// }

// //add item to cart
// function addToCart(id){
//     if (!data[id].itemInCart){
//         cartList = [...cartList, data[id]];
//         addItem();

//         alert('item added to cart');
//     }else{
//         alert('item is already there');
//     }
//     data[id].itemInCart= true;
// }

// var totalAmount; 
// var totalItems;
// var totalSaving;

// //add to the cart
// function addItem(){
//     totalAmount = 0;
//     totalItems=0;
//     totalSaving=0;
//     var clrNode = document.getElementById('item-body');
//     clrNode.innerHTML ='';
//     cartList.map((cart)=>{
//         var cartCont = document.getElementById('item-body');
//         totalAmount = totalAmount + cart.price;
//         totalSaving = totalSaving + cart.save;
//         totalItems = totalItems + 1;

//         var tempCart = document.createElement('div');
//         tempCart.setAttribute('class', 'cart-list');
//         tempCart.setAttribute('id', cart.id);

//         var  listImg = document.createElement('img');
//         listImg.setAttribute('id', 'list-img');
//         listImg.src =cart.img;
//         tempCart.appendChild(listImg);

//         var listName = document.createElement('h3');
//         listName.setAttribute('class', 'list-name');
//         listName.innerHTML =cart.name;
//         tempCart.appendChild(listName);

//         var listPay = document.createElement('h3');
//         listPay.setAttribute('class', 'pay');
//         listPay.innerHTML =cart.price;
//         tempCart.appendChild(listPay);

//         var listQuantity = document.createElemet('h3');
//         listQuantity.setAttribute('class', 'quantity');
//         listQuantity.innerHTML ='1';
//         tempCart.appendChild(listQuantity);

//         var listTrash = document.createElement('i');
//         listTrash.setAttribute('class', 'fa fa-trash');
//         listTrash.setAttribute('id', 'remove');
//         tempCart.appendChild(listTrash);

//         cartCont.appendChild(tempCart);
//     })
//     document.getElementById('total-amount').innerHTML ='total Amount: $' + totalAmount;
//     document.getElementById('total-items').innerHTML = 'total items: $' + totalItems;
//     document.getElementById('you-saved').innerHTML = 'you saved: $' + totalSaving;
//     document.getElementById('total').style.display ='block';

// }


// //remove items from cart 
// function removeFromCart (itemId){
//     data[itemId].itemInCart =false
//     cartList = cartList.filter((list)=>list.id!=itemId)
//     addItem()
//     if(cartList.length==0){
//         document.getElementById('cart-with-items').style.display='none';
//         document.getElementById('empty-cart').style.display='block';
//     } 
// }