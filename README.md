# Stubs

## What is it? 
Basically, a stub is a piece of code or function that serves as a simulation of a code behavior.   

## When should we use stubs?
Our unit test should not depend on a third-party service or the Internet. But, imagine that we want to test a feature that makes a request to a third-party service that validates a CPF. Then, we can avoid using this service using stubs to simulate the requests and responses of the validation.

We use Stubs to simulate or substitute a behavior of the system for static behavior. Then, we can avoid unnecessary requests making our units tests cheaper and faster. 

## Looking at our example
In our example, we have a service that gets a Star Wars planet making a request to the SWAPI API which is a data source of the Star Wars canon universe. We are testing the request and how we are formatting the returning data using stubs. Because we don't want to make a request every time that we run our unit test. Whether the API is working or not is not the problem of the unit test, so we only use the stubs to simulate the response from the SWAPI.

We used Sinon to create the mocks, but you can use any other framework that fits in your case.