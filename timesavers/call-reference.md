TESTED ON: Visual Studio 1.37.1 on MacOs

(1) To find all uses of a call, you can use VSC's excellent **find in all files** command, accessible by right-clicking the folder you want to search. [^1]

(2) Then **copy all results** by right-clicking the search results to show the context menu. 

(3) Paste the results into a new window and now use the **find/replace** options to clean-up the output using **regular expressions** to extract the results you want. [^2] 

EXAMPLE:

result from *find all in files* using ".Publish(" as the key:
```
vsls:/boilerplate/src/app-web/boot/SystemInit.jsx
  44,10:       UR.Publish('WINDOW:SIZE');
  99,8:     UR.Publish('WINDOW:SIZE');

vsls:/boilerplate/src/app-web/components/EvidenceLink.jsx
  141,8:     UR.Publish('SHOW_EVIDENCE_LINK', { evId: newEvLink.evId, rsrcId: newEvLink.rsrcId });
  214,8:     UR.Publish('SELECTION_CHANGED');
  222,10:       UR.Publish('REQUEST_SELECT_EVLINK_SOURCE', { evId, rsrcId });

vsls:/boilerplate/src/app-web/components/EvidenceLinkOrig.jsx
  183,8:     UR.Publish('SELECTION_CHANGED');
  191,10:       UR.Publish('REQUEST_SELECT_EVLINK_SOURCE', { evId, rsrcId });
  258,8:     UR.Publish('STICKY:OPEN', {

vsls:/boilerplate/src/app-web/components/ModelSelect.jsx
  88,8:     UR.Publish('MODEL:ALLOW_EDIT');
```
Result of *find replace regex* using `^\s*([0-9]+),([0-9]+):.+Publish\(('.*').*` as the search string and `PUB\t$3\t$1` as replace string (CSV format)

```
vsls:/boilerplate/src/app-web/boot/SystemInit.jsx
'WINDOW:SIZE', PUB, 4
'WINDOW:SIZE', PUB, 9

vsls:/boilerplate/src/app-web/components/EvidenceLink.jsx
'SHOW_EVIDENCE_LINK', PUB, 1
'SELECTION_CHANGED', PUB, 4
'REQUEST_SELECT_EVLINK_SOURCE', PUB, 2

vsls:/boilerplate/src/app-web/components/EvidenceLinkOrig.jsx
'SELECTION_CHANGED', PUB, 3
'REQUEST_SELECT_EVLINK_SOURCE', PUB, 1
'STICKY:OPEN', PUB, 8

vsls:/boilerplate/src/app-web/components/ModelSelect.jsx
'MODEL:ALLOW_EDIT', PUB, 8

```
For Excel copy/paste friendliness: `\t$3\tPUB\t$1`


[^1] Pay attention to search options: case-sensitive, whole word, and regex. 
[^2] Make RegEx is selected. FIND uses different search parameters than FIND IN FILES
