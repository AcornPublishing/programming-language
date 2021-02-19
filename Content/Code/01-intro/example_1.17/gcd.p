(* Example 1.17 *)

program gcd (input, output);
var i, j : integer;
begin
    read (i, j);
    while i <> j do
        if i > j then i := i - j
        else j := j - i;
    writeln (j);
end.
