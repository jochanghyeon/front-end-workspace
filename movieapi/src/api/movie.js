import axios from "axios";

// API 키
const key = "7051f228650924504c4f9f387acf9812";

// 1번 문제: 일별 박스오피스 정보 가져오기 함수
export const getDaily = (date) => {
  return axios.get(
    `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${date}`
  );
};

// API 서버 설정
const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// 영화 정보 가져오기
export const getMovies = async () => {
  return await instance.get("movie");
};

// 영화 추가하기
export const addMovie = async (data) => {
  return await instance.post("movie", data);
};

// 영화 삭제하기
export const delMovie = async (id) => {
  return await instance.delete(`movie/${id}`);
};

// 특정 영화 정보 가져오기
export const getMovie = async (id) => {
  return await instance.get(`movie/${id}`);
};

// 영화 정보 업데이트하기
export const updateMovie = async (data) => {
  return await instance.put("movie", data);
};
