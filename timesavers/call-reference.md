TESTED ON: Visual Studio 1.37.1 on MacOs

(1) To find all uses of a call, you can use VSC's excellent **find in all files** command, accessible by right-clicking the folder you want to search. [^1]

(2) Then **copy all results** by right-clicking the search results to show the context menu. 

(3) Paste the results into a new window and now use the **find/replace** options to clean-up the output using **regular expressions** to extract the results you want. [^2] 

EXAMPLE:

result from *find all in files* using ".Publish(" as the key:
```
/Users/sri/Dev/meme-all/boilerplate/src/app-web/boot/SystemInit.jsx
  44,10:       UR.Publish('WINDOW:SIZE');
  99,8:     UR.Publish('WINDOW:SIZE');

/Users/sri/Dev/meme-all/boilerplate/src/app-web/components/EvidenceLink.jsx
  206,8:     UR.Publish('SELECTION_CHANGED');
  214,10:       UR.Publish('REQUEST_SELECT_EVLINK_SOURCE', { evId, rsrcId });

/Users/sri/Dev/meme-all/boilerplate/src/app-web/components/ModelSelect.jsx
  88,8:     UR.Publish('MODEL:ALLOW_EDIT');
```
Result of *find replace regex* using `^\s*([0-9]+),([0-9]+):.+Publish\(('.*'),?.*` as the search string and `PUB,$3,$1` as replace string (CSV format)
```
/Users/sri/Dev/meme-all/boilerplate/src/app-web/boot/SystemInit.jsx
PUB,'WINDOW:SIZE',44
PUB,'WINDOW:SIZE',99

/Users/sri/Dev/meme-all/boilerplate/src/app-web/components/EvidenceLink.jsx
PUB,'SELECTION_CHANGED',206
PUB,'REQUEST_SELECT_EVLINK_SOURCE',214

/Users/sri/Dev/meme-all/boilerplate/src/app-web/components/ModelSelect.jsx
PUB,'MODEL:ALLOW_EDIT',88
```
For Excel copy/paste friendliness, replace with: `\t$3\tPUB\t$1` and remove the root prefix (here, everything before app-web) for a cleaner look.


[^1] Pay attention to search options: case-sensitive, whole word, and regex. 
[^2] Make RegEx is selected. FIND uses different search parameters than FIND IN FILES
