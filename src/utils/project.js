const projects = [
      {
      _id : 1,
        title: "Tech-Blog",
        about: "The application contained within is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
        src:require("../Assets/images/Tech-Blog.gif"),
        deploy:"https://tech-blog2213.herokuapp.com/",
        repo: "https://github.com/Archo21/MVC-Tech-Blog"
      },
      {
        _id : 2,
        title: "Inter Actor",
        about: "This application helps users find movies that 2 or more actors, directors, or producers have made together. In this application users are able to create a profile, and create a favorites list containing movies that they would like to see. InterActor uses the MERN stack web development process. To get the movie information, the application makes API calls to The Movie Database (TMDB). From gathering that information a search filter and a results card containing the movie information is displayed.",
        src: require("../Assets/images/InterActor1.png"),
        deploy: "https://serene-headland-68325.herokuapp.com/",
        repo: "https://github.com/kevin-cortina/InterActor-Pt3"
      },
      {
        _id : 3,
        title: "Book-Search-Engine",
        about: "The Book search engine is an application is leveraging the entire MERN stack and with a React front end, MongoDB database, and Node.js/Express.js server and API. It's set up to allow users to save book searches to the back end.The application is built using Google Books API search engine build with GraphQL API and Apollo Server",
        src: require("../Assets/images/booksearch.png"),
        deploy: "https://book-search-engine23.herokuapp.com/",
        repo: "https://github.com/Archo21/Book-Search-Engine"
      }
    
    

]
export default projects