import React from "react";

const Carts = () => {
  return (
    <div className="container">
      <h2 className=" text-center">Cart</h2>
      <table className="text-center table__cart ">
        <thead className=" table__head">
          <tr>
            <th colspan="2">Product</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr>
            <td>
              <img
                src="/img/799d5aa6f69bed4a46a282456a6ab37e.png"
                width={140}
                alt=""
              />
            </td>
            <td>Adias</td>
            <td>1000</td>
            <td>
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </td>
            <td>1000</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
        <button type="submit" className="btn btn-warning">
          submit order
        </button>
      </table>
    </div>
  );
};

export default Carts;
