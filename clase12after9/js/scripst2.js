
var cardContainer=document.getElementById('card-container');
// para que varien o se creen mas tarjetas
for(var i=1;i<=3;i++){

var cardDiv=document.createElement('div');
    //divide en 4 col la pantalla
    cardDiv.className='col-md-4';

    //pongo cosas al cardDiv una tarjeta de boostrap que modifico
    cardDiv.innerHTML=`
        <div class="card mb-4" >
            <img src="https://picsum.photos/300/200?random=${i}" class="card-img-top" alt="Imagen">
            <div class="card-body">
                <h5 class="card-title">titulos numero= ${i}</h5>
                <p class="card-text">carta numero ${i} content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;
    // con el parametro
    cardContainer.appendChild(cardDiv);
}
