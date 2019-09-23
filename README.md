# Notebook-JS
Node.js version 10.16.3, standart default installation <br>
Practical task for JS transformation program

<h2>Supporting operations:</h2>

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



C:\--JS--\PRACTICAL TASKS\HT1>node app write --title=check --body=checkerField
Notebook application started...
{ _: [ 'write' ],
  title: 'check',
  body: 'checkerField',
  '$0': 'app' }
Constructor created the instance of notebook...

C:\--JS--\PRACTICAL TASKS\HT1>node app list
Notebook application started...
{ _: [ 'list' ], '$0': 'app' }
Constructor created the instance of notebook...

List of all current titles:
----------------------------
1. check
2. example01
3. navigate
4. stakeholder

C:\--JS--\PRACTICAL TASKS\HT1>node app read --title=navigate
Notebook application started...
{ _: [ 'read' ], title: 'navigate', '$0': 'app' }
Constructor created the instance of notebook...

Reading note with title: navigate
----------------------------
navigate
positionNine

C:\--JS--\PRACTICAL TASKS\HT1>node app delete --title=check
Notebook application started...
{ _: [ 'delete' ], title: 'check', '$0': 'app' }
Constructor created the instance of notebook...

Deleting note with title: check

C:\--JS--\PRACTICAL TASKS\HT1>node app list
Notebook application started...
{ _: [ 'list' ], '$0': 'app' }
Constructor created the instance of notebook...

List of all current titles:
----------------------------
1. example01
2. navigate
3. stakeholder

C:\--JS--\PRACTICAL TASKS\HT1>

