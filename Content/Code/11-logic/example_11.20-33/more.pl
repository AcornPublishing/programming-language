%% Prolog code for Sections 11.2.6 through 11.2.7 (Examples 11.20 through 11.33)

% 'not' isn't a built-in in gprolog.  If you're using a Prolog system in which
% it IS built in, you may need to comment out the next two lines.
not(X) :- call(X), !, fail.
not(_).

member3(X, [X|_]) :- !.
member3(X, [_|T]) :- member3(X, T).
    % member is built into many Prolog implementations;
    % I use another name here to avoid confusion.
    % The underscores here are "anonymous variables".  They are cheaper than
    % the named variables shown in the examples in the book, and don't elicit
    % the warnings from gprolog that the named variables do.

prime_candidate(X) :- member3(X, [2, 3, 5, 7, 9, 11, 13, 15]), prime(X).
prime(X) :- not(composite(X)).
composite(X) :- has_factor_below(X, X).
has_factor_below(X, Y) :- Z is Y - 1, Z > 1, W is X mod Z, W = 0, !.
has_factor_below(X, Y) :- Z is Y - 1, Z > 1, has_factor_below(X, Z).

member4(X, [X|_]).
member4(X, [H|T]) :- not(X = H), member4(X, T).

% conditionals (Example 11.23):
divisible_by_2_or_3(X) :- Z is X mod 2, Z = 0, !, write('by 2'), fail.
divisible_by_2_or_3(X) :- Z is X mod 3, Z = 0, write('by 3 but not by 2').

append2([], A, A).
append2([H | T], A, [H | L]) :- append2(T, A, L).
print_partitions(L) :- append2(A, B, L),
                       write(A), write(' '), write(B), nl,
                       fail.

natural(1).
natural(N) :- natural(M), N is M+1.

my_loop(N) :- natural(I), I =< N,
              write(I), nl,         % loop body (nl prints a newline)
              I = N, !, fail.

repeat2.
repeat2 :- repeat2.
getN(X) :- repeat2, get0(X), X >= 32, !.

rainy(rochester).
rainy(seattle).
cold(rochester).
snowy(X) :- rainy(X), cold(X).

% try the following:
% ?- rainy(X).
%     X = seattle;
%     X = rochester;
%     no
% ?- assert(rainy(syracuse)).
%     yes
% ?- rainy(X).
%     X = seattle;
%     X = rochester;
%     X = syracuse;
%     no
% ?- retract(rainy(rochester)).
%     yes
% ?- rainy(X).
%     X = seattle;
%     X = syracuse;
%     no

% Most of the examples in Section 11.2.7 must be tried interactively
% in a Prolog interpreter.  The following is useful, however:

param_loop(L, H, F) :- natural(I), I >= L, I =< H,
                       G =.. [F, I], call(G),
                       I = H, !, fail.
writeln(X) :- write(X), nl.

% ?- param_loop(5, 10, write).
