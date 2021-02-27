def convert_temp(temp):
    f_value = 0
    f_value = (float(temp) * 9/5) + 32
    return f_value

def compute_total_temp(temp, total_temp):
    total_temp = total_temp + float(temp)
    return total_temp

def get_daily_celcius():
    # Declare major variables used
    total_temp = 0
    week_of_day =['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

    for i in week_of_day:
        temp = input("Enter " + i + "'s temperature in celcius:")
        f_temp = convert_temp(temp)
        print(i + "'s temperature in Fahrenheit:" + str(f_temp))
        total_temp = compute_total_temp(f_temp, total_temp)
        
def display_avg(total_temp):
    avg_temp = round((total_temp/7),2)
    print("\n" + "Average temperature for the week:" + str(avg_temp))
    return