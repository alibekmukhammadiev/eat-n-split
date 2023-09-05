import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ onSplitBill, friendsArr, friendName, onActive }) {
  const [billValue, setBillValue] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [whoPay, setWhoPay] = useState("user");
  const friendExpense = +billValue - +userExpense;
  function handleSubmit(e) {
    e.preventDefault();
    for (let i of friendsArr) {
      if (i.name === friendName) {
        if (whoPay === "user") {
          i.balance -= friendExpense;
          onSplitBill((prev) => [...prev]);
        } else {
          i.balance += +userExpense;
          onSplitBill((prev) => [...prev]);
        }
      }
    }

    setBillValue("");
    setUserExpense("");
    onActive(false);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friendName}</h2>

      <label>💍 Bill value</label>
      <input
        onChange={(e) => {
          setBillValue(e.target.value);
        }}
        value={billValue}
        type="text"
      />

      <label>👸 Your expense</label>
      <input
        onChange={(e) => {
          const value = e.target.value;
          // Check if the input value is empty or less than 0
          if (value === "" || billValue === "") {
            setUserExpense("0");
          } else {
            if (Number(value) < Number(billValue)) {
              if (value.startsWith("0")) {
                const newValue = value.slice(1);
                setUserExpense(newValue);
              } else {
                setUserExpense(value);
              }
            }
          }
        }}
        value={userExpense}
        type="text"
      />

      <label>💑 {friendName}'s expense</label>
      <input value={friendExpense} type="text" disabled />

      <label>🎅 Who is paying the bill</label>
      <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
        <option value="user">You</option>
        <option value={friendName}>{friendName}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
export default FormSplitBill;
