import React, { useState } from "react";
import ModalForm from "./ModalForm";

function App() {
  const [quantity, setQuantity] = useState(2);
  // open modal
  const [isOpenModal, setModal] = useState(false);
  const amount = 21;
  // changes currency sign based on selected currency in select option

  const openModalFn = () => setModal(!isOpenModal);
  function closeModal() {
    setModal(false);
  }
  function onSubmitFinal(quantity) {
    setQuantity(quantity);
  }

  //write conditional logic to switch between currency opts
  return (
    <div className="app">
      <h1>Checkout</h1>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Unit price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{quantity}</td>
            <td>R{amount}</td> 
            <td>R{amount * quantity}</td>
            <td>
              <button onClick={openModalFn}>
                Edit quantity
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isOpenModal && <ModalForm
      closeModal={closeModal} 
      value={quantity}
      onSubmit={onSubmitFinal}
      />
      }
    </div>
  )
}

export default App;
