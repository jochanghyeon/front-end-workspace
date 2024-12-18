import axios from "axios";
// fetch ~ then
// fetch : 요청을 Promise 기반으로 처리하는 API
// then : 요청이 끝나고 응답받을시 데이터 처리

export const getFetchThen = () => {
  return fetch("http://localhost:8080/api/movie").then((response) => {
    return response.json(); //json이 Promise 객체로 바꿔줌 console창에서 fullfilled 뜨면 성공
  });
};

// async ~ await
// Promise 기반의 비동기 작업을 동기적 코드처럼 작성할 수 있게 해주는 문법
export const getAwait = async () => {
  const response = await fetch("http://localhost:8080/api/movie");
  return response.json();
};

// axios (async ~ await)
// axios는 Promise 기반 HTTP 클라이언트로, fetch보다 간결하고 많은 기능 제공
// JSON 데이터 자동으로 파싱
export const getAxios = async () => {
  const response = await axios.get(); // get방식이면 get put방식이면 put delete 방식이면 delete 이런식
};
