import "./app.css";
import Snipper from "./components/Snipper";

const CHECKOUT_STEPS = [
  {
    name: "uname",
    Component: () => <div> <b className="text-white"> Name: </b> <input type="text" className="form-control  mt-5" placeholder="enter your name" /></div>,
  },
  {
    name: "uemail",
    Component: () => <div> <b className="text-white"> Email: </b> <input type="Email" className="form-control  mt-5" placeholder="enter your Email"/></div>,
  },
  {
    name: "unumber",
    Component: () => <div> <b className="text-white"> Number: </b> <input type="number" className="form-control  mt-5" placeholder="enter your number"/></div>,
  },
  {
    name: "uaddress",
    Component: () =>  <div> <b className="text-white"> Address: </b> <textarea  className="form-control  mt-5" placeholder="enter your name address"/></div>,
  },
];

function App() {
  return (
    <div>
      <h2>stapper form</h2>
      <Snipper step={CHECKOUT_STEPS} />
    </div>
  );
}

export default App;