import React from 'react';
import frontend from './frontend.png';
import design from './design.png';
import backend from './backend.png';
import marketing from './marketing.png';
import {filter} from 'lodash';
import './CategoryImage.css';

const categoryImage = (props) => {
    const pictures = [
        {category: "frontend", image: frontend},
        {category: "marketing", image: marketing},
        {category: "design", image: design},
        {category: "backend", image: backend},
    ];

    let filtered = null;
    filtered = filter(pictures, {category: props.category});
    
    return(
        <div className="CategoryImage">
            {filtered.map(item => {
                return (
                    <div 
                        key={item} 
                        style={{
                            alignItems: 'center',  
                            justifyContent: 'center',
                            width: '100%', 
                            display: 'flex', 
                            height: '100%',
                            padding: '0.2rem 0.1rem' 
                    }}>
                        <img src={item.image} alt="filtered"/>
                    </div>
                ); 
            })}
        </div>
    );
}

export default categoryImage;