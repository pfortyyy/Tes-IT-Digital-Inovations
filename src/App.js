import "./styles.css";

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(e) {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setNumber(value);
  }

  function handleSubmit() {
    if (number === "") {
      setResult(0);
      return;
    }

    const original = parseInt(number, 10);
    const reversed = parseInt(number.split("").reverse().join(""), 10);
    const difference = Math.abs(original - reversed);
    setResult(difference);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={number} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}

//   return (
//     <div className="App">
//       <div>
//         Number: <input />
//         <button>Submit</button>
//       </div>
//       <div>Result: 0</div>
//     </div>
//   );
// }
