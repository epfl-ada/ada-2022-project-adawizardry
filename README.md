# ada-2022-project-adawizardry

### Abstract

*"A film […] is a work of art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the motion of pictures*" [1].

This is the opening sentence for the Wikipedia article on Films. Movies are an essential part of culture and are something that affects our ideas, choices and perceptions of each other. In this data science project, the purpose is to grasp how movies and reality are intertwined. Our aim is to understand how films are changing through time and what part real-world events play in this. An aspect of the real world which without a doubt is influencing movies is the rapidly advancing technology. With better technology comes some obvious advantages such as the ability to do more complex simulations or anti-aging skilled actors. On the other hand, there is a risk of losing the essence of the grand words stipulated in the first sentence of the Wikipedia article. Therefore, we will also investigate if films are getting better. 
 
 ---
### Research Questions

In this analysis we intend to answer the general question of **How have the movie industry changed throughout history?**, which itself can be divided in to several sub-questions. In the list below these are ordered by priority.

#### How have the movie industry changed throughout history?
>   - Which genres have become more or less popular over time?
>   - Do historical events affect the kind of movies afterwards? (E.g., are there more spy movies after the Cold War?)
>   - If and how are historical events reflected in subsequent movie plots? 
>   - How long is the latency between the event and the peak representations of that event? (E.g., most holocaust movies are made XX years after the event)
>   - How long does it take for a trend in movies to die?
>   - How do people's interest of of an historical event change throughout time.
>   - How does the characteristics of genres change of time?
>   - How does movie complexity change of time?


 ---
 
### Datasets

To answer some of the above questions, we need information of real-world historical events. We intend to use Wikipedia to get the data we need. What we need is: (a) some historical events and their time (the year they occurred) and (b) some words that characterize the historical event (ex. war, revolution, concert). To get (a) and (b) we can go for two routes. The first one is to scrape a Wikipedia timeline article for the 20th and 21st century [2]. If this path causes us trouble, for instance if the size of all this data is too large, we switch to choosing a few historical events ourselves [3]. For the current pipeline, we are using the latter approach and complemented it with Wikipedia pages of each event described in the article.
  
  
### Analysis method

![namnlös](https://user-images.githubusercontent.com/47889649/202481067-33475dfd-48f7-4a12-a0b0-c977f74eafbe.png)
The analysis for concluding if an event has a significant effect on a specific genre goes into two steps:
1. Counting if there is a significant change in frequency before and after the event using a p-test.
2. See if the event has a high average similarity to the movies conducted in the p-test.

The reasoning goes:

Assume we will see a significant increase in the frequency of war movies after world war II. This conclusion is reasonable since the event is connected to the genre. However, if we only look at the frequency of a particular genre, we might draw the same conclusion for a quite adjoint event like Apollo 13. The logical reasoning rejects that Apollo 13 affected the frequency of war movies since the events do not reminisce about war. To reject this conclusion in a data-driven manner, we use Doc2Vec and Cosine similarity between the description of an event and the plot summaries for movies of that genre. Apollo 13 will have a lower average cosine similarity to the plot summaries than World War 2. Thus World war 2 affected war movie frequency and not Apollo 13. We could also see if there is a significant change in the similarities using a p-test. The same reasoning can go with events of the same type. Then we calculate which event has the most considerable similarity to the plot summaries and conclude that the highest one is the difference maker.


### Timeline
* **week 47**:  Focus on Homework 
* **week 48**:  Focus on Homework and finalize the data to analyze.
* **week 49**:  Analyze data, finish notebook, and draw conclusions.
* **week 50+:** Start working on data story and presentation.

###  Organization within the team:
The group's workload has been distributed equally among the team members, and no one has been assigned a specific type of task. We mostly sit together, allowing good communication and discussions about which tasks need to be done. When we have agreed on the subsequent tasks, we divide them by who is most comfortable with it. Since this workflow methodology has worked quite well for this task, we will work similarly for the next milestone.
 
### References

[1] https://en.wikipedia.org/wiki/Film

[2] https://en.wikipedia.org/wiki/Timeline_of_the_20th_century

[3] https://www.historyonthenet.com/20th-century-timeline

[4] https://en.wikipedia.org/wiki/[events]
