try:
    a = int(input("Enter numerator: "))
    b = int(input("Enter denominator: "))
    if b == 0:
        raise ZeroDivisionError("Denominator cannot be zero")
    print("Result:", a / b)

except ValueError:
    print("Please enter valid numbers.")
except ZeroDivisionError as e:
    print("Error:", e)
else:
    print("Operation completed successfully.")
finally:
    print("Program execution finished.")







