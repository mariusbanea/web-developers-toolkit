# Iterative vs recursive algorithms

Both iteration and recursion are based on a control structure: Iteration uses a repetition structure; recursion uses a selection structure. 
* Iterative algorithm will use looping statements such as for loop, while loop or do-while loop to repeat the same steps;
* Recursive algorithm, a module (function) calls itself again and again till the base condition (stopping condition) is satisfied.


An Iterative algorithm will be faster than the Recursive algorithm because of overheads like calling functions and registering stacks repeatedly. Many times the recursive algorithms are not efficient as they take more space and time.

Recursive algorithms are mostly used to solve complicated problems when their application is easy and effective. For example Tower of Hannoi algorithm is made easy by recursion while iterations are widely used, efficient and popular.


A practical example: The birthday guy cuts the birthday cake and has to ensure that everyone in the room gets a slice.
* Iterative: The birthday guy uses a tray and goes around giving everyone a slice.
* Recursive: Take a slice of cake from the tray and pass the tray to the next person who takes a slice from the tray and passes the tray to the next person…