# Steps to convert HTML to JSX for React components
Step 1: HTML validation
* avoid inline styling inside the html components (ex: < p style="color:red;" >< /p >) use CSS styles instead
* all the tags are closed ("< img >" becomes "< img />"; "< input >" becomes "< input />";)
* "img" tags need to have an "alt" attribute


Step 2: React conversion
* all html "class" attributes become "className"
* "value" attribute on inputs becomes "defaultValue"
* "for" attribute on labels becomes "htmlFor"
* manually format the html inside the return()
* all component names are going to be __InitialCapitalLetterAndCammelCaseAfterThat__ syntax
* all file names are going to be __all-lower-case-and-dashes-between-the-words__ syntax
