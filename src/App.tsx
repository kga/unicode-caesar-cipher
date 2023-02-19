import { useState } from "react";
import { encrypt } from "./encrypt";

function App() {
  const q = "徳川綱吉は江戸幕府第何代将軍？";

  const [shiftNum, setShiftNum] = useState(1);
  const [question, setQuestion] = useState(q);

  return (
    <>
      <input
        type="number"
        onChange={(e) => setShiftNum(Number(e.target.value))}
        value={shiftNum}
      />
      <input
        type="text"
        onChange={(e) => setQuestion(e.target.value)}
        value={question}
        size={30}
      />
      <input
        type="text"
        value={encrypt(shiftNum, question)}
        size={30}
        readOnly={true}
      />
    </>
  );
}

export default App;
