---
title: "JavaScript (자바스크립트)"
category: "프로그래밍 언어"
---

## const와 let

상수 : 값을 수정할 수 없다.

```js
const 변수 = 값;
```

변수 : 값을 수정할 수 있다.

```js
let 변수 = 값;
변수 = 값;
```

## 출력

```js
console.log();
```

## 데이터 타입 확인

```js
typeof 데이터;
```

## 문자열

```js
"Hello World";
```

### 템플릿 문자열

문자열과 변수를 같이 사용할 때

```js
`${a}`;
```

### 연산자

```js
+
```

### 인덱싱

특정 위치에 있는 문자만 가져온다.

```js
문자열[index]; // index는 0부터
```

### 길이

```js
문자열.length;
```

### 대문자 or 소문자

```js
문자열.toUpperCase(); // 대문자
문자열.toLowerCase(); // 소문자
```

### 문자열 -> 숫자

```js
Number(문자열);
```

### 숫자 -> 문자열

```js
String(숫자);
숫자.toString();
```

## 숫자

```js
1; // 정수
1.2; // 실수
```

### 실수 -> 정수

```js
parseInt(실수);
```

### 연산자

```js
+
-
*
/
% // 나머지
** // 제곱
```

## undefined와 null

```js
undefined; // 정의되지 않음
null; // 아무것도 없음
```

## Boolean

```js
true;
false;
```

### 비교 연산자

```js
=== // 같다
!== // 다르다
>, < // 크다
>=, <= // 크거나 같다
```

### 논리 연산자

! : 아니다

```js
!true; // false
!false; // true
```

&& : 그리고

```js
true && true; // true
true && false; // false
false && true; // false
false && false; // false
```

|| : 또는

```js
true || true; // true
true || false; // true
false || true; // true
false || false; // false
```

### 다른 자료형 -> Boolean

0, NaN, "", null, undefined는 false로 변환한다. 나머지는 true

```js
Boolean(데이터);
```

## 조건문

```js
if(조건) {
    조건이 true
} else {
    조건이 false
}
```

### 삼항 연산자

```js
조건 ? 조건이 true : 조건이 false
```

### else if

else if는 여러개 사용

```js
if(조건 A) {
    조건 A가 true
} else if(조건 B) {
    조건 A가 false이면서, 조건 B가 true
} else {
    모든 조건이 false
}
```

### switch

```js
switch(데이터) {
    case 조건 A:
        조건 A가 true
        break
    case 조건 B:
        조건 B가 true
        break
    default:
        모든 조건이 false
        break
}
```

## 배열

```js
const 배열 = [데이터, 데이터, 데이터, ...]
```

### 문자열 -> 배열

공백을 기준으로 자른다. 특정 구분자로 나누고 싶다면 split 안에 지정

```js
문자열.split();
```

### 배열 -> 문자열

특정 구분자로 나누고 싶다면 join 안에 지정

```js
배열.join();
```

### 데이터에 접근

```js
배열[index]; // 만약 음수라면 뒤에서부터(-1)
```

### 인덱스 찾기

```js
const 인덱스 = 배열.index.Of(데이터);
```

### 추가

```js
배열.push(데이터); // 맨 뒤에 추가
배열.unshift(데이터); // 맨 앞에 추가
배열.splice(index, 0, 데이터); // 원하는 위치에 추가
```

### 삭제

```js
배열.pop(); // 맨 뒤에 데이터삭제
배열.shift(); // 맨 앞에 데이터 삭제
배열.splice(인덱스, 1); // 원하는 위치에 데이터 삭제
```

### 길이

```js
배열.length;
```

### 정렬

```js
배열.sort();
배열.sort((a, b) => a - b); // 숫자 정렬
```

### 거꾸로 정렬

```js
배열.reverse();
```

## 반복문

### while

```js
while (true) {
  if (조건) {
    break; // 벗어나고 싶을 때
    continue; // 건너뛰고 싶을 때
  }
}
```

### for

```js
for (let i=0; i<반복 횟수; i++) {
    console.log(i)
}
```

for in

```js
for (const 인덱스 in 배열) {
  console.log(인덱스);
}
```

for of

```js
for (const 값 of 배열) {
  console.log(값);
}
```

## 함수

선언적 함수

```js
function 함수(매개변수) {
  return 결과값;
}
```

익명 함수

```js
const 함수 = function (매개변수) {
  return 결과값;
};
```

화살표 함수

```js
const 함수 = (매개변수) => {
  return 결과값;
};
```

호출

```js
함수(매개변수);
```

### 콜백 함수

forEach : 값을 하나씩 가져올 수 있다.

```js
배열.forEach((value, index, array) => {});
```

map : 리턴한 값들을 기반으로 새로운 배열을 만든다.

```js
배열.map((value, index, array) => {});
```

filter : 리턴한 값들이 true인 것들만 모아서 새로운 배열을 만든다.

```js
배열.filter((value, index, array) => {});
```

reduce : 하나의 결과값을 반환한다.

```js
배열.reduce((accumulator, currentValue, index, array) => {}, 초기값);
```

## 객체

```js
const 변수 = {
  키: 값,
  키: 값,
  ...
};
```

### 데이터에 접근

```js
변수[키];
변수.키;
```

### 추가

```js
변수.새로운 키 = 새로운 값;
```

### 삭제

```js
delete 변수.키;
```

## 예외처리

```js
try {
    실행할 코드
} catch(exception) {
    예외 발생시 실행할 코드
}
```

### 예외 강제 발생

```js
throw new Error();
```

## 클래스

규칙 : 캐멀 케이스 (대문자로 시작)

```js
class 클래스 {
  constructor() {
    // 생성자 코드
  }

  메서드() {
    // 클래스가 가지고 있는 함수
    return 결과값;
  }
}
```

### 인스턴스

클래스 기반으로 만들어진 객체

```js
const 인스턴스 = new 클래스();
인스턴스.메서드();
```

### Math

입력값을 반올림한 수와 가장 가까운 정수 값을 반환

```js
Math.round();
```
