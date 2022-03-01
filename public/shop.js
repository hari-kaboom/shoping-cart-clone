function fetch_products(done){
    $.get('/api/products',function(data){
        console.log('jji')
        done(data)
    })
}
function addproduct(name,manu,price,done){
    console.log('hihihgi') 
    //console.log(name,manu,price)
    $.post('/api/products',
    {name:name,manufacturer:manu,price:price},
    function(data,status,xhr){
        done(data)
    })
}
function create_card(products){
    return $(`
    <div class="col-4 card mx-2 p-4">
        <h4 class="product-name">${products.name}</h4>
        <div class="product-manufacturer">${products.manufacturer}</div>
        <div class="productprice>${products.price}</div>
        <div class="row">
             <div class="col m-3 p-3">
                <b >Rs.${products.price}</b>
             </div>
            
             <button class="col btn btn-primary m-3 id=buy">BUY</button>
            
              
                
         </div>
    </div>`)
}
