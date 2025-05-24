# To-do List Extension for Google Chrome
## By: Munir Awwad
### Description
A Google Chrome extension to help users manage tasks and track task progress from within the browser. 

Built with HTML, CSS, and JavaScript.

### How to set up
Step 1) Download project files from the GitHub repository\
\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; a) Manual Download:\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; i) Click on the green "Code" button at the top right of the GitHub respository\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ii) Click "Download Zip"\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; iii) Unzip the ZIP file\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; b) Using terminal Git:\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; i) Install Git on your machine if its not already installed\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ii)  Open a terminal and navigate to where you want the folder to be located\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; iii) Type `git clone https://github.com/MunirAwwad/To-Do-List-Extension.git` into the terminal\
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; _A folder should have been created in the directory where you cloned the repository_ \
\
Step 2) Open Google Chrome and type `chrome://extensions/` into the URL bar.\
Step 3) Turn on "developer mode" on the top right of the screen.\
Step 4) Click on "load unpacked" and select the (unzipped) folder from your machine.

_*Important note: Since this is a local extension, DO NOT DELETE the (unzipped) folder from your machine as long as you want the extension to work._
### How to use
This extension is simple and easy to use
* Add tasks to your to-do list by typing the task name into the bar and clicking "Add"
* Change the status of tasks by clicking on their status circle where:
    * 🔴 -> "To Do"
    * 🟡 -> "In progress"
    * 🟢 -> "Done"
* Remove specific tasks by hovering over them and clicking the red "x"
* Clear the entire list by clicking "clear"
* Change the extension theme by clicking the theme button next to the title

_*Important note: this extension uses your browser's local storage to save your tasks, task statuses, and theme selection. If the browser local storage gets cleared, this data will be lost_
