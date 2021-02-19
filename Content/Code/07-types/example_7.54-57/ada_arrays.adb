-- Ada code from Section 7.4.1 (Examples 7.54 through 7.57)

with text_io; use text_io;

procedure ada_arrays is

upper : array (character range 'a'..'z') of character :=
    ('A', 'B', 'C', 'D', 'E', 'F',
     'G', 'H', 'I', 'J', 'K', 'L',
     'M', 'N', 'O', 'P', 'Q', 'R',
     'S', 'T', 'U', 'V', 'W', 'X',
     'Y', 'Z');

type real is new long_float;
matrix : array (1..10, 1..10) of real;
type vector is array (1..10) of real;
matrix2 : array (1..10) of vector;

package real_io is new float_io(real); use real_io;

begin
    for i in 1..10 loop
        for j in 1..10 loop
            matrix(i, j) := real((i-1)*10 + (j-1));
            matrix2(i)(j) := real((i-1)*10 + (j-1));
        end loop;
    end loop;
    put (upper('k'));
    real_io.put(matrix(3, 4), 6, 2);
    real_io.put(matrix2(3)(4), 6, 2);
    new_line;
end ada_arrays; 
