---
title: "Python (파이썬)"
category: "프로그래밍 언어"
---

## 변수

규칙 : 스네이크 케이스<br>
값을 저장하는 공간

```python
변수 = 값
```

## 출력

```python
print()
```

sep를 사용하지 않으면 여러 문자들을 공백으로 구분해서 나열된다.<br>
공백이 아닌 다른 특정 구분자로 지정하고 싶다면 sep 안에 지정!

```python
print(a, b, sep='')
```

다음 출력된 값을 이어서 출력하려면 end를 사용한다.

```python
print(a, end=' ')
```

### f

문자열과 변수를 같이 사용할 때

```python
print(f'{a} + {b}')
```

## 입력

```python
input() # 문자열
```

## 데이터 타입

### 타입 확인

```python
type(데이터)
```

### 문자열

```python
'Hello World'
"Hello World"
```

문자열 안에서 큰따옴표(")와 작은따옴표(')를 같이 사용하고 싶다면 이스케이프 문자(escape character)

```python
\"
\'
\\
```

연산자

```python
+
*
```

in 연산자 : 해당 문자가 문자열에 포함되어 있는지 확인

```python
문자 in 문자열
```

인덱싱 : 특정 위치에 있는 문자만 가져온다.

```python
문자열[index] # index는 0부터
```

슬라이싱 : 원하는 위치 범위에 해당하는 문자들만 가져온다.

```python
문자열[index:index]

문자열[index:] # index부터 마지막 글자까지
문자열[:index] # 첫 번째 글자부터 index까지
```

길이

```python
len(문자열)
```

대문자 or 소문자

```python
문자열.upper() # 대문자
문자열.lower() # 소문자
```

문자열 -> 아스키 코드

```python
ord("A") # 65
```

아스키 코드 -> 문자열

```python
chr(65) # A
```

### 문자열 -> 숫자

```python
int(문자열) # 정수
float(문자열) # 실수
```

숫자 -> 문자열

```python
str(숫자)
```

### 숫자

```python
1 # 정수
1.2 # 실수
```

연산자

```python
+
-
*
/
// # 몫
% # 나머지
** # 제곱
```

소수점 이하

```python
round(실수, 소수점이하) # 반올림, 소수점이하 지정 생략 가능 (생략하면 정수 부분까지 출력)
format(실수, '.소수점이하f')
```

절대값

```python
abs(숫자)
```

### 문자열 -> 리스트

공백을 기준으로 자른다. 특정 구분자로 나누고 싶다면 split 안에 지정!

```python
문자열.split()
```

한 글자씩 나누고 싶다면

```python
list(문자열)
```

리스트 -> 문자열

```python
'구분자'.join(리스트)
```

### 리스트

변경할 수 있다.

```python
[데이터, 데이터, ...]
```

각각의 값이 변수들에 바로 할당!

```python
a, b = [1, 2]
print(a) # 1
print(b) # 2
```

데이터에 접근

```python
리스트[index] # 만약 음수라면 뒤에서부터(-1)
```

추가

```python
리스트.append(데이터)
```

수정

```python
리스트[index] = 데이터
```

삭제

```python
리스트.remove(데이터)
```

연산자

```python
+
*
```

in 연산자 : 값이 리스트에 포함되어 있는지 확인

```python
값 in 리스트
```

길이

```python
len(리스트)
```

정렬

```python
리스트.sort() # 리스트 변경 O
sorted(리스트) # 리스트 변경 X
```

거꾸로 정렬

```python
리스트.reverse() # 리스트 변경 O
reversed(리스트) # 리스트 변경 X
```

min, max, sum

```python
min(리스트) # 최솟값
max(리스트) # 최댓값
sum(리스트) # 값을 모두 더함
```

### 튜플

변경할 수 없다.

```python
(데이터, 데이터, ...)
```

소괄호() 없이 사용할 수 있다. 각각의 값이 변수들에 바로 할당!

```python
a, b = 1, 2
print(a) # 1
print(b) # 2
```

### 딕셔너리

```python
변수 = {
    키: 값,
    키: 값,
    ...
}
```

데이터에 접근

```python
변수.get(키)
변수[키]
```

딕셔너리에 추가하기

```python
딕셔너리[새로운 키] = 새로운 값
```

딕셔너리에서 삭제하기

```python
딕셔너리.pop(키)
```

### Boolean

```python
True
False
```

### 논리 연산자

not : 아니다

```python
not True # False
not False # True
```

and : 그리고

```python
True and True # True
True and False # False
False and True # False
False and False # False
```

or : 또는

```python
True or True # True
True or False # True
False or True # True
False or False # False
```

## 조건문

```python
if 조건:
    조건이 True
else:
    조건이 False
```

### 삼항 연산자

```python
조건이 True if 조건 else 조건이 False
```

### elif

elif는 여러개 사용

```python
if 조건 A:
    조건 A가 True
elif 조건 B:
    조건 A가 False이면서, 조건 B가 True
else:
    모든 조건이 False
```

## 반복문

### while

```python
while True:
    if 조건
        break # 벗어나고 싶을 때
        continue # 건너뛰고 싶을 때
```

### for

```python
for i in range(n): # range 함수 대신 문자열, 리스트, 튜플, 딕셔너리 사용 가능!
    print(i)
```

range

```python
range(a) # 0부터 a-1까지
range(a, b) # a부터 b-1까지
range(a, b, c) # a부터 c만큼의 차이를 가지고 b-1까지
```

## 함수

규칙 : 스네이크 케이스<br>
매개변수랑 return은 선택사항! 매개변수는 여러개가 올 수 있다.

```python
def 함수(매개변수):
    return 결과값
```

호출

```python
함수(매개변수)
```

키워드 매개변수

```python
def 함수(매개변수=값):
    return 결과값

함수(매개변수=값)
```

### 함수를 매개변수로 전달

```python
map(함수, 리스트) # 새로운 리스트 구성
filter(함수, 리스트) # 리턴된 값이 True인 새로운 리스트 구성
```

### 람다

```python
lambda 매개변수: 리턴값
```

## 예외처리

```python
try:
    실행할 코드
except:
    예외 발생시 실행할 코드
```

## 클래스

규칙 : 캐멀 케이스 (대문자로 시작)

```python
class 클래스:
    변수 = 값

    def __init__(self, 매개변수): # 생성자
        pass

    def 메서드(self, 매개변수): # 메서드 : 클래스가 가지고 있는 함수
        pass
```

인스턴스 : 클래스 기반으로 만들어진 객체

```python
인스턴스 = 클래스()

인스턴스.변수
인스턴스.메서드()
```

## 모듈

```python
import 모듈
from 모듈 import 변수 or 함수
```

파이썬 표준 모듈 문서 : https://docs.python.org/3/library

### random

```python
from random import randint
choice = randint(1, 50) # 1~50까지의 수 중에서
```

### 외부 모듈 설치하기

```python
pip install 모듈
```
