// C# code from D&I box in Section 7.4.1

// This code demonstrates overloading of [].
// I've deliberately avoided using [] syntax for the Hashtable library class.

using System;
using System.Collections;

class directory {
    Hashtable table;                    // from standard library
    public directory() {                // constructor
        table = new Hashtable();
    }
    public string this[string name] {   // indexer method
        get {
            return (string) table.get_Item(name);
        }
        set {
            table.Add(name, value);
        }
    }
}

public class indexer
{
    public static void Main(String[] args)
    {
        directory d = new directory();

        d["Jane Doe"] = "234-5678";
        Console.WriteLine(d["Jane Doe"]);
    }
}
