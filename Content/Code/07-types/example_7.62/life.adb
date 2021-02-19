-- Figure 7.8 (Example 7.62)

with text_io; use text_io;

procedure life is

    subtype presence is integer range 0..1;
    type lifeboard is array (integer range <>, integer range <>) of presence;
        -- cell is 1 if occupied; 0 otherwise
        -- border row around the edge is permanently empty
    unexpected : exception;
    procedure move (B : in out lifeboard;
                     generations : in integer) is
    T : lifeboard (B'range(1), B'range(2));
        -- mimic the bounds of B
    begin
        for i in 1..generations loop
            T := B;   -- copy board, including empty borders
            for i in B'first(1)+1..B'last(1)-1 loop
                for j in B'first(2)+1..B'last(2)-1 loop
                    case T(i-1, j-1) + T(i-1, j) + T(i-1, j+1)
                            + T(i, j-1) + T(i, j+1)
                            + T(i+1, j-1) + T(i+1, j) + T(i+1, j+1) is
                        when 0 | 1 => B(i, j) := 0;
                            -- die of loneliness
                        when 2 => B(i, j) := T(i, j);
                            -- no-op; survive if present
                        when 3 => B(i, j) := 1;
                            -- reproduce
                        when 4..8 => B(i, j) := 0;
                            -- die of over-crowding
                        when others =>
                            raise unexpected;
                    end case;
                end loop;
            end loop;
        end loop;
    end move;

    procedure printboard (B : in lifeboard) is
    begin
        for i in B'first(1)..B'last(1) loop
            for j in B'first(2)..B'last(2) loop
                if B(i, j) = 1 then
                    put (" o");
                else
                    put (" .");
                end if;
            end loop;
            new_line;
        end loop;
        new_line;
    end printboard;

B : lifeboard(1..10,1..10);

begin
    for i in 1..10 loop
        for j in 1..10 loop
            B(i, j) := 0;
        end loop;
    end loop;

    -- The following five lines create a "glider", a well known moving
    -- pattern.  The four subsequent calls to "move" cause the glider to
    -- advance one position down and right.

    B(2,3) := 1;
    B(3,4) := 1;
    B(4,2) := 1;
    B(4,3) := 1;
    B(4,4) := 1;

    printboard (B);
    move(B, 1);
    printboard (B);
    move(B, 1);
    printboard (B);
    move(B, 1);
    printboard (B);
    move(B, 1);
    printboard (B);

end life; 
