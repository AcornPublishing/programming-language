// Example 6.16

using System;
using System.Collections;

public class Wrap3 {

public static void Main(string[] args) {
    Hashtable ht = new Hashtable();

    ht[13] = 31;
    int m = (int) ht[13];

    Console.WriteLine(m);
}
}
