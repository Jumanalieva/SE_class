
def greeting(user_name):
    return f"Hello, {user_name}!"


print(greeting("Beverly"))


def odd_numbers():
    for number in range(1, 101):
        if number%2 != 0:
           print(number)

odd_numbers()


def max_num_in_list(a_list):
    return max(a_list)


print(max_num_in_list([10, 60, 15, 37]))


def is_leap_year(year):
    """
    Returns True if the given year is a leap year, False otherwise.
    """
    if (year % 400 == 0) or (year % 100 != 0 and year % 4 == 0):
        return True
    else:
        return False


print(is_leap_year(2000))  
print(is_leap_year(1900))  


def are_consecutive(numbers):
    """
    Check if all numbers in the list are consecutive numbers.
    """
    for i in range(len(numbers) - 1):
        if numbers[i] + 1 != numbers[i + 1]:
            return False
    return True


print(are_consecutive([2, 3, 4, 5, 6, 7]))  
print(are_consecutive([1, 2, 4, 5]))        





    