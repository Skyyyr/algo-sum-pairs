def sum_pairs(number_array, target_sum):
    # Initialize values
    nums = {}
    answer_array = []
    # Loop over array of numbers
    for num in number_array:
        # what's the difference between target and current num
        potential_match = target_sum - num
        # if the difference is in our map, then we have a match!
        if potential_match in nums:
            answer_array.append([num, potential_match])
        else:
            # We don't have a match, so add to map
            nums[num] = True
    return print(answer_array)