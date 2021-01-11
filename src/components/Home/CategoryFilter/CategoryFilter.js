import React, { useState } from "react";
import "./CategoryFilter.css";
import Category from "./Category/Category";
import ItemList from "../ItemList/ItemList";

const CategoryFilter = (props) => {
  const [loadMore, setLoadMore] = useState(false);

  return (
    <div className="CategoryFilter">
      <div className="Categories">
        <div className="CategoryBox">
          <div className="FilterCategory">
            Filter by category
          </div>
          <ul>
            <Category
              categories={props.categories}
              setCategory={props.setCategory}
            />
          </ul>
        </div>
      </div>
      <div className="Results">
        <div className="ResultTitle">
          <h2>Workshops</h2>
          <p className="Displayed" style={{color: '#7F7F7F', fontWeight: 'bold'}}>
            Displayed: <strong style={{color: 'black', fontWeight: 'bold'}}>{props.workshops.length}</strong>
          </p>
        </div>
        {props.workshops.length > 9 ? (
          <>
            <ItemList
              displayCategory={props.displayCategory}
              workshops={
                loadMore ? props.workshops : props.workshops.slice(0, 9)
              }
            />
            {loadMore ? null : (
              <div
                onClick={() => setLoadMore(true)}
                style={{
                  cursor: "pointer",
                  margin: "2rem 0",
                  justifyContent: "center",
                  display: 'flex',
                }}
              >
                <p style={{
                  width: "5.2rem",
                  fontSize: '1rem',
                  borderBottom: "2px solid #0097CC",
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                  Load More
                </p>
              </div>
            )}
          </>
        ) : (
          <ItemList
            displayCategory={props.displayCategory}
            workshops={props.workshops}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
