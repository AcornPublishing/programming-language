-- Examples 7.135 and 7.136

with text_io; use text_io;

procedure tio is

my_file : file_type;
s : string (1..20);
type real is digits 8;
n : integer;
r : array (1..10) of real;
package int_io is new integer_io(integer); use int_io;
package real_io is new float_io(real); use real_io;

begin
    n := 3;
    s := "hi, mom             ";
    for i in 1..10 loop
        r(i) := real(i);
    end loop;
    open (my_file, out_file, "out");
    set_output (my_file);
    put (n, 10);
    new_line;
    put (s);
    new_line;
    for i in 1..10 loop
        put (r(i), 5, 2);
    end loop;
    new_line;

    put (my_file, n, 10);
    new_line;
    put (my_file, s);
    new_line;
    for i in 1..10 loop
        put (my_file, r(i), 5, 2);
    end loop;
    new_line;
end;
