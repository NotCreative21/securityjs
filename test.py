names = input("enter names: ")

which = 0
mame2 = []
mame3 = []
name3 = " "
namearr = names.split(" ")
for i in namearr:
    i = i.lower()
    if which == 0:
        which = 1
        name3 = i + " "
        pass
    else:
        which = 0
        name3 = name3 + i
        mame2.append(name3)
        pass
for i in mame2:
    i.replace("'", '"')
    mame3.append(i)
#print(namearr)
print(mame3)