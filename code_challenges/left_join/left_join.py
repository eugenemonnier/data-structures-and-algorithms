def left_join(left_map, right_map):
    output = []
    for key in left_map:
        temp = [key, left_map[key]]
        if key in right_map: temp.append(right_map[key])
        else: temp.append(None)
        output.append(temp)
    return output

