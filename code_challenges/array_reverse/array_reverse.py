def __reverseArray__(arr):
  reverseArr = []
  for x in range(0, len(arr)):
    reverseArr.append(arr[len(arr) - x - 1])
  return reverseArr
