
# Strategy of building a react app

* step 1 - everything goes initially into a big parent __stateless__ component

* step 2 - convert the big stateless component into multiple __stateless__ components based on 2 rules:
    * __sateless__ components need to be full functionality
    * __sateless__ components need to be reusable

* step 3 - from the set of stateless components pick and choose a few __statefull__ components based on 2 rules:
    * a __statefull__ component is the component the user interacts with
    * a __statefull__ component is the brain of the application (for game apps, this is the place where all the computation, validation, score counting is happening)
