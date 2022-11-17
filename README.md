# ada-2022-project-adawizardry
ada-2022-project-adawizardry created by GitHub Classroom

Abstract: “A film […] is a work of art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty or atmosphere through the motion of pictures” [1]. This is the opening sentence for the Wikipedia article on Films. Movies are an essential part of culture and are something that affects our ideas, choices and perceptions of each other. In this data science project, the purpose is to grasp how movies and reality are intertwined. Our aim is to understand how films are changing through time and what part real-world events play in this. An aspect of the real world which without a doubt is influencing movies is the rapidly advancing technology. With better technology comes some obvious advantages such as the ability to do more complex simulations or anti-aging skilled actors. On the other hand, there is a risk of losing the essence of the grand words stipulated in the first sentence of the Wikipedia article. Therefore, we will also investigate if films are getting better. 
 
Research Questions
In this analysis we intend to answer two main questions which in turn can be divided into several sub-questions. The two main questions are:
 
1.     How do historical events affect movies?
2.     Do movies get worse over time?
 
How does historical events affect movies?
Sub-questions:
a)     Which genres are most popular over time? / How many movies were produced by genre each year?
b)     Which historical events are commonly mentioned in movie plot summaries?
c)     Is it a statistically significant rise in the usage of certain words or genres after a particular event?
d)     How long is the latency between the event and the trends in the movies?
e)     How long does it take for a trend in movies to die?
 
Do movies get worse over time?
Sub-questions:
a)     When were the best movies created (according to IMDb)?
b)     When were we watching movies most frequently?
c)     Which movies have the highest box-office revenue and when were they created?
d)     Are the best movies rating-wise the ones which generate the most revenue?
e)     Find an explanation in the data for the observations above.
 
Datasets
The primary dataset will be the Movie Summary Corpus dataset from Carnegie Mellon University. This dataset contains movie metadata, character metadata and plot summaries. This dataset will be used when investigating both proposed research questions from above. 
  For question (1), we want to compare the movie dataset with some real-world historical events. We intend to use Wikipedia to get the data we need. What we need is: (a) some historical events and their time (the year they occurred) and (b) some words which characterizes the historical event (ex. war, revolution, concert). To get (a) and (b) we can go for two routes. Either scrape a Wikipedia timeline article for the 20th and 21st century [2] and then use the Wikidata Items for each event to classify what type of event this is. There is an attribute in Wikidata Items called “instance of” which is suitable for this. If this path causes us trouble, for instance if the size of all this data is too large, we switch to choosing a few historical events ourselves. If we go with this path we have to classify i.e pick some words which represent the event.
  For question (2) 
 
References
[1] https://en.wikipedia.org/wiki/Film
 
[2] https://en.wikipedia.org/wiki/Timeline_of_the_20th_century
