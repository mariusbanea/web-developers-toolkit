
# Strategy of building a react app

* step 1 - everything goes initially into a big parent stateless component

* step 2 - convert the big stateless component into multiple stateless components based on 2 rules:
    * sateless components need to be full functionality
    * sateless components need to be reusable

* step 3 - from the set of stateless components pick and choose a few statefull components based on 2 rules:
    * a statefull component is the component the user interacts with
    * a statefull component is the brain of the application (for game apps, this is the place where all the computation, validation, score counting is happening)
