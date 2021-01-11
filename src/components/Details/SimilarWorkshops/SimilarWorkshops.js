import React from 'react';
import './SimilarWorkshops.css';
import {WorkshopConsumer} from '../../../context';
import Item from '../../Home/ItemList/Item/Item';
import {filter, reject} from 'lodash';

const similarWorkshops = (props) => {
    let tempWorkshops = null;
    let filtered = null;
    let filteredWorkshop = null;

    return(
        <WorkshopConsumer>
            {value => {
                tempWorkshops = value.workshops;
                filtered = filter(tempWorkshops, {category: props.category});
                filteredWorkshop = reject(filtered, {id: props.id});

                if(filteredWorkshop.length >= 3) {
                    return (
                        <div className="SimilarWorkshops">
                            <h2>Similar workshops</h2>
                            <div className="SimWorkshop">
                            
                                {filteredWorkshop.slice(0,3).map(workshop => {
                                return <Item key={workshop.id} item={workshop}/>
                                })}
                            </div>
                        </div>
                    );
                }
                else {
                    return null;
                }
            }}
        </WorkshopConsumer>
    );

}

export default similarWorkshops;