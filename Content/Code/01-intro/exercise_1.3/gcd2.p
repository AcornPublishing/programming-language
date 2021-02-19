(* Exercise 1.3 *)

program gcd2 (input, output);
var i, j : integer;
begin
    read (i, j);
    while i <> j do
        if i > j then i := i mod j
        else j := j mod i;
    writeln (j);
end.
