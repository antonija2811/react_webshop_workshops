import React, {Component} from "react";
import './Category.css';
import CategoryImage from './CategoryImage/CategoryImage';

class Category extends Component{ 
  render() {
    return (
      <div className="CategoryCss">
        {this.props.categories.map((category) => 
          {
            if(category === "all") {
              return (
                <div style={{display: 'flex', flexDirection: 'row', height: '1.8rem', fontWeight: 'bold'}}>
                  <li
                    onClick={() => {
                      this.props.setCategory(category)
                    }} 
                    style={{            
                      cursor: "pointer", 
                      display: 'flex', 
                      flexDirection:'row',
                      textTransform: 'capitalize',
                      alignItems: 'center',
                      paddingLeft: '2.3rem'
                    }}
                    
                  >
                    <p className="active">
                      {category}
                    </p>
                    
                  </li>
                  
                </div>
              );
            }
            else {
              return (
                <div style={{display: 'flex', flexDirection: 'row', fontWeight: 'bold'}} key={category}>
                  <li 
                    key={category}
                    onClick={() => {
                      this.props.setCategory(category)
                    }} 
                    style={{
                      cursor: "pointer", 
                      display: 'flex', 
                      flexDirection:'row',
                      textTransform: 'capitalize',
                      alignItems: 'center'
                    }}
                    
                  >
                    <div className="CatImage">
                      <CategoryImage category={category}/>  
                    </div>
                    {category}
                  </li>
                </div>
              );
            }
          }
        )}
      </div>
    );
  }
  
}

export default Category;
