# ada-2022-project-adawizardry

### Abstract

*"A film […] is a work of art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the motion of pictures*" [1].

This is the opening sentence for the Wikipedia article on Films. Movies are an essential part of culture and are something that affects our ideas, choices and perceptions of each other. In this data science project, the purpose is to grasp how movies and reality are intertwined. Our aim is to understand how films are changing through time and what part real-world events play in this. An aspect of the real world which without a doubt is influencing movies is the rapidly advancing technology. With better technology comes some obvious advantages such as the ability to do more complex simulations or anti-aging skilled actors. On the other hand, there is a risk of losing the essence of the grand words stipulated in the first sentence of the Wikipedia article. Therefore, we will also investigate if films are getting better. 
 
 ---
### Research Questions

In this analysis, we intend to answer the general question of **How has the movie industry changed throughout history?**, which can be divided into several sub-questions. In the list below, these are ordered by priority.

#### How has the movie industry changed throughout history?
>   1. Which genres have become more or less popular over time?
>   1. Do historical events affect the kind of movies afterwards? (E.g., are there more spy movies after the Cold War?)
>   1. If and how are historical events reflected in subsequent movie plots? 
>   1. How long is the latency between the event and the peak representations of that event? (E.g., most holocaust movies are made XX years after the event)
>   1. How long does it take for a trend in movies to die?
>   1. How do the characteristics of genres change over time?
>   1. How does movie complexity change over time?


 ---
 
### Datasets

To answer some of the above questions, we need information on real-world historical events. We intend to use Wikipedia to get the data we need. What we need is: (a) some historical events and their time (the year they occurred) and (b) some words that characterize the historical event (ex. war, revolution, concert). To get (a) and (b) we can go for two routes. The first one is to scrape a Wikipedia timeline article for the 20th and 21st century [2]. If this path causes us trouble, for instance if the size of all this data is too large, we switch to choosing a few historical events ourselves [3]. For the current pipeline, we are using the latter approach and complemented it with Wikipedia pages of each event described in the article.
  
  
### Analysis method
<img src="https://user-images.githubusercontent.com/47889649/202763197-7f739258-7569-480e-840c-737960747d76.png" width="500">

For question 2- 3, to find out if an historical event affects the movies made subsequently, we follow the 2 steps below:

1. We associate each historical event with each genre, and select the combinations with significant p-tests.

2. Based on the combinations selected in step 1, we do a similarity analysis on the wikipedia summary of the event and the plot summaries belonging to this genre. 

The reasoning goes:
For example, our hypothesis might be: we will see a significant increase in the number of war movies after world war II. However, if we only look at the frequency of a particular genre before and after 1939, we might draw the same conclusion for events that happened around the same time, like the founding of McDonald’s in 1940. But this is clearly wrong. To reject this conclusion in a data-driven manner, we use Doc2Vec and Cosine similarity between the description of an event and the plot summaries for movies of that genre.McDonald’s will have a lower average cosine similarity to the plot summaries than World War 2. Thus World war 2 affected war movie frequency and not McDonald’s. We could also see if there is a significant change in the similarities using a p-test. The same reasoning can go with events of the same type. Then we calculate which event has the highest similarity to the plot summaries and conclude that the highest one is the trigger event.

For question 4, we can analyze the occurrence of movies that have a similarity score higher than a predetermined threshold (e.g. similarity score > 0.85). This way, we can determine the time lag between the event’s date and the peak interest of this event by movie makers. For example, we can say that X number of films about Chernobyl was made Y years after 1986.

For question 5, we will use the same data as question 4, but in this question we also need to define when a movie trend “dies”, or if it dies at all. 

For question 6, We can answer the question about how the characteristics of a genre change with time by analyzing plot summaries. With NLP-methods, we can extract keywords from the plot summaries and compare which keywords define a genre over time. 

For question 7, we will use character data and metadata to look at the overall trends of the movies. We can look at the movie's length, the number of characters, and the number of female or minority actors. 


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
