// Parsear objeto a string
const objeto = {propiedad: 1};

const objetoToString = JSON.stringify(objeto);

console.log(typeof objetoToString);

// Parsear string a objeto
const productoString = '{"producto": "Manzana"}';

const productoObjecto = JSON.parse(productoString);

console.log(productoObjecto);