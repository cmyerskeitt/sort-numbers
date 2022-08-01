function solution(nums){
    if (nums !== null){
      return nums.sort(function(a,b){return a-b})
    } else {
      return []
    }
  }