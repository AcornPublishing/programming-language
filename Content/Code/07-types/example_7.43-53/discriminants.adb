-- Ada code for Section 7.3.4 (Examples 7.43 through 7.53)

procedure discriminants is

type element (naturally_occurring : Boolean := true) is record
    name : string (1..2);
    atomic_number : integer;
    atomic_weight : real;
    metallic : Boolean;
    case naturally_occurring is
        when true =>
            source : string_ptr;
            prevalence : real;
        when false =>
            lifetime : real;
    end case;
end record;

subtype natural_element is element (true);

type element_array is array (integer range <>) of element;
type alloy (num_components : integer) is record
    name : string (1..30);
    components : element_array (1..num_components);
    tensile_strength : real;
end record;

copper : element;
plutonium : element (false);
neptunium : element (naturally_occurring => false);
    -- alternative syntax

end discriminants;
