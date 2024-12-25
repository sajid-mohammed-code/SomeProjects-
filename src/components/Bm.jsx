import { useState } from "react";

function Mb() {
  const [weight, setWeight] = useState();
  const [height, setHight] = useState();
  const [bmi, setBmi] = useState();
  const [message, setMessage] = useState();
  const bmical = (e) => {
    console.log(e);
    event.preventDefault();
    if (height === 0 || weight === 0) {
      alert("enter hight and wat");
    } else {
      let bi = (weight / (height * height)) * 703;
      setBmi(bi.toFixed(1));
      if (bi < 25) {
        setMessage("you are underweight");
      } else if (bi > 25 && bi < 30) {
        setMessage("good weght ");
      } else {
        setMessage("overweight");
      }
    }
  };

  return (
    <>
      <h1>BMI _Calculater</h1>
      <div>
        <form onSubmit={bmical} className="flex gap-3">
          <div>
            <label>Weigth (bls)</label>
            <input
              className="border-2 border-black"
              type="text"
              placeholder="enter your weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Hight (in)</label>
            <input
              className="border-2 border-black"
              type="text"
              placeholder="enter your Height"
              value={height}
              onChange={(e) => setHight(e.target.value)}
            />
          </div>
          <div>
            <button className="px-3 py-1 rounded-lg bg-green-700" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div>
          <h3>YOUR BMI is : {bmi} </h3>
          <p> {message}</p>
        </div>
      </div>
    </>
  );
}
export default Mb;
