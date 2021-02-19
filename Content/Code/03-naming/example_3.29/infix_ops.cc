// Example 3.29

#include <iostream>
using std::cout;

struct complex {
    double real, imaginary;
    complex& operator+=(complex& other) {
        real += other.real;
        imaginary += other.imaginary;
        return *this;
    }
};

complex operator+(complex a, complex b) {
    complex r = a;      // uses default (bitwise) copy constructor
    return r += b;
}

void print_num (complex c) {
    cout << "(" << c.real << ", " << c.imaginary << ")\n";
}

main () {
    complex x = {1.0, 2.0};
    complex y = {3.0, 4.0};

    print_num (x + y);
}
