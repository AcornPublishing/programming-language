program gotos (input, output);

label 100;

const
    buflen = 80;
    strlen = 30;
    numfiles = 3;

type
    buf = packed array [1..buflen] of char;
(*  string = packed array [1..strlen] of char; *)

var
    line : buf;
    file_list : array [1..numfiles] of string(30);
        (* roughly equivalent in gpc to the packed array type commented
           out above, but usable in the nonstandard reset routine *)
    i, j : integer;

function all_blanks(var l : buf) : Boolean;
var i : integer;
begin
    all_blanks := true;
    for i := 1 to buflen do
        if l[i] <> ' ' then all_blanks := false;
end; (* function all_blanks *)

function read_line : buf;
var
    i : integer;
    temp : buf;
begin
    for i := 1 to buflen do
        if eoln then
            temp[i] := ' '
        else
            read(temp[i]);
    readln;
    read_line := temp
end; (* procedure read_line *)

procedure consume_line(var l : buf);
label 200;
var i : integer;
begin
    for i := 1 to buflen do begin
        if l[i] = '%' then begin
            writeln;
            goto 200
            (* use goto for early return from procedure;
               rest of line is a comment *)
        end;
        write(l[i])
    end;
 200:;
end; (* procedure consume_line *)

function search(key : string) : buf;
label 300;
var
    i : integer;
    rtn : buf;

    function found(key : string; line : buf) : Boolean;
    (* assume that key has no internal blanks,
       and that line must start with key *)
    label 400;
    var j : integer;
    begin
        found := false;
        for j := 1 to buflen do begin
            if key[i] = ' ' then begin
                found := true;
                goto 400
            end;
            if key[i] <> line[i] then goto 400
        end;
        found := true;  (* whole line matched *)
     400:;
    end;

    procedure search_file(fname : string);
    begin
        reset(input, fname);
        (* Association of Pascal files variables with external systems
           files is nonstandard.  This program uses syntax supported
           by gpc . *)
        while not eof do begin
            (* iterate over lines *)
            line := read_line;
            if found(key, line) then begin
                rtn := line;
                goto 300;
                    (* use goto for multilevel escape from procedure *)
            end;
        end;
    end;

begin (* search *)
    for i := 1 to numfiles do
        search_file(file_list[i]);
    rtn := 'key not found';
 300:
    return rtn;
end;

begin (* program gotos *)

    reset(input, 'first_file');

    while not eof do begin
        line := read_line;
        if all_blanks(line) then goto 100;
            (* use goto for early escape from loop *)
        consume_line(line)
    end;
 100:

    writeln;

    file_list[1] := 'first_file';
    file_list[2] := 'second_file';
    file_list[3] := 'third_file';

    writeln(search('foo'));
    writeln(search('bar'));

end. (* program gotos *)
