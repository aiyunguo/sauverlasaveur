# sauverlasaveur

## Inspiration
As university students, we try to save money by cooking our own meals. However, sometimes that means a random aubergine or tomato in the refrigerator goes unused and gets thrown away. Besides wasting money on such food that eventually gets thrown away, we add to the problem of food waste. We were surprised to find out that the average household in Canada wastes 140kg of edible food a year. To help everyone else play their part in reducing food waste, we created savourfood (sauver la saveur en français), a web application that inspires users with delicious recipes that make use of the simplest ingredients. 

At present, many apps and organizations are already helping supermarkets and restaurants cut down on food waste. We hope that by engaging consumers, we can tackle the other side of the equation and build towards a more sustainable future.

## What it does
Our web application, SavourFood, aims to reduce food waste by recommending delicious recipes to our users based on the ingredients they have. Many of our curated recipes require only a few of the simplest ingredients; we hope that users will be inspired to make full use of all the ingredients they have left, rather than throwing them away. Users first input the ingredients available to them, and our recipe generator will present recipes for a wide range of meals, including quick meals and dessert, that are scraped from the internet. To increase user interaction, we encourage our users to rate recipes on our web application and upload their creations to inspire other users. In order to help feed the 800,000 Canadians who frequent food banks, we are launching a #save2save initiative where our sponsors will donate $1 to food banks for every user submission. 

## How we built it
FIrst, we scraped recipe data from various websites, obtaining the name, image, and weblink of the recipes. We then stored this data in a spreadsheet. It was then converted into .json and stored into firebase, which was then linked to wix.com in order to be queried. We used wix.com to design the front end for Sauver la Saveur. The backend was completed using javascript and node.js. When the user selects a certain combination of ingredients, this set of ingredients is compared with the recipes in the database. The top three most matching recipes will be returned.

## Challenges we ran into
My first time using firebase and learning how to integrate javascript into wix.com. There were certain module limitations when integrating the user interface with the Wix back-end, as the latter did not support module imports. The query limit of 10 imposed in Firestore also meant that we could not perform a single compound query to obtain the relevant data. 

## Accomplishments that we're proud of
Given there are already many existing applications and projects that help to tackle food wastage, we were able to come up with an innovative solution that tackled the issue from a new angle. Instead of focusing on reducing food wastage from the retailers’ side, we were able to create an interesting web application to help consumers reduce food wastage.

## What we learned
Integration of Javascript with wix.com; building a full website.

## What's next for savourfood
We aim to substantially increase our database of recipes and allow users to share their own recipes with us. We also want to collaborate with social media influencers to extend our outreach. We will be looking to collaborate with sponsors for our #save2save initiative.
