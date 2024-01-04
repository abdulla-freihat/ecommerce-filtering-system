
import Input from "../components/input"
const Category = ({handleChange}) => {
  return (
    <div>
       <h2 className='text-lg font-bold mt-5 mb-2'>Category</h2>



       <div>


           

       <Input 
       handleChange={handleChange}
       value="sneakers"
       title="Sneakers" 
       name="test"
      
       />

<Input 
       handleChange={handleChange}
       value="flats"
       title="Flats" 
       name="test"
      
       />


<Input 
       handleChange={handleChange}
       value="sandals"
       title="Sandals" 
       name="test"
       
       />



<Input 
       handleChange={handleChange}
       value="heels"
       title="Heels" 
       name="test"
      
       />
       </div>

    
       
    </div>

  )
}

export default Category