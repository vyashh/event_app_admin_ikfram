import React from "react";
import NavBar from "../../components/navbar/navbar_component";
import SideBar from "../../components/sidebar/sidebar_component";

export default function EventAdd() {
  return (
    <>
      <NavBar />
      <SideBar activeNav="2">
        <h1>Add Event</h1>
        <div className="card-body px-lg-5 pt-0">
          <form className="text-center" action="#!">
            <div className="md-form mt-3">
              <input
                type="text"
                id="materialContactFormName"
                className="form-control"
              />
              <label htmlFor="materialContactFormName">Name</label>
            </div>

            <div class="md-form">
              <input
                type="text"
                id="materialContactFormEmail"
                class="form-control"
              />
              <label>Teamleader</label>
            </div>
          </form>
        </div>
      </SideBar>
    </>
  );
}
