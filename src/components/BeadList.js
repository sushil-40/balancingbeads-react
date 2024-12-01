import React from "react";

export const BeadList = ({ beadsList }) => {
  return (
    <div className="beads-list-tyre container">
      <table className="table table-striped">
        <thead>
          <tr className="text-center">
            <th colSpan={4}>
              Required Balancing Beads Quantity According To Tyre Size
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
          {beadsList.map((item, i) => {
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
  );
};
