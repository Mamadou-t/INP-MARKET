

function PrixTotal(product) {
  prix=0;
  product.forEach(element => {
    prix= prix+ element.prix;
  });

 // console.log(prix);
  return prix;
};

export default PrixTotal;

