# Stubs

## What is it? 
Basically, a stub is a piece of code or function that serves as a simulation of a code behavior.   

## When should we use stubs?
Our unit test should not depend on a third-party service or the Internet. But, imagine that we want to test a feature that makes a request to a third-party service that validates a CPF. Then, we can avoid using this service using stubs to simulate the requests and responses of the validation.

We use Stubs to simulate or substitute a behavior of the system for static behavior. Then, we can avoid unnecessary requests. 
