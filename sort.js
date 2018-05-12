(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.Sort = factory());
}(this, (function () {

    var Sort = {
        bubbleSort: function(arr) {
            var i = arr.length;
            var j;
            var temp;
            while(i > 1) {
                for(j=0;j < i-1; j++) {
                    if(arr[j] > arr[j+1]) {
                        temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
                i--;
            }
            return arr
        },
        quickSort: function(arr) {
            /**
             * @description 对数组的一部分进行排序,快排的基准为取待排序部分首项
             * @param {Number} i  待排序部分开始位置
             * @param {Number} j 待排序部分结束位置
             */
            function sort(i,j) {
                if(i >= j) {return} // 递归出口 
                let start = i;
                let end = j;
                while(i < j) {
                    for(;j>i;j--) {
                        if(arr[i] > arr[j]) {
                            [arr[j],arr[i]] = [arr[i],arr[j]];
                            break;
                        } 
                    }
                    for(;i<j;++i) {
                        if(arr[i] > arr[j]) {
                            [arr[j],arr[i]] = [arr[i],arr[j]];
                            break;
                        } 
                    }
                }
                // 此时 i == j , arr[i] 左边的小于等于 arr[i]，右边的大于arr[i]
                sort(start,i-1);
                sort(i+1,end)
            }
            sort(0,arr.length - 1);
            return arr;
        }

    }

    return Sort
})));
