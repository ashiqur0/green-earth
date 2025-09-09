1) What is the difference between var, let, and const?
    Answer: 
    const: When we declare a variable and do not want to change it's value then we declare the variable with const. Fo example, cost PI = 3.14;

    let: We use let to declare a variable when the values of our variable might get changes with time. Such as, let potatoPrice = 20;

    var: If we need to redeclare a variable in the same block or scope then we may use var.

2) What is the difference between map(), forEach(), and filter()?
    Answer: 
    map() method return a new array or object after performing one or many operation with each elements of an array or object.

    forEach() method do not return anything, it just perform operation with each elements of an array or object

    filter() method return a new array or object with match elements of an array or object.

3) What are arrow functions in ES6?
    Answer: Arrow function sort function. It allows to write function without using 'function' keyword. If one single parameter then do not need to use parenthesis at parameter section. If only one expression in arrow function body then do not need to use 'return' keyword to return to return something from the function. It reduces development time.

4) How does destructuring assignment work in ES6?
    Answer: 
    Array Destructuring: 
        i. Values are extracted from an array based on their position. The syntax uses square bracket on the left hand side of the assignment.
        ii. By using comma ',' to skip elements we do not want to assign
        iii. By using spread operator we can get remaining elements in a new array.

    Object Destructuring:
        i. Properties are extracted based on their property name. The syntax uses curly braces {} to the left hand side to assign values.
        ii. Assign a different variable name using clone ':'.
        iii. Using spread operator, we can assign remaining property to a new object.

    Nested Destructuring also possible by mirroring array or objects to their left hand side.


5) Explain template literals in ES6. How are they different from string concatenation?
    Answer: 
    Template Literals in ES6:
    Template literals are string literal enclosed by backtick(``) instead of using single or double quotes.
    We can use embedded expression in string literals by using ${expression}.
    It allows multiline string without using escape sequence character '\n'.

    How they are different from string concatenation:
    In string concatenation, we need to use concat() method or + operator to concat two or more string.
    But in string literals, we can inject anything (sting or number etc) by using ${} syntax embedding.
    String literals supports multiline string. But concatenation need to use '\n' scape sequence operator.