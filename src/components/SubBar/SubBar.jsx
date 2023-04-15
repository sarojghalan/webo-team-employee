import React from "react";

const SubBar = ({title , filterMode=false}) => {
  return (
    <>
      <div className="sub-bar">
        <div className="row">
          <div className="col-md-6">
            <div className="search-bar">
              <input type="text" placeholder="Search item ..."/>
              <span className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
              {filterMode && <div className="filter-btn">
                <button>
                  {" "}
                  <span className="filter-icon">
                    <i class="fa-solid fa-filter"></i>
                  </span>
                  Filter
                </button>
              </div> }
            </div>
          </div>
          <div className="col-md-6">
            <div className="add-btn">
              <button><span className="add-icon"><i class="fa-solid fa-plus"></i></span>
              Add {title}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubBar;
