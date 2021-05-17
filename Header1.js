import React, {useState ,useEffect} from 'react'
import Header from "./Header"
import Recipe from "./Food-recipie";
import "./App.css" ;
import axios from "axios";


 
function Header1(){

     const[search,setSearch]=useState("");


     const[recipe,setRecipe]=useState([]);

     const APP_ID= "22aec671";

     const APP_KEY = "724aca15117d77c59492a95b9be37bc2	";

   

     useEffect(()=>{ 
         getRecipe();
     },[]);


     const getRecipe=async()=>
     {
        const res= await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
            
        );
   
        setRecipe(res.data.hits);
        
     }
   


      const onInputChange=e=>
      {
          setSearch(e.target.value);
      }


       const onSearchClick=()=>{

                getRecipe();

           }


        return (
            <div className="Header1">

         <Header  search={search} onInputChange={onInputChange}   onSearchClick={onSearchClick}/>

            <div className="container">
             <Recipe  recipe={recipe} />
             </div>

           <div className="container"> 
             <div className ="row">
              <div className="col-sm-12  col1 "> </div>

             </div>
           

           </div>

            </div>
        )
    }

export default Header1;