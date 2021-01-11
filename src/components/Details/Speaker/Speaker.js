import React from 'react';
import {filter} from 'lodash';
import './Speaker.css';


const speaker = (props) => {
    const userList = props.users;
    console.log(props.users);
    console.log(props.userId);
    
    let filtered = null;
    filtered = filter(userList, {id: props.userId});
    console.log(filtered);
    return (
        <div>
            {filtered.map(item => {
                return(
                    <div className="Speaker">
                        <p style={{margin: '0', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 'bold', paddingRight: '0'}}>With </p> 
                        <div
                            style={{fontSize: '1.1rem', fontWeight: 'bold', paddingLeft: '0.6rem'}}
                            key={item}
                        >
                            {item.name}
                        </div>
                    </div>
                    
                );
            })}
        </div>
    );
    
}

export default speaker;