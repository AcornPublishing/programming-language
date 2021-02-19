-- Example 3.29

with text_io; use text_io;

procedure infix_ops is

    type complex is record
        real : float;
        imaginary : float;
    end record;

    package f_io is new text_io.float_io(float);

    procedure print(x : complex) is
    begin
        put("(");
        f_io.put(x.real);
        put(", ");
        f_io.put(x.imaginary);
        put(")");
        new_line;
    end print;

    function "+"(a, b : complex) return complex is
        r : complex;
    begin
        r.real := a.real + b.real;
        r.imaginary := a.imaginary + b.imaginary;
        return r;
    end "+";

    x, y : complex;

begin
    x.real := 1.0;  x.imaginary := 2.0;
    y.real := 3.0;  y.imaginary := 4.0;
    print(x + y);
end infix_ops;
