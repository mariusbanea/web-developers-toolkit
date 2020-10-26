# Postgres Cheat Sheet

##### Note: ";" is necesary at the end of the _SQL_ lines only; not the Windows _Command Line_ or the Mac _Terminal_ ones

Using the Windows __Command Line__ or the Mac __Terminal__ app run:
1. Install Postgres on Mac
    ```console
    brew update
    brew install postgres
    ```
2. Acces the Postgres Shell
    ```console
    psql testdb (enter the password for the new db)
    ```
3. Postgres start or restart
    ```console
    pg_ctl start
    pg_ctl restart
    ```
4. On a Mac, If Postgres start displays errors about "environment variable PGDATA unset" use
    ```console
    export PGDATA="/usr/local/var/postgres"
    pg_ctl -D /usr/local/var/postgres restart
    ```
5. Create a User for Postgres
    ```console
    createuser testuser
    ```
6. Create Database
    ```console
    createdb testdb
    ```
7. Provide the privileges to the postgres user
    ```console
    psql testdb
    ```
    then:
    ```sql
    alter user testuser with encrypted password 'qwerty';
    grant all privileges on database testdb to testuser;
    ```
8. Get all restaurants
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    SELECT FROM restaurants;
    ```
9. Get Italian restaurants Write a query that returns all of the Italian restaurants, with all of the fields
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    SELECT FROM restaurants WHERE cuisine='Italian';
    ```
10. Get 10 Italian restaurants, subset of fields Write a query that gets 10 Italian restaurants, returning only the id and name fields.
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    SELECT id, name FROM restaurants WHERE cuisine='Italian' LIMIT 10;
    ```
11. Count of Thai restaurants Write a query that returns the number of Thai restaurants.
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    SELECT COUNT(*) FROM restaurants WHERE cuisine='Thai';
    ```
12. Count of restaurants Write a query that returns the total number of restaurants.
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    SELECT COUNT(*) FROM restaurants;
    ```
13. Count of Thai restaurants in zip code Write a query that returns the number of Thai restaurants in the 11372 zip code.
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    SELECT COUNT(*) FROM restaurants WHERE cuisine='Thai' AND address_zipcode='11372';
    ```
14. Italian restaurants in one of several zip codes Write a query that returns the id and name of five Italian restaurants in the 10012, 10013, or 10014 zip codes. The initial results (before limiting to five) should be alphabetically sorted.
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    SELECT id, name FROM restaurants WHERE cuisine='Italian' AND (address_zipcode='10012' OR address_zipcode='10013' OR address_zipcode='10014') ORDER BY name LIMIT 5 ;
    ```
15. Create a restaurant Create a restaurant with the following properties: name: 'Byte Cafe', borough: 'Brooklyn', cuisine: 'coffee', address_building_number: '123', address_street: 'Atlantic Avenue', address_zipcode: '11231'
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    INSERT INTO restaurants (name, borough, cuisine, address_building_number, address_street, address_zipcode) VALUES ('Byte Cafe', 'Brooklyn', 'coffee', '123', 'Atlantic Avenue', '11231') ;
    ```
16. Create a restaurant and return id and name Create a restaurant with values of your choosing, and return the id and name.
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    INSERT INTO restaurants (name, borough, cuisine, address_building_number, address_street, address_zipcode) VALUES ('Byte Cafe', 'Brooklyn', 'coffee', '123', 'Atlantic Avenue', '11231') RETURNING id, name ;
    ```
17. Create three restaurants and return id and name Create three restaurants using a single command, with values of your choosing, returning the id and name of each restaurant.
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    INSERT INTO restaurants (name, borough, cuisine, address_building_number, address_street, address_zipcode) VALUES ('One Cafe', 'Brooklyn', 'coffee', '123', 'Atlantic Avenue', '11231'), ('Two Cafe', 'Brooklyn', 'coffee', '123', 'Atlantic Avenue', '11231'), ('Three Cafe', 'Brooklyn', 'coffee', '123', 'Atlantic Avenue', '11231') RETURNING id, name ;
    ```
18. Update a record Update the record whose value for nyc_restaurant_id is '30191841'. Change the name from 'Dj Reynolds Pub And Restaurant' to 'DJ Reynolds Pub and Restaurant'.
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    UPDATE restaurants SET name='DJ Reynolds Pub and Restaurant' WHERE nyc_restaurant_id='30191841';
    ```
19. Delete by id Delete the grade whose id is 10.
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    DELETE FROM grades WHERE id=10;
    ```
20. Create a table Create a new table called inspectors with the following properties: first_name: String of inspector's first name, required last_name: String of inspector's last name, required. Inspectors should also have a system generated primary key property, id.
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    CREATE TABLE inspectors ( id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY, first_name TEXT NOT NULL, last_name TEXT NOT NULL);
    ```
21. Update a table Add a notes field to the grades table. notes are not required, and are text.
    ```console
    psql testdb (enter the password for the new db)
    ```
    ```sql
    ALTER TABLE grades ADD COLUMN notes TEXT;
    ```
22. Drop a table Drop the inspectors table from the database.
    ```console
    psql testdb (enter the password for the new db)
    ```
    then:
    ```sql
    DROP TABLE inspectors;
    ```
