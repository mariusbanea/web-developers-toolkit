## Node Capstones - Typical Technical Difficulties:

1. Node is not able to connect to any external hardware in order to exchange data; for example website connecting to diabetes glucose meters in order to import data (no alternatives yet)
2. Heroku doesn’t support sending automatic emails (it is possible using a custom made gmail account (with special security settings) and the “gmail” NPM package but adds 1.5-2 days to the project))
3. Heroku doesn’t support uploading images (it is possible using cloudinary.com but adds 2-3 days to the project)
4. Heroku doesn’t support automatic tasks or cron jobs; for example every day at 3:00 am make a specific api call to seed the database (no alternatives yet)
5. Date related computations (how many days between 2 dates or date conversions based on the format or timezone) or calendar displays are usually complex and they require the usage of the Unix Time Converters (https://en.wikipedia.org/wiki/Unix_time) (it is possible by using the Moment.js library but it could add 1-4 days to the project)
6. Node is a low security kind of back-end programming language, so avoid apps that would involve the use and storage of sensitive info like name, locations, payments, etc; also have in mind that all the code related to the casptone will be part of a public Gihub repo, so if there is code functionaltiy that, for some reason you are confortable sharing, is good to avoid it
7. Game projects are significaly dificult to build because they ususaly require the use of canvans
8. CMS like projects (example: Wordpress like app) are having complex back-end functionalities with require a lot of advanced knowledge of both back-end and front-end functionalities so it is better to avoid them becasue of complexity.
