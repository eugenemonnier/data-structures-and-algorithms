def insertion_sort(arr):
    for index, num in enumerate(arr):
        idx = index
        while idx > 0 and num < arr[idx - 1]:
            arr[idx] = arr[idx - 1]
            idx -= 1
        arr[idx]= num
    return arr


print(insertion_sort([2,3,5,7,13,11]))
