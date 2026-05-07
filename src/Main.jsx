import properties from "./Data";
import React, { useState } from "react";

function MainContent() {
 
  const [searchTerm, setSearchTerm] = useState("");

  // Safe filtering
  const filteredProperties =
    searchTerm.trim() === ""
      ? []
      : (properties || []).filter((val) =>
          val.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.title?.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="overlay"></div>

        <div className="content text-white">
          <h1 className="fs-1 fw-bold mb-3">Find Your Dream Property</h1>
          <p className="fs-3 mb-4">Search from thousands of listings</p>

          {/* Search Bar */}
          <div className="search-box d-flex flex-column flex-md-row gap-2 justify-content-center">
            <input
              type="text"
              className="form-control"
              placeholder="Enter location or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      
      {/* Results Section */}
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {filteredProperties.length === 0 ? (
 <div className="fixed-banner ">
  <div className="wobble-text">
    No properties found ! Pls Search
  </div>
</div>




          ) : (
            filteredProperties.map((val) => (
              <div className="col" key={val.id}>
                <div className="card shadow-sm">
                  <img
                    src={val.image}
                    className="card-img-top"
                    alt={val.title}
                    height="225"
                  />

                  <div className="card-body">
                    <h5>{val.title}</h5>
                    <p className="card-text">{val.location}</p>
                    <p className="card-text">{val.type}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MainContent;