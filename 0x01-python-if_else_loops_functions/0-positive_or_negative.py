#!/usr/bin/python3
import random
number = random.randint(-10, 10)
last_num = abs(number) % 10

if number < 0:
    last_num = -last_num
    print(number, last_num)
else:
    last_num = last_num
    print(number, last_num)
