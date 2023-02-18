import { useState } from "react";

function App() {
  const q = "徳川綱吉は江戸幕府第何代将軍？";

  const encrypt = (shiftNum: number, question: string): string =>
    Array.from(question)
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
      <input type="text" value={encryptedQuestion} size={30} readOnly={true} />
    </>
  );
}

export default App;
