Readme
============================================
After cloning or downloding you may have to run npm install in the folder of the project. To compile the app run npm start
Server folder has server.js which is to be ran in terminal "node server.js" on port 4000 in seperate terminal 
along with npm start for react
==============================================

Website is a basic shoe shop using firebase for login/signup authentication and stripe for transactions.
Both enteries of data are saved to their own database

Website has a cart feature at the bottom with a cart badge number displaying number of unique products in your cart
the cart has shipping, and total price. Cart also has an add or remove feature to add or subtract product quantities

the cart only shows if there are products in it

user is able to enter credit card info (number, exp date and cvc) using stripe transactions. After a valid number and info
have been put in a request is sent to the backend server, otherwise an error will appear on the screen

similarly the login/register needs valid credentials that are stored in the database or to create a new account
a valid email and strong password must be assigned

=======================
