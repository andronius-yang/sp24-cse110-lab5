# Lab 5 - Starter

Contributers: Andrew Yang and Samvrit Srinath

## Check your Understanding - Unit Tests

1. We would not use a Unit Test to test the `message` feature of our messaging application. To boil it down, the feature is simply just far too large to test using Unit Tests. There are many moving parts to the message user which include: parsing the input, queuing the message, sending the message, receiving the message, displaying the message to the recipent. This is a lot of functionality to test and it would be very difficult to test all of these features using Unit Tests. Also, this task would not execute quickly, but rather on orders of magnitude slower than a typical unit test(waiting for network and recipient to acknowledge the message). Also, the message feature is not able to be isolated, many different parts of the program can impact the behavior of the message feature. Thus, since the message feature is neither small, nor isolated, nor fast, it doesn't make sense to test it using Unit Tests.

2. We would use unit tests to test the `max_message_length` feature of our messaging application. This feature is small and isolated, and can be tested quickly. The `max_message_length` feature is a simple boolean check that can be tested by passing in a message that is too long and a message that is within the length limit(80 Characters). This feature is also isolated, as it is modular with respect to the rest of the program. Due to these reasons, this feature being small, fast to test, and isolated from the rest of the program(as this function is slot in to impact the `message` behavior and has no external dependencies), it makes sense to test this feature using Unit Tests.

## Links
- Expose(Horns and Volume): [https://andronius-yang.github.io/sp24-cse110-lab5/expose.html](https://andronius-yang.github.io/sp24-cse110-lab5/expose.html)
- Explore(Speech Synthesis): [https://andronius-yang.github.io/sp24-cse110-lab5/explore.html](https://andronius-yang.github.io/sp24-cse110-lab5/explore.html)
