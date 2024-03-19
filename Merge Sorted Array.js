var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--];
        } else{
            nums1[k--] = nums2[j--];
        }
    }
    //copy remaining elements from nums2 to nums1
    while(j >= 0){
        nums1[k--] = nums2[j--];
    }
};

//Example usage:
let nums1_1 = [1, 2, 3, 0, 0, 0];
let m_1 = 3;
let nums2_1 = [2, 5, 6];
let n_1 = 3;
merge(nums1_1, m_1, nums2_1, n_1);
console.log(nums1_1);

let nums1_2 = [1];
let m_2 = 1;
let nums2_2 = [];
let n_2 = 0;
merge(nums1_2, m_2, nums2_2, n_2);
console.log(nums1_2);

let nums1_3 = [0];
let m_3 = 0;
let nums2_3 = [1];
let n_3 = 1;
merge(nums1_3, m_3, nums2_3, n_3);
console.log(nums1_3);