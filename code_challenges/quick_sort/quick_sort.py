import random

def quick_sort(arr, left = 0, right = None):
    if not right: right = len(arr) - 1
    if len(arr) > 1:
        position = partition(arr, left, right)
        if left < position - 1: quick_sort(arr, left, position - 1)
        if position < right: quick_sort(arr, position, right)
    return arr

def partition(arr, left, right):
    pivot_num = random.randint(0, right - left) + left
    print('index: ' + str(pivot_num))
    pivot = arr[pivot_num]
    print(pivot)
    while left <= right:
        while arr[left] < pivot: left += 1
        while arr[right] > pivot: right -= 1
        if left <= right:
            swap(arr, left, right)
            left += 1
            right -= 1
    return left

def swap(arr, left, right):
    temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
