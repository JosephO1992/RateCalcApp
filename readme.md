# Creating a rate calculator app

This will be able to perform some simple math within a form

I have created some simple input fields where I can put in some figures and it will pass back out a rate into the input box.

There are few functions to convert the inputs into numbers, as the original value returned is a string, which I cannot perform math with.

I also need to convert back the % figure inputted into an actual percent. For this I just divided that by 100. In the future, I would create
some test to make sure the % input can't go over 99%.

Originally, there was a an empty div, but I adjusted this to change the value of the text input box to the final value.
I chose to do this to keep the styling consistent and not having to worry about creating more divs on the page.
