# BURGER LOGGER

## Description 
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat and waiting to be devoured. Once they have try the burger, user can update the list and go to the next burger to devour. 


## Installation
1) NPM EXPRESS
2) NPM express-handlebars
3) NPM method-override
4) MySQL
5) NPM mysql
6) git hub: 
7) horuku: 


* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.

## Usage
--- URL ----



## Function
1) Enter the name of the burger you would like to eat and press submit button
2) Submitted burger is added to the left side of the page
3) Once burger was eaten, press "Devoured" button next to "Burger to Eat"
4) The burger will then be added to the left list of all burger that have been devoured. 

![](public/assets/eatdaburger.gif)



## DEVELOPMENT
1) db folder holds the schema and seed file for MySQL
2) config folder holds the connection and orm files
3) controller folder holds the routing script files
4) models folder holds burger fucntions that uesd orm that will interact with the database
5) public files holds styling sheet, burger image, and burger ajax call functions. 
6) views folder holds the handlerbars html for index and layouts folder within the view folder holds main html. 
7) server.js is the launch script of the app


## Credit
Chris Kim 


## License
Copyright (c) [2020] [Chris Kim ]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
