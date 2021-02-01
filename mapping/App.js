
import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"


const Components = productsData.map((product) =>{
    return(
        <div key={product.id}>
            <Product  name={product.name} price={product.price} description={product.description}/>
            <hr/>
        </div>
    );
});
function App() {
  return (
    <div>
       {Components} 
    </div>
  )
}

export default App