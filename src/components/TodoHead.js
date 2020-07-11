import React from "react";
import styled from "styled-components";

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
const week = new Array("일", "월", "화", "수", "목", "금", "토");
let day = date.getDay();
let yoil = date.getDate();
const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;

  border-bottom: 24px;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;
function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>
        {year}년 {month}월 {yoil}일
      </h1>
      <div className="day">{week[day]}요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
