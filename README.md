# Movies Through the Decades 
A study about how technology and historical events change the movie industry.

### Abstract

*"A film […] is a work of art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the motion of pictures*" [1].

This is the opening sentence for the Wikipedia article on Films. Movies are an essential part of the culture and affect our ideas, choices, and perceptions of each other. In this data science project, the purpose is to grasp how movies and reality are intertwined. We aim to understand how films change through time due to technology and what part real-world events play. 
 
### Research Questions

In this analysis, we intend to answer the general question of **How has the movie industry changed throughout history?**, which can be divided into several sub-questions. 

* Which genres have become more or less popular over time?
* Does historical events affect the kind of movies afterward?
* How long is the latency between the event and the peak representations of that event? (E.g., most holocaust movies are made X years after the event)
* How are historical events and concepts perceived through movies? 


### Datasets
To answer some of the above questions, we need data about movies and real-world historical events. For the movies, the provided dataset from the hand-out is sufficient. For the historical events, we used this article [2] to define important events from the 20th century, then we mapped those to Wikipedia articles describing the events. We used events starting from 1941 to ensure sufficient movies before the event for an analysis to be made. From the Wikipedia articles, we extract summaries. Using Wikipedia summaries makes sense since the movie plots also come from Wikipedia summaries.
 
### Project Notebook – [here](https://github.com/epfl-ada/ada-2022-project-adawizardry/blob/main/main.ipynb)
The entire project notebook is available in `main.ipynb`.
 

### Project Data Story – [here](https://tiger-pillow.github.io/ada_final/)
The data story is available at [https://tiger-pillow.github.io/ada_final/](https://tiger-pillow.github.io/ada_final/).

### Team Distribution:
Axel Andersson: data cleaning, data analysis (Part 2 in the notebook), data story 

Yiyuan Gladys Fang:

Leo Westerberg: Data cleaning, doc2vec, part 2 or data analysis, data story

Joel Rudsberg: data cleaning, NLP text pre-processing, doc2vec, latency, data story 

### References

[1] https://en.wikipedia.org/wiki/Film

[2] https://www.historyonthenet.com/20th-century-timeline
