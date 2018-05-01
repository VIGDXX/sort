(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.Sort = factory());
}(this, (function () {

    var Sort = {
        bubbleSort: function (arr) {
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
        quickSortA: function (array) {
            function sort(prev, numsize) {
                var nonius = prev;
                var j = numsize - 1;
                var flag = array[prev];
                if ((numsize - prev) > 1) {
                    while (nonius < j) {
                        for (; nonius < j; j--) {
                            if (array[j] < flag) {
                                array[nonius++] = array[j];　//a[i] = a[j]; i += 1;
                                break;
                            };
                        }
                        for (; nonius < j; nonius++) {
                            if (array[nonius] > flag) {
                                array[j--] = array[nonius];
                                break;
                            }
                        }
                    }
                    array[nonius] = flag;
                    sort(0, nonius);
                    sort(nonius + 1, numsize);
                }
            }
            sort(0, array.length);
            return array;
        },
        quickSort: function(arr) {
            if(arr.length <= 1) return arr
            var left = [];
            var right = [];
            var pivotIndex = Math.floor(arr.lenght / 2);
            var pivot = arr.splice(pivotIndex,1)[0];
            arr.forEach(function(item) {
                if(item <= pivot) {
                    left.push(item)
                } else {
                    right.push(item)
                }
            })
            return this.quickSort(left).concat(pivot, this.quickSort(right))

        }

    }

    return Sort
})));