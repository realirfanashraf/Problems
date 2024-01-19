

const isFascinating = function(n) {
    const n2 = 2 * n;
    const n3 = 3 * n;
    const num = `${n}${n2}${n3}`;
    const nums = num.split('');

    if (nums.length > 9) {
        return false;
    }

    const digitSet = new Set(nums);

    return digitSet.size === 9 && !digitSet.has('0');
}

