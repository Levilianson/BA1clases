
var cardContainer=document.getElementById('card-container');


var cardDiv=document.createElement('div');
//divide en 4 col la pantalla
cardDiv.className='col-md-4';

//pongo cosas al cardDiv una tarjeta de boostrap que modifico
cardDiv.innerHTML=`
    <div class="card mb-4" >
        <img src="..." class="card-img-top" alt="Imagen">
        <div class="card-body">
            <h5 class="card-title">titulos</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`;
// con el parametro
cardContainer.appendChild(cardDiv);
