%% Figure 11.4 (Example 11.29)

% 'not' isn't a built-in in gprolog.  If you're using a Prolog system in which
% it IS built in, you may need to comment out the next two lines.
not(X) :- call(X), !, fail.
not(_).

% gprolog also needs to be told that a query that doesn't match anything in
% the database (e.g. 'x' or 'o' at the beginning of a game) should simply fail.
% start it up with 'gprolog --query-goal "set_prolog_flag(unknown, fail)"

% finally, gprolog lacks 'assert'; one has to use 'assertz'

ordered_line(1,2,3).
ordered_line(4,5,6).
ordered_line(7,8,9).
ordered_line(1,4,7).
ordered_line(2,5,8).
ordered_line(3,6,9).
ordered_line(1,5,9).
ordered_line(3,5,7).
line(A,B,C) :- ordered_line(A,B,C).
line(A,B,C) :- ordered_line(A,C,B).
line(A,B,C) :- ordered_line(B,A,C).
line(A,B,C) :- ordered_line(B,C,A).
line(A,B,C) :- ordered_line(C,A,B).
line(A,B,C) :- ordered_line(C,B,A).

full(A) :- x(A).
full(A) :- o(A).
empty(A) :- not(full(A)).
% NB: empty must be called with an already-instantiated A.

same(A,A).
different(A,B) :- not(same(A,B)).

move(A) :- good(A), empty(A), !.

% strategy:
good(A) :- win(A).
good(A) :- block_win(A).
good(A) :- split(A).
good(A) :- strong_build(A).
good(A) :- weak_build(A).

% defaults:
good(5).
good(1).  good(3).  good(7).  good(9).
good(2).  good(4).  good(6).  good(8).

win(A) :- x(B), x(C), line(A,B,C).
block_win(A) :- o(B), o(C), line(A,B,C).
split(A) :- x(B), x(C), different(B,C), line(A,B,D), line(A,C,E),
    empty(D), empty(E).
strong_build(A) :- x(B), line(A,B,C), empty(C), not(risky(C)).
weak_build(A) :- x(B), line(A,B,C), empty(C), not(double_risky(C)).

risky(C) :- o(D), line(C,D,E), empty(E).
double_risky(C) :- o(D), o(E), different(D,E), line(C,D,F), line(C,E,G),
                   empty(F), empty(G).

all_full :- full(1), full(2), full(3), full(4), full(5), full(6),
            full(7), full(8), full(9).
done :- ordered_line(A,B,C), x(A), x(B), x(C),
    write('I won.'), nl.
done :- all_full, write('Draw.'), nl.

getmove :- repeat, write('Please enter a move: '), read(X),
           empty(X), assertz(o(X)).
makemove :- move(X), !, assertz(x(X)).
makemove :- all_full.

printsquare(N) :- o(N), write(' o ').
printsquare(N) :- x(N), write(' x ').
printsquare(N) :- empty(N), write('   ').
printboard :-
    printsquare(1), printsquare(2), printsquare(3), nl,
    printsquare(4), printsquare(5), printsquare(6), nl,
    printsquare(7), printsquare(8), printsquare(9), nl.
clear :- x(A), retract(x(A)), fail.
clear :- o(A), retract(o(A)), fail.

play :- not(clear), repeat, getmove, respond.
respond :- ordered_line(A,B,C), o(A), o(B), o(C),
    printboard, write('You won.'), nl.
    % (shouldn't ever happen!)
respond :- makemove, printboard, done.
