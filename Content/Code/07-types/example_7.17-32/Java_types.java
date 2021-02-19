// Java code from Section 7.2 (Examples 7.17 through 7.32)

import java.util.*; // library containing Stack container class

class Foo {
    int n;          // placeholder
}

public class Java_types {

public static void main(String args[])
{
    Stack myStack = new Stack();    // raw type in Java 5
    String s = "Hi, Mom";
    Foo f = new Foo(); // f is of user-defined class type Foo

    myStack.push(s);
    myStack.push(f); // we can push any kind of object on a stack

    s = (String) myStack.pop();
    // Type cast is required, and will generate an exception at run
    // time, since element at top-of-stack is not a string.
}
}
