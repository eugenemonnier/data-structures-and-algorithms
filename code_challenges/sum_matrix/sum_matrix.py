def sum_matrix(matrix):
    result = list()
    for idx, arr in enumerate(matrix):
        result.append(0)
        for val in arr:
            result[idx] += val
    return result
