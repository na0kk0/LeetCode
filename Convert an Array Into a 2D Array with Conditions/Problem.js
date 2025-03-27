/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let solution = []
    function backtrack(array, nums, solution)
    {
      let newNums = []
      if(nums.length == 0)
      {
        return
      }
      for(let i = 0; i < nums.length; i++)
      {
        if(!(array.includes(nums[i])))
        {
          array.push(nums[i])
        }else
        {
          newNums.push(nums[i])
        }
      }
      solution.push(array)
      backtrack([], newNums, solution)
    }
    backtrack([], nums, solution)
    return solution
  };
