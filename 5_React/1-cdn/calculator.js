/*export 내보내기 다른곳에서도 사용할수있나봄*/
export const a = 5;
export const b = 10;

export const plus = () => {
  return a + b;
};
export const minus = () => {
  return a - b;
};

export default{ a, b, plus, minus };