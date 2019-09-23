# Notebook-JS
Node.js version 10.16.3, standart default installation <br>
Practical task for JS transformation program

<h2>Supported operations:</h2>

<b>node app write --title=check --body=checkerField</b> <br>
<b>node app write -t=check -b=checkerField</b> <br>
<p>
<b>node app list </b><br> 
<p>
<b>node app read --title=navigate</b> <br>
<b>node app read -t=navigate</b> <br>
<p>
<b>node app delete --title=check</b> <br>
<b>node app delete -t=check</b> <br>
<p>

C:\--JS--\PRACTICAL TASKS\HT1>node app help
app [command]

Commands:<br>
  app write   also adding new note<br>
  app delete  deleting note from notebook by its title<br>
  app read    printing note in console by its title<br>
  app list    printing all titles of all notes<br>

Options:<br>
  --help     Show help                                                 [boolean]<br>
  --version  Show version number                                       [boolean]<br>


<b>Run report:</b> <br>

C:\--JS--\PRACTICAL TASKS\HT1>node app write -t=tracker -b="Next note to previous one"<br>
Note created successfully

C:\--JS--\PRACTICAL TASKS\HT1>node app list 

List of all current titles:
----------------------------
1. creator
2. example01
3. high
4. holds
5. navigate
6. stakeholder
7. shork
8. tracker

C:\--JS--\PRACTICAL TASKS\HT1>node app read -t=tracker

Reading note with title: tracker
----------------------------
Title: tracker <br>
Body: Next note to previous one

C:\--JS--\PRACTICAL TASKS\HT1>node app delete -t=tracker

Deleting note with title: tracker <br>
Note has been deleted successfully

C:\--JS--\PRACTICAL TASKS\HT1>node app list

List of all current titles:
----------------------------
1. creator
2. example01
3. high
4. holds
5. navigate
6. stakeholder
7. shork

C:\--JS--\PRACTICAL TASKS\HT1>


