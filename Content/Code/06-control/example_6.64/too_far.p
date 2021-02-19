program too_far (input, output);
var c : 'a'..'z';
begin
    for c := 'a' to 'e' do begin
        write(c);
    end;
    writeln;
    writeln('Now c is ', c);

    for c := 'a' to 'z' do begin
        write(c);
    end;
    writeln;
    writeln('Now c is ', c);
        (* NB: what you will get here is implementation dependent.
           Gpc always gives you the last valid index. *)
end.
