// Example 3.29

using System;

public class infix_ops {

class complex {
    public double real, imaginary;
    public complex(double r, double i) { real = r;  imaginary = i; }
    public complex(complex a) { real = a.real;  imaginary = a.imaginary; }
    static public complex operator +(complex a, complex b) {
        complex r = new complex(a);
        r.real += b.real;
        r.imaginary += b.imaginary;
        return r;
    }
    public void print() {
        Console.Write("(");
        Console.Write(real);
        Console.Write(", ");
        Console.Write(imaginary);
        Console.WriteLine(")");
    }
};

public static void Main(string[] args) {
    complex x = new complex(1.0, 2.0);
    complex y = new complex(3.0, 4.0);

    (x + y).print();
    x.print();
    y.print();
}
}
