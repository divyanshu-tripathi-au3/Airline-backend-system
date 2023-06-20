
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