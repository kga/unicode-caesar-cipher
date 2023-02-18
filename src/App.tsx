import React, { useState } from "react";
import "./App.css";

function App() {
  const q = "徳川綱吉は江戸幕府第何代将軍？";

  const encrypt = (shiftNum: number, question: string): string => Array.from(question)
    .map((c) => String.fromCodePoint(c.charCodeAt(0) + shiftNum))
    .join("");

  const [shiftNum, setShiftNum] = useState(1);
  const [question, setQuestion] = useState(q);
  const [encryptedQuestion, setEncryptedQuestion] = useState(
    encrypt(shiftNum, question)
  );

  const handleShiftNumChange = (shiftNum: number) => {
    setEncryptedQuestion(encrypt(shiftNum, question));
    return shiftNum;
  };

  const handleQuestionChange = (question: string) => {
    setEncryptedQuestion(encrypt(shiftNum, question));
    return question;
  };

  return (
    <>
      <header>
        <h1>Unicode シーザー暗号化</h1>
      </header>
      <main>
        <form>
          <input
            type="number"
            onChange={(e) => {
              setShiftNum(handleShiftNumChange(Number(e.target.value)));
            }}
            value={shiftNum}
          />
          <input
            type="text"
            onChange={(e) => {
              setQuestion(handleQuestionChange(e.target.value));
            }}
            value={question}
            size={30}
          />
          <input
            type="text"
            value={encryptedQuestion}
            size={30}
            readOnly={true}
          />
        </form>
      </main>
      <footer>
        <a href="https://youtu.be/h9xUvzJdRrA">https://youtu.be/h9xUvzJdRrA</a>
      </footer>
    </>
  );
}

export default App;
