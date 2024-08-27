print("====BMI Calculator====")
h=float(input("Enter the height in cm: "))
w=float(input("Ether the Weight in Kg: "))
bmi=w/(h/100)**2
print("BMI :",bmi)
if(bmi>24.9):
    print("Overweight/Obisity,Unhealth Weight")
elif(bmi<18.5):
    print("Sink,Unhealth weight")
else:
    print("Normal ,Health Weight")
lwh=[18.5*(h/100)**2,24.9*(h/100)**2]
lww=[(w/18.5)**(1/2)*100,(w/24.9)**(1/2)*100]
print(f'Range of Good Weight with {h} is {int(lwh[0])}  to {int(lwh[1])}Kg\n AND Range of Good Height with {w} is {int(lww[0])} to {int(lww[1])}cm')