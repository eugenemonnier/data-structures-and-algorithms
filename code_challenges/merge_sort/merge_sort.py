def merge_sort(arr):
    n = len(arr)
    if n > 1:
        mid = n // 2
        left = arr[0:mid]
        right = arr[mid:n + 1]
        left = merge_sort(left)
        right = merge_sort(right)
        merge(left, right, arr)
    return arr

def merge(left, right, arr):
    i, j, k = 0, 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1
        k += 1
    if i == len(left):
        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1
    else:
        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1
    return arr

print(merge_sort([100,20,30, 5]))
