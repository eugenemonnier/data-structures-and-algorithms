def mid_point (arr, index, key, lL, hL):
  index = (lL + hL) // 2

  if (arr[index] == key): return index
  elif (lL > hL): return -1
  elif (arr[index] < key): return mid_point(arr, index, key, index + 1, hL)
  else: return mid_point(arr, index, key, lL, index - 1)

def binary_search (arr, key):
  if not arr: return -1
  index, lower_limit, higher_limit = 0, 0, len(arr) - 1
  return mid_point(arr, index, key, lower_limit, higher_limit)
