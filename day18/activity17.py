"""
Nick Israel
Tuesday, January 31 2023
Activity 17
"""
# Example 1
print('--------- Example 1 -------')
age = int(input('Enter your age: '))
if age >= 21: print('ADULT')
else:
    print('UNDER AGE')
print('Age Check point!')
# Example 2
print('--------- Example 2 -------')
grade = int(input('Enter a grade:'))
if grade >= 90 and grade <= 100:
    print('GPA A')
elif grade >= 80 and grade < 90:
    print('GPA B')
elif grade >= 70 and grade < 80:
    print('GRADE C')
elif grade >= 60 and grade < 70:
    print('GPA D')
elif grade >= 0 and grade < 60:
    print('GPA F')
else:
    print('INVALID')
# Example 3
print('--------- Example 3 -------')
kidAge = int(input('Enter your kids age between 5 and 10: '))
if kidAge == 5 or kidAge == 6:
    print('Eat pasta')
elif kidAge == 7 or kidAge == 8:
    print('Eat fish and veggies')
elif kidAge == 9 or kidAge == 10:
    print('Eat ice cream')
else: 
    print('Go to sleep!')
# Example 4
print('--------- Example 4 -------')
for x in range(0,5):
    print('COunting: ', x)
# Example 5
print('--------- Example 5 -------')
animals = ['fish', 'dog', 'cat', 'bear', 'pig']
for i in animals:
    print(i)
# Example 6
print('--------- Example 6 -------')
for m in range(3, 30, 2):
    print('print before break')
    if m == 17:
        continue
    print('m = ', m)
# decreasing order
for n in range(10, 0, -1):
    print('n = ', n)