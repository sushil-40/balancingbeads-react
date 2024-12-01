import React from "react";

export const Display = ({ searchedbeads }) => {
  return (
    <div className="display container text-center mb-2">
      {searchedbeads.length > 0 ? (
        <div>
          <h3 className="btn btn-success">Beads Found:</h3>

          <table className="table table-striped mb-5" border={2}>
            <thead>
              <tr className="text-center">
                <th colSpan={4}>
                  Matched Beads According To Tyre Size Provided:
                  <hr />
                </th>
              </tr>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Size</th>
                <th scope="col">Single</th>
                <th scope="col">Dual</th>
              </tr>
            </thead>

            <tbody>
              {searchedbeads.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.size}</td>
                    <td>{item.single}</td>
                    <td>{item.dual}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No result found. Please try a different size.</p>
      )}
    </div>
  );
};
