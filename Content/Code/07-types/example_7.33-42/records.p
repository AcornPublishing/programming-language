(* Pascal code for Sections 7.3.1 through 7.3.3
    (Examples 7.33 through 7.42) *)

program records (input, output);

const AN = 6.022e23; (* Avogadro's number *) 

type
    two_chars = packed array [1..2] of char;
        (* Packed arrays will be explained in Example 7.39.
           Packed arrays of char are compatible with quoted strings. *)

    element = record
        name : two_chars;
        atomic_number : integer;
        atomic_weight : real;
        metallic : Boolean
    end;

    element2 = packed record
        name : two_chars;
        atomic_number : integer;
        atomic_weight : real;
        metallic : Boolean
    end;

    short_string = packed array [1..30] of char;
    ore = record
        name : short_string;
        element_yielded : record
            name : two_chars;
            atomic_number : integer;
            atomic_weight : real;
            metallic : Boolean
        end
    end;

    ore2 = record
        name : short_string;
        element_yielded : element
    end;

    mineral = record
        chemical_composition : record
            elements : array [1..50] of element;
        end;
    end;

var
    copper : element; 
    ruby : mineral;
    my_element : element;
    atoms : real;
    mass : real;

begin
    copper.name := 'Cu'; 
    atoms := mass / copper.atomic_weight * AN; 
    my_element := copper;

    ruby.chemical_composition.elements[1].name := 'Al';
    ruby.chemical_composition.elements[1].atomic_number := 13;
    ruby.chemical_composition.elements[1].atomic_weight := 26.98154;
    ruby.chemical_composition.elements[1].metallic := true;

    with ruby.chemical_composition.elements[1] do begin
        name := 'Al';
        atomic_number := 13;
        atomic_weight := 26.98154;
        metallic := true
    end;
end.
