import React from 'react';
import "./App.css";


  const Recipe=(props)=>{

   const {recipe}= props;

        return (
           <React.Fragment>
            <h2>All Recipes</h2>  <br/><br/>
               



          <div class="row">

        {
            recipe.map(recipe =>(
              <div class="col-md-3">
                <div class="card py-2 text-center"> 
                <img src={recipe.recipe.image} className="img-fluid w-50 mx-auto rounded-circle"/>
                <div class="card-body"> 
                <h5>{recipe.recipe.label}</h5>
                
                </div>
                </div>  
             </div>

            ))
        
         }
         </div>

        </React.Fragment>
        )
  }

export default Recipe ;
