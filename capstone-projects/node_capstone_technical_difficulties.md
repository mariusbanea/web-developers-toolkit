## Node Capstones - Typical Technical Difficulties:

1. Node is not able to connect to any external hardware in order to exchange data; for example website connecting to diabetes glucose meters in order to import data (no alternatives yet)
2. Heroku doesn’t support sending automatic emails (it is possible using a custom made gmail account (with special security settings) and the “gmail” NPM package but adds 1.5-2 days to the project))
3. Heroku doesn’t support uploading images (it is possible using cloudinary.com but adds 2-3 days to the project)
4. Heroku doesn’t support automatic tasks or cron jobs; for example every day at 3:00 am make a specific api call to seed the database (no alternatives yet)
5. Date related computations (how many days between 2 dates or date conversions based on the format or timezone) or calendar displays are usually complex and they require the usage of the Unix Time Converters (https://en.wikipedia.org/wiki/Unix_time) (it is possible by using the Moment.js library but it could add 1-4 days to the project)
6. Node is a low security kind of back-end programming language, so avoid apps that would involve the use and storage of sensitive info like name, locations, payments, etc
