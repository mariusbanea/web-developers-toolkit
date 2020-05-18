
# Strategy of building a react app

* step 1 - everything goes initially into a big parent __STATELESS__ component

* step 2 - convert the big stateless component into multiple __STATELESS__ components based on 2 rules:
    * __STATELESS__ components need to be full functionality
    * __STATELESS__ components need to be reusable

* step 3 - from the set of stateless components pick and choose a few __STATEFULL__ components based on 2 rules:
    * a __STATEFULL__ component is the component the user interacts with
    * a __STATEFULL__ component is the brain of the application (for game apps, this is the place where all the computation, validation, score counting is happening)
