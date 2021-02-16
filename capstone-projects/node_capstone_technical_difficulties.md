## Full Stack Capstones - Typical Technical Difficulties

### Idea limitations
* Game projects are significantly difficult to build because they have complex game logic and usually require the use of canvas
* CMS like projects (example: Wordpress like app) are having complex back-end functionalities with require a lot of advanced knowledge of both back-end and front-end functionalities so it is better to avoid them because of complexity. 
* Connecting to Social Media APIs inside the app usually requires new users to share their Facebook / Twitter / Google (etc.) credentials with it, which would make testers or possible employers uncomfortable

### Heroku limitations
* Heroku doesn’t support sending automatic emails (it is possible using a custom made Gmail account (with special security settings) and the “gmail” NPM package but adds 1.5-2 days to the project))
* Heroku doesn’t support uploading images (it is possible using Cloudinary.com but adds 2-3 days to the project)
* Heroku doesn’t support automatic tasks or cron jobs; for example every day at 3:00 am make a specific api call to seed the database (no alternatives yet)

### Node limitations
* Node is not able to connect to any external hardware in order to exchange data; for example website connecting to diabetes glucose meters in order to import data (no alternatives yet)
* Node is not able to deal with automatic image or video processing (like stitching images or videos together)
* Node is a low security kind of back-end programming language, so avoid apps that would involve the use and storage of sensitive info like name, locations, payments, etc; also have in mind that all the code related to the capstone will be part of a public GitHub repo, so if there is code functionality that, for some reason, you are comfortable sharing, is good to avoid it

### Database limitations
* When a user shares some data with some users but not others, it is necessary to create a many to many relationship functionality in the database (https://en.wikipedia.org/wiki/Many-to-many_(data_model)), which requires an extra pivot table, adding some 2-4 hours to the project
* Date related computations (how many days between 2 dates or date conversions based on the format or timezone) or calendar displays are usually complex and they require the usage of the Unix Time Converters (https://en.wikipedia.org/wiki/Unix_time) (it is possible by using the Moment.js library, but it could add 1-4 days to the project)

