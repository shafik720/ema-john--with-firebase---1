/* 
    1. Create a new Project in console.google.com
    2. npm install firebase
    3. create.firebase.init.js in vsCode and import getAuth to export Auth.
    4. firebase settings > authentication > enable email & password auth
    5. Create login, signUp component, setup their route
    6. attach signup & login form's all input field's handler and form submit prevent default handler
    7. npm install --save react-firebase-hooks (from github firebase hook page)
    8. useCreateUserWithEmailAndPassword from react-firebase-hook (from 7number line page)
    9. if user is created, redirect them to the expected page
    10. useSignInWithEmailAndPassword for sign in
    11. create RequireAuthComponent (from https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx) check if user exists and also track user's location
    12. make changes in login.js with RequireAuthFunction.
    13. in app.js file under the <Route>, wrap the desired route with <Requireauth> component.
*/