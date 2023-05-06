
middleware:
request comes through routes, after that it pass through middleware which is 
a function which perform checks like authentication, authorization, filter is proper or not, request body is good or not and then pass it to controllers

a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.

ex. logger
     body-parser
     role based authentication