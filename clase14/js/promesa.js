fetch(`https://dummyjson.com/products`) //?limit=${limit}&skip=${skip}`)
.then(response=>response.json())// datos y los encabezados
.then(data=>console.log(data)); // solo los datos