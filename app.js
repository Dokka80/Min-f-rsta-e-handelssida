$(function () {
    var products = [

       
        { name: 'Samsung TV', pris: 25000, id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://thealtweb.com/wp-content/uploads/2018/02/global-mkt-tv-overview-smart-samsung-tv-suhd-smart-autodetection.jpg', category: 'Elektronik' },
        { name: 'Camera', pris: 8799, id: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://www.film-tv-video.de/wp-content/uploads/2017/06/B_0617_Pana_AU_EVA1_TLF_1.jpg', category: 'Elektronik' },
        { name: 'Damsuggare', pris: 4599, id: 3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://cdn.pji.nu/product/standard/280/4463453.jpg', category: 'Hemmet' },
        { name: 'Tandborste LG', pris: 1249, id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'http://dizw242ufxqut.cloudfront.net/images/product/homeelectronicsdocument/electronics/image3/eltandborste_pro6200-30424027-1.jpg', category: 'Hemmet' },
        { name: 'Iphone X', price: 10999, id: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://cdn0.vox-cdn.com/hermano/verge/product/image/8579/jbareham_171031_2099_A_0058.jpg', category: 'Kontor' },
        { name: 'El-cigg', price: 1299, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://www.cigoteket.se/app/uploads/2016/08/iStick-Pico.jpg', category: 'Kontor' }
    ];

    var objekt = [];

    //function som lägger till producter
    var appendList = function (array, location) {
        var template = array.map(function (item, id) {
            return `
                <li class="product col-3">
                   <img src="${item.picture}" alt="product image">
                   <div class="product-content">
                   <h4> ${item.name} - <span class="category">${item.category}</span> <small>${item.price}kr</small>
                   </h4>
                   <p>${item.description}</p>
                   </div>
                   <button type="button" id="${item.id}">Köp Nu</button>
                </li>`;
        });
        $(location).html(template);
    };

    var addToObjekt = function (array, id, location) {
        var a = array.find(function (i) {
            return i.id === id;
        
    });

    objekt.push(a);
    console.log(objekt);
    var item = `
    <li class="item" id=${a.id}>
        <h4>${a.name}</h4>
        <button type="button">X</button>
    </li>
    `;
    $('span.amount').text(objekt.length);
    $(location).append(item);
};

var removeFromObjekt = function (array, removedItem) {
    array.spice(removedItem, 1);

};

var poppulateObjekt = function (array, location) {
    var item = `
    <li class="item" id="${array.id}">
    <h4>${array.name}</h4>
    <button type="button">X</button>
    </li>
    `;
    $('span.amount').text(array.length);
};

appendList(products, $('.product-list'));

$('.product').on('click', 'button', function (event) {
    var id = $(this).attr('id');
    addToObjekt(products, +id, $('.objekt-list'));
});

$('.objekt-list').on('click', 'button', function (e) {
    var item = $(e.currentTarget).closest('li').remove();
    removeFromObjekt(objekt, item);
    poppulateobjekt(objekt, $('.objekt-list'));
});

   
});