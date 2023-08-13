
Folder structure setup :
Task based Setup like we are using        
2nd: Feature based setup


. 
- src/
    . index.js  or server.js                   IMMCCRRUS
    config/
    models/
    controllers/
    middlewares/
    repo
    routes
    utils/
    services/

. helpers  like mailer.js  / validation.js / any extralogic
-tests/
-static/
-temp/


<!-- ======================================= -->
structure:
user request <-----> controller -------->  services --------->  repository/ repo ------------> models

example :
end user    <----->  waiter    -------->   kitchen  -------->   Inventory         -------->   Food collection


DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)