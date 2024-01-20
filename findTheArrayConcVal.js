var findTheArrayConcVal = function(nums) {
    let result = 0;

    while (nums.length > 0) {
        if (nums.length === 1) {
            result += nums[0];
        } else {
            let join = Number(nums[0].toString() + nums[nums.length - 1]);
            result += join;
        }

        nums.pop();
        nums.shift();
    }

    return result;
};