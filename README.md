![alt text](https://github.com/emrekilic7/suggestify/blob/master/src/assets/img/suggestify-logo-2.png?raw=true)
# suggestify

Suggestify is a small-scale application has been developed as a trial project using Vue 3.

By creating a prompt with the user's input of category and additional comments, film recommendations are obtained with the assistance of ChatGPT. The film titles provided by the Open AI API are then queried using the OMDb API to retrieve detailed information such as Title, Description, Poster, Year, Rating, and more. These details are displayed to the user.

![alt text](https://github.com/emrekilic7/suggestify/blob/master/src/assets/img/image-1.jpg?raw=true)
![alt text](https://github.com/emrekilic7/suggestify/blob/master/src/assets/img/image-2.jpg?raw=true)

You can run the application by adding your Open AI and OMDB API key information to the .env file.

```sh
npm run dev
```