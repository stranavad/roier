# Roier Login Page

Page Routing is done in App.js using BrowserRouter from react-router-dom.
Firebase is used for loggin in and creating new users.
Using standartized proccess for creating protected routes in /components/ProtectedRoute.js, where I check if the page was a redirect from login or register and if the user is logged in, then redirecting to /protected.
In 

For the carousel I've used Carousel from react-responsive-carousel, I didn't tweak it to be the same as on roier site, because that was not the point of this task.
