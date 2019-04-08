# Welcome to Diamond Sweeper
 This is a diamond Sweeper game. The rules of the game are as follows:

-   The game board has 8x8 squares (initially, all represented by question marks)
-   There are 8 diamonds hidden on the board, each diamond behind one of the squares
-   When the user clicks on a square
    -   If the square was hiding a diamond, the diamond appears
    -   Otherwise, the square is opened, and blank
-   The game ends when all diamonds are found. The user's score is the number of squares still left unturned.



# Start the Application
There are 2 builds for the application Prod and Dev build.
>For our Development build, we are transpiling it from ES6+ and enabled Hot Module Reloading (HMR) for an easier development experience. Re bundling, we do NOT want to minify it or uglify it, so that we can explore features and find bugs more easily. Similarly, we want the images to stay as their own files so that they are more easily identifiable — as opposed to being encoded in Base64 straight into our CSS file.
>
>For our Production build, we want the file sizes to be as small as possible to increase app loading speed and usage speed (especially on mobile devices, which may have limited bandwidth). We also want there to be as few files as possible to reduce the number of requests from to the server. With all that in mind, were minifying and uglifying our code, with comments and blank space stripped out. We are also encoding images directly into our CSS files as Base64 to reduce the amount of files (as above).
>
Run the following commands for Dev build with HMR:-
` npm run buildDev`

`npm start`

To Run the Prod build use:-

`npm run buildProd`

`npm start`