"""
Nick Israel
day `7 - Intro to Python
Monday, Jan 30
"""

# Example 1 using print() function

print('Nick Israel')
print('-----example 1-----')
name = 'Peter Pan'
number = 2.5
print(name)
print('My name is: ', name, ' and my lucky number is ', number)

# Example using input() function
print('-----example 2 -----')
lastName = input('Enter a last name: ')
num1 = int(input('Enter a number: '))
print('Last name = ', lastName, 'Enter a number = ', num1, 'The double of the number is = ', num1*2)
print('-----example 3 -----')
h = float(input('Enter a height: '))
w = float(input('Enter a weight: '))
hyp = (h**2 + w**2)**0.5
print('The hypotenuse = ', hyp)

# Class Activity
print('---------CLASS ACTIVITY---------')

radius = int(input('Enter a radius: '))
height = int(input('Enter a height: '))
area = 3.1416*radius**2
circumference = 2*3.1416*radius
volume = area*height
print('The area of your circle is = ', area, 'while the circumference is = ', circumference, 'and finally, the volume is = ', volume)

print('-----example 4 -----')
# assign a value
number1 = 8
print('Number = ', number1)
# self add +=
number1 += 3
print('Self add = ', number1)

# self substraction -=
number1 -= 5
print('Self substract = ', number1)
number1 %= 4
print('Remainder after the division with 4 = ', number1)

# create list of animals
animals = ['cat', 'dog', 'parrot', 'fish', 'rat']
print('2nd animal = ', animals[1])

# delete the 3rd item in the list
del animals[2]
print(animals)

# ask the user to input an animal. The new animal will be added to the existing list
a = input('Enter an animal: ')
animals.append(a)
