## A. What is Git?


1. Git (Global Information Tracker) is a version control system that is widely used for software development. It is a distributed revision control system with an emphasis on speed, data integrity and support for distributed, non-linear workflows.
2. Git was initially designed and developed in 2005 by Linux kernel developers (including Linus Torvalds) for Linux kernel development.
3. git (British informal noun) = an unpleasant or contemptible person (example "that mean old git")


## B. What is the difference between Git and Github?

1. Git is the system, Github is the interface to that system. The Git is like engine in a car and Github is the dashboard.
2. Apart from Github, you can also control Git using command line or Github Desktop software (https://desktop.github.com/):

    2.1. command line is most advanced tool to control git, but is going to display one thing at a time (status, current branch, etc)

    2.2. github desktop (purple cat software) can only complete basic tasks (commit, push, pull, etc) but is going to display full info about your repository

    2.3. github.com is website specialized in the collaborative (multiple user collaborate in the same code) part of the git


## C. What is Git used for?
1. To create backups (the most often usage):
        --> if the code has no bugs or conflicts and a part of the website is complete (for example "header ready").
2. To test new code:
        --> Create a new branch from the main and we call that branch the name of we want to build (lets say footer); we continue working on that branch until the footer is ready; after that we take all the code from the main, we make sure that there are no conflicts or errors, and than we push the code back to main (including the new functionality).
3. When multiple developers are working on the same code:
        --> Each developer creates a new branch with the name of they want to build (let’s say one is building the login and the other the shopping chart); they keep working in their own branches until they complete the tasks; after that they take all the code from the main, we make sure that there are no conflicts or errors, and than they push the code back to main (including the new functionality).


## D. How Git works?

There are 2 main cycles:

1. `Create-a-New-Project Cycle` (create the repository ON the Github.com SERVER here https://github.com/new and then clone it locally)

    1.1. Go to github.com and create a new repository

    1.2. Clone that repository from github.com on own computer using the command line or the Github Desktop UI Software

        * echo "# test" >> README.md

        * git init

        * git add README.md

        * git commit -m "first commit"

        * git remote add origin https://github.com/username/test.git

        * git push -u origin main

2. `Daily-Back-Up-Your-Project Cycle` (commit changes and synchronize)
        Note: Run the following command inside the repository folder

    2.1. add all the files in that particular folder to be pre-packed for the commit
    > git add . ;

    2.2. commit is happening only on the local machine (no communication with the server possible); -m stand for a message (it is a message to self about the content of that commit; example: changing the header color)
    > git commit -m 'Some message for you future self explaining why is this commit important';

    2.3. download all the code from the server and make sure there are no conflict with your own code
    >git pull origin main;

    2.4 synchronize your own code with the server
    >git push --set-upstream origin main;

    2.5 All commands on one line shortcut:
    > git add . ; git commit -m 'REPLACE-ME'; git pull origin main; git push --set-upstream origin main


## E. Common Git command lines

1. `git init`: Initialize a new git repository
2. `git add`: Stage a file for changes (watch these files for changes)
3. `git commit`: Commit a set of changes (take a snapshot of the code as it is right now)
4. `git status`: Shows the current status of a git repository
5. `git diff`: Shows the differences between commits
6. `git checkout`: Switch branches
7. `git reset`: Reset to a previous state
8. `git branch`: List, create, or delete branches
9. `git merge`: Join two or more branches
10. `git push`: Update remote repository


## F. When to commit code to the server?
1. when a particular part of the code is completed (let's say the footer is ready) BUT make sure there are no bugs or conflicts
2. at the end of the day (but only if the code is fully functional and has no bugs)




## G. Jargon Buster
Useful for the interview questions like "What is difference between clone and pull?")
1. `fork` = on the Github.com server, copy repository from one user account to another (this is done without any connection to your local computer)
2. `clone` = copy repository from your own account on the server to your own computer (only if you don't have project on your own computer)
3. `pull` = copy the existing code from the your repository in your online Github.com account to update the folder on your own computer
4. `push` = the code on your own computer to your repository in your online Github.com account to update




## H. main and branches names and usage
1. main (in production environment this is the live website)
2. facebook-login (some branch to test facebook login functionality)





## I. Re-initialize the repository

From command line (terminal) navigate to the repository folder and:
1. list all the files and folders in the repo folder (including the hidden ones)
> ls -a

2. delete the hidden .git folder
> rm -rf .git

3. then run the steps in the Create-a-New-Project Cycle above
