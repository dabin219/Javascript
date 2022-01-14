//기말고사 망친 뒤 최대값을 골라 모든 점수를 점수/최댓값*100으로 고치고 평균을 구해 행복회로 돌리는 문제

const dreamAverage = (nums) => {
  const max = Math.max(...nums);
  const arr = [];
  nums.map((num) => {
    arr.push(num / max * 100)
  });
  const average = arr.reduce((a, b) =>
    a + b, 0) / arr.length;
  return average;
};

dreamAverage([45, 56, 89]);
