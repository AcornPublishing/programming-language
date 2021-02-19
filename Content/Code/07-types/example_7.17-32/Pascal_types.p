(* Pascal code from Section 7.2 (Examples 7.17 through 7.32) *)

program Pascal_types (input, output);
var
    A : set of 1..10; 
    B : set of 10..20; 
    C : set of 1..15; 
    i : 1..30; 
begin
    A := [1, 3, 5, 7, 9];
    for i := 1 to 30 do
        if i in A then
            write(i, " ");
    writeln;
    B := [12, 14, 16, 18, 20];
    for i := 1 to 30 do
        if i in B then
            write(i, " ");
    writeln;
    i := 18;
    C := A + B * [1..5, i];
        (* dynamic semantic error; not caught by gpc*)
    for i := 1 to 30 do
        if i in C then
            write(i, " ");
    writeln
end.
