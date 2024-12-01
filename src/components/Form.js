import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <div className="form container mb-5">
      <form className="search-form" action="" onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            // onChange={handleOnChange}
            name="sizeInput"
            className="form-control me-2"
            placeholder=" Enter tyre size"
            aria-label="tyre-size"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-secondary"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
