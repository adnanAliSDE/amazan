import os
import shutil

files=os.listdir('./images')
print(files)

for i,file in enumerate(files):
    os.rename(f"./images/{file}",f"./images/{i}.{file.split('.')[-1]}")

print("done")