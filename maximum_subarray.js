/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let acc = 0;
  const max_acc = {};
  max_acc[-1] = 0;
  let max_sum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    acc = acc + nums[i];

    max_acc[i] =
      max_acc[i - 1] + nums[i] > nums[i] ? max_acc[i - 1] + nums[i] : nums[i];

    if (max_acc[i] > max_sum) {
      max_sum = max_acc[i];
    }
  }

  return max_sum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([8, -19, 5, -4, 20]));

// Submission link:
// https://leetcode.com/problems/maximum-subarray/submissions/1672040750/
