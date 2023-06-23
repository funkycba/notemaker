# notemaker

## What Notemaker is made of

    This is a personal storage for containing any notes to save within npm. With a few components installed, the notemaker is able to run smoothly. First, the packages must be installed via "npm i." But I did also have to include "npm i fs" so keep that in mind. There are two folders: db and public which contains assets and then index.html, and notes.html. The html files act as our pages where we can interact with our notemaker. So, this is how we will manually add notes through web pages. To get the functions set up, there has to be a db.json found in the "db" folder. Also, we will need a ".gitignore" where we include "node_modules." Next, we have a server.js for our functions while db.json serves to store notes as well as any more added through the npm terminal.

## How it is executed
    
    In simple terms, you are going to run the terminal with "npm run start." The terminal will include a link that says "localhost:3001" in it. Click the link to access the webpage. You should see a button that says "Get started." Click it and you'll find a page with a column of example notes and in the center, a placeholder. In the placeholder, type any notes you want (a title and the text). Click on the save icon that appears in the upper right corner of the page. Then, the terminal will display your input and if you look in the db file, you should be able to see your notes added in along with the others.

### 