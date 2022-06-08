import React from "react";
import "./OurServices.css";
import { Link } from "react-router-dom";
import Card from "../../Images/Home2Card.png";

function OurServices() {
  return (
    <div className="container-fluid HomePage2MainBody">
      <div className="container">
        <div className="HomePage2Body">
          <h6>Our services</h6>
          <h3>
            Get amazing services for your <span>business</span>{" "}
          </h3>
        </div>

        <div className="HomePage2Flex">
          <div className="HomePage2Cards">
            <div class="card">
              <img src={Card} class="card-img-top" alt="Card image" />

              <div class="card-body">
                <h4 class="card-title">Data Center</h4>

                <p class="card-text">
                  Our integrated systems provides colocation services and cloud
                  services with its growing cloud partners to commercial, public
                  sector and private sector customers.
                </p>

                <Link to="" class="x">
                  <button className="HomePage2Button">Learn more</button>
                </Link>


              </div>
            </div>
          </div>

          <div className="HomePage2Cards">
            <div class="card">
              <img src={Card} class="card-img-top" alt="Card image" />

              <div class="card-body">
                <h4 class="card-title">Data Center</h4>

                <p class="card-text">
                  Our integrated systems provides colocation services and cloud
                  services with its growing cloud partners to commercial, public
                  sector and private sector customers.
                </p>

                <Link to="" class="x">
                  <button className="HomePage2Button">Learn more</button>
                </Link>

              </div>
            </div>
          </div>

          <div className="HomePage2Cards">
            <div class="card">
              <img src={Card} class="card-img-top" alt="Card image" />

              <div class="card-body">
                <h4 class="card-title">Data Center</h4>

                <p class="card-text">
                  Our integrated systems provides colocation services and cloud
                  services with its growing cloud partners to commercial, public
                  sector and private sector customers.
                </p>

                <Link to="" class="x">
                  <button className="HomePage2Button">Learn more</button>
                </Link>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
