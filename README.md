# ada-2022-project-adawizardry

### Abstract

*A film […] is a work of art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty or atmosphere through the motion of pictures* [1]. This is the opening sentence for the Wikipedia article on Films. Movies are an essential part of culture and are something that affects our ideas, choices and perceptions of each other. In this data science project, the purpose is to grasp how movies and reality are intertwined. Our aim is to understand how films are changing through time and what part real-world events play in this. An aspect of the real world which without a doubt is influencing movies is the rapidly advancing technology. With better technology comes some obvious advantages such as the ability to do more complex simulations or anti-aging skilled actors. On the other hand, there is a risk of losing the essence of the grand words stipulated in the first sentence of the Wikipedia article. Therefore, we will also investigate if films are getting better. 
 
 ---
### Research Questions

In this analysis we intend to answer two main questions which in turn can be divided into several sub-questions. The two main questions are:
 
1.     How do historical events affect movies?
2.     Do movies get worse over time?
 
#### How does historical events affect movies?
Sub-questions:

    1.     Which genres are most popular over time? / How many movies were produced by genre each year?
    2.     Which historical events are commonly mentioned in movie plot summaries?
    3.     Is it a statistically significant rise in the usage of certain words or genres after a particular event?
    4.     How long is the latency between the event and the trends in the movies?
    5.     How long does it take for a trend in movies to die?
 
#### Do movies get worse over time?
Sub-questions:

    1.     When were the best movies created (according to IMDb)?
    2.     When were we watching movies most frequently?
    3.     Which movies have the highest box-office revenue and when were they created?
    4.     Are the best movies rating-wise the ones which generate the most revenue?
    5.     Find an explanation in the data for the observations above.
 
 ---
 
### Datasets

The primary dataset will be the Movie Summary Corpus dataset from Carnegie Mellon University. This dataset contains movie metadata, character metadata and plot summaries. This dataset will be used when investigating both proposed research questions from above. 
  For question (1), we want to compare the movie dataset with some real-world historical events. We intend to use Wikipedia to get the data we need. What we need is: (a) some historical events and their time (the year they occurred) and (b) some words which characterizes the historical event (ex. war, revolution, concert). To get (a) and (b) we can go for two routes. Either scrape a Wikipedia timeline article for the 20th and 21st century [2] and then use the Wikidata Items for each event to classify what type of event this is. There is an attribute in Wikidata Items called “instance of” which is suitable for this. If this path causes us trouble, for instance if the size of all this data is too large, we switch to choosing a few historical events ourselves. If we go with this path we have to classify i.e pick some words which represent the event.
  For question (2) 
  
  
### Analysis method

![namnlös](https://user-images.githubusercontent.com/47889649/202481067-33475dfd-48f7-4a12-a0b0-c977f74eafbe.png)
The analysis for concluding if an event has a significant effect on a specific genre goes into two steps:
1. Counting if there is a significant change in frequency before and after the event using a p-test.
2. See if the event has a high average similarity to the movies conducted in the p-test.

The reasoning goes:

Assume we will see a significant increase in the frequency of war movies after world war II. This conclusion is reasonable since the event is connected to the genre. However, if we only look at the frequency of a particular genre, we might draw the same conclusion for a quite adjoint event like Apollo 13. The logical reasoning rejects that Apollo 13 affected the frequency of war movies since the events do not reminisce about war. To reject this conclusion in a data-driven manner, we use Doc2Vec and Cosine similarity between the description of an event and the plot summaries for movies of that genre. Apollo 13 will have a lower average cosine similarity than World War 2. Thus World war 2 affected war movie frequency and not Apollo 13. The same reasoning can go with events of the same type. Then we calculate which event has the most considerable similarity to the plot summaries and conclude that the highest one is the difference maker

 
### References

[1] https://en.wikipedia.org/wiki/Film

[2] https://en.wikipedia.org/wiki/Timeline_of_the_20th_century

[3] https://www.historyonthenet.com/20th-century-timeline

[4] https://en.wikipedia.org/wiki/[events]
