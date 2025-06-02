function twoSum(nums: number[], target: number): number[] {
  const numMap: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// Submission link:
// https://leetcode.com/problems/two-sum/submissions/1652143346/
// https://leetcode.com/problems/two-sum/submissions/1652149548/ -> 100%

function twoSum_2(nums: number[], target: number): number[] {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
  return [];
}

console.log(twoSum_2([2, 7, 11, 15], 9));
console.log(twoSum_2([3, 2, 4], 6));
console.log(twoSum_2([3, 3], 6));

// Submission link:
// https://leetcode.com/problems/two-sum/submissions/1652149891/
