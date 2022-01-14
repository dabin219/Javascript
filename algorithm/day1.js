const uniqueElement = (nums) => {
  const arr = [];
  nums.map((num) => {
    arr.push(num % 42);
  })
  const set = new Set(arr);
  const answer = [...set];
  return answer.length;
};

uniqueElement([1,2,3,4,5,6,7,8,5,8]);
