import React from 'react'



const Header=(props)=> {
   const{search,onInputChange,onSearchClick} =props;
      
        return (

                <div className="jumbotron">
                <h1 className="display-1">
                <span className="material-icons brand-icon">fastfood</span><b>Food Coholic </b> </h1>

       <div className="input-group w-50 mx-auto">
                  <input type="text" className="form-control" placeholder="Enter your favourite Recipe..... " 
                   value={search}   onChange={onInputChange}
                aria-label=" Recipient's username" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
           <button className="btn btn-dark" onClick={onSearchClick} >Search</button></div>


    
    </div>
        
          </div>
          
      

    
        )



        }
    


export default Header;
