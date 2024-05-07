# Lab 5 - Starter

## Question 1
No, because a "message" feature will have multiple sub-components, such as sending the message from the client, receiving the message in the server and relaying it to the recipient, and sending the message from the server to the recipient client. A unit test cannot test this many features at the same time, becuase an error in any one of the sub-components may fail it.

## Question 2
This would be fitting for a unit test. There should be a relatively simple function that checks for the length of the message (length of msg < 80), and everything can be done locally. Though there are dependencies for other functions (i.e. the "max message length" test can only be run if there is a message input/gathering feature to begin with), but those are relatively separated and less entangled than the scenario in question 1; therefore allowing the feature to be easily isolated and tested.