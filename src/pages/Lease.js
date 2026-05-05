import React from "react";
import D1 from "../images/D1.jfif";
import D2 from "../images/D2.jfif";
import D3 from "../images/D3.jfif";
import D5 from "../images/D5.jfif";
import D6 from "../images/D6.jfif";
import D7 from "../images/D7.jfif";
import D8 from "../images/D8.jfif";

const properties = [
  {
    title: "Luxury 4 Bedroom Duplex",
    location: "Maitama, Abuja",
    price: "₦450,000,000",
    time: "3 days ago",
    image: D1,
  },
  {
    title: "Modern 3 Bedroom Apartment",
    location: "Wuse 2, Abuja",
    price: "₦180,000,000",
    time: "4 days ago",
    image: D2,
  },
  {
    title: "Spacious 5 Bedroom Villa",
    location: "Asokoro, Abuja",
    price: "₦750,000,000",
    time: "5 days ago",
    image: D3,
  },
  {
    title: "Affordable 2 Bedroom Flat",
    location: "Lugbe, Abuja",
    price: "₦65,000,000",
    time: "2 days ago",
    image: D5,
  },
  {
    title: "Luxury 4 Bedroom Duplex",
    location: "Maitama, Abuja",
    price: "₦450,000,000",
    time: "3 days ago",
    image:D6,
  },
  {
    title: "Modern 3 Bedroom Apartment",
    location: "Wuse 2, Abuja",
    price: "₦180,000,000",
    time: "4 days ago",
    image: D7,
  },
  {
    title: "Spacious 5 Bedroom Villa",
    location: "Asokoro, Abuja",
    price: "₦750,000,000",
    time: "5 days ago",
    image: D8,
  },
  
];

const RealEstateCards = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold">Properties</h2>

      <div className="row g-4">
        {properties.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden">

              {/* IMAGE */}
              <div
                style={{
                  height: "200px",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* CONTENT */}
              <div className="card-body">
                <h6 className="fw-bold mb-1">{item.title}</h6>

                <p className="text-muted mb-2">
                  📍 {item.location}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-success">
                    {item.price}
                  </span>

                  <small className="text-muted">
                    {item.time}
                  </small>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealEstateCards;