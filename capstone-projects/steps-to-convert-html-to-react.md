# Steps to convert HTML to JSX for React components
* avoid inline styling inside the html components (ex: <p style="color:red;"></p>) use CSS styles instead
* all html "class" attributes become "className"
* all the tags are closed ("< img >" becomes "< img />"; "< input >" becomes "< input />";)
* "img" tags need to have an "alt" attribute
* "value" attribute on inputs becomes "defaultValue"
* "for" attribute on labels becomes "htmlFor"
* manually format the html inside the return()
* all component names are going to be __InitialCapitalLetterAndCammelCaseAfterThat__ syntax
* all file names are going to be __all-lower-case-and-dashes-between-the-words__ syntax
