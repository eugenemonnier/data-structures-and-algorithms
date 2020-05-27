import math

def iterate_arr(arr, val, add_indx, new_arr):
  for i, elem in enumerate(arr):
    (new_arr.append(val), new_arr.append(elem)) if i == add_indx else new_arr.append(elem)

def insert__shift_arr(arr,val):
  new_arr = []
  add_indx = math.ceil(len(arr) / 2)
  iterate_arr(arr, val, add_indx, new_arr) if len(arr) else new_arr.append(val)
  return new_arr

print(insert__shift_arr([1,2,4,5], 3))