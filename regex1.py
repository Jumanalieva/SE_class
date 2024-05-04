import re

names = [
    "Abraham Lincoln",
    "Andrew P Garfield",
    "Connor Milliken",
    "Jordan Alexander Williams",
    "Madonna",
    "programming is cool"
]

name_pattern = re.compile(r"^[A-Z][a-z]*\.?(?: [A-Z][a-z]*\.?)+$")

filtered_names = [name if name_pattern.match(name) else "None" for name in names]

for name in filtered_names:
    print(name)

