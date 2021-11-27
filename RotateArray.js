var rotate = function(nums, k) {
    k = k % nums.length;
    let toBeRotated = nums.splice(0, nums.length - k);
    nums.push(...toBeRotated);
};

nums = [-1,-100,3,99];
k = 2;

rotate(nums, k);


console.log(nums);
