import { useState } from "react";

function Search2()
{
    const[input,setInput]=useState("");
    const data=["apple","banana","table","chair","tea","laptop","charger","television","ears","nose","gum","pencil"]
    const handlechange=(item)=>{
        setInput(item);
    }
    const filtered=data.filter(filter=>filter.toLowerCase().includes(input.toLowerCase()));
    return(
    <>
    <input style={{ width:"500px", marginTop:"30px",marginLeft:"700px" }}type="search"value={input} onChange={e=>handlechange(e.target.value)}/>
    <ul>
   {filtered.map(list=>(
    
       <h1 style={{marginLeft:"700px"}}> <li>{list}</li></h1>

   ))
   }
   </ul>
    
    </>
    )
}
export default Search2;