function load(){
   fetching();
}

function fetching(){
    fetch('https://fakestoreapi.com/products')
    .then((convert)=>{
        return convert.json();
    })
    .then((data)=>{
         display_Data(data);        
    })
}
var a='';
function display_Data(data){
for(let i of data){
    let col=document.createElement('div');
    let card=document.createElement('div');
    col.className='col-4';
    card.className='card bg-light rounded rounded-3';
    card.innerHTML=`
    <div class='card text-center'>
    <img src=${i.image} height='100' width='100' class='mx-auto'>
    </div>
    <div class='card-body'>
    <p>${i.category}</P>
    </div>
    <div class='card-footer d-flex justify-content-around'>
    <p>$${i.price}</P> <button class='btn btn-outline-primary'>Add</button>
    </div>
    `;
//a=card;
     col.appendChild(card);
    document.getElementById('ro1').appendChild(col);

}



}