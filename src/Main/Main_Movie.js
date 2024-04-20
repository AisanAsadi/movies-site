import React from "react";
import Main from "./Main"
import "./Main_Movie.css"



const Main_Movie =({products, onDelete})=>{

return(
        
<div className="Main_content">
      
   <div className="Main_Movie">
        <div className="content">
            
                <h2>ژانر</h2>
       </div>
        {products.map((item)=>{
                
           return <Main key={item.id} name={item.name} onDelete={onDelete}/>

        })}


</div>

</div>
)





}
export default Main_Movie