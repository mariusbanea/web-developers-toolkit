# Steps to convert HTML to JSX for React components
* all html "class" attributes become "className"
* all the tags are closed ("< img >" becomes "< img />"; "< input >" becomes "< input />";)
* img need to have an "alt" attribute
* "value" attribute on inputs becomes "defaultValue"
* "for" attribute on labels becomes "htmlFor"
* manually format the html inside the return()
* all component names are going to be InitialCapitalLetterAndCammelCaseAfterThat syntax
* all file names are going to be all-lower-case-and-dashes-between-the-words syntax
