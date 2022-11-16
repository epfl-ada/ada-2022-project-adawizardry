import wikipedia

# To get data from event, simply call wikipedia.summary with the title of the page 
subjects = ["World War II", "September 11 attacks"]
for subject in subjects:
    summary = wikipedia.summary(subject)
    print(summary)
