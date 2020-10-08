import React, { useState } from "react";
import Try from "./Try";

function getNumbers() {
  //숫자 4개를 랜덤하게 겹치지 않고 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}
const NumberBaseball = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSumbitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join("")) {
      setResult("홈런!");
      setTries((prevTries) => {
        return [...prevTries, { try: this.state.value, result: "홈런!" }];
      });
      alert("게임을 다시 시작합니다!");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    } else {
      //답 틀렸으면
      const answerArray = this.state.value.split().map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        setResult(
          `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(",")}였습니다!`
        );
        alert("게임을 다시 시작합니다!");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevState) => [
          ...prevTries,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다`,
          },
        ]);
        setValue("");
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSumbit={onSumbitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도 :`} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

export default NumberBaseball; //import NumberBaseball;

//node에서는 require 쓰고 React에서는 import, export를 쓴다
//const React = require('react');
//exports.hello = 'hello';
//module.exports = NumberBaseaball;
