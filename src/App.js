import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import BarSide from "./Sidebar/BarSide";
import { useState } from "react";
import data from "./data";
import Card from "./components/Card";






   
function App() {


  const [selectedCategory , setSelectedCategory] = useState(null);
  const [query , setQuery] = useState("")


     // ---------Input Filter-------------

        

           const handleInputChange= (e)=>{

                  setQuery(e.target.value)
           }


           const filteredItems = data.filter((item)=> item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);


            



              //--------Radio filter

               const  handleChange = (e)=>{

                    setSelectedCategory(e.target.value)
               }


                //--------Buttons filter

                const  handleClick = (e)=>{

                  setSelectedCategory(e.target.value)
             }
          



             const filteredData = (products ,  selected, query)=>{
                   
                   let filteredProducts = products;

                    //filtering Input items

                     if(query){

                      filteredProducts = filteredItems
                     }

                    //filtering selected
                     if(selected){
                      filteredProducts =filteredProducts.filter(({category , color ,company , 
                         title , newPrice ,  }) => category=== selected || color ===selected || company ===selected 
                         || newPrice === selected || title === selected );

             
            }

                         
            return filteredProducts.map(
                          
              ({img , title , star , prevPrice , newPrice , category })=>(

                    <Card key={Math.random()}
                          img={img}
                          title={title}
                          star={star}
                          prevPrice = {prevPrice}
                          newPrice = {newPrice}
                          category={category}

                    
                     />
             ));
          }


         const result =  filteredData(data , selectedCategory , query)
            
  return (


<div className="p-0 m-0 ">


<Nav  query={query} handleInputChange = {handleInputChange}/>

<div className="flex ">
<BarSide   handleChange = {handleChange}/>
<div>
<Recommended handleClick = {handleClick} />
<Products result={result} />
</div>
</div>




</div>



  
   
  );
}

export default App;
