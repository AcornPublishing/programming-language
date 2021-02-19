%% Examples 11.35 and 11.36

append2([], A, A).
append2([H | T], A, [H | L]) :- append2(T, A, L).

declarative_sort(L1, L2) :- permutation2(L1, L2), sorted(L2).
permutation2([], []).
permutation2(L, [H|T]) :- append2(P, [H|S], L), append2(P, S, W),
                          permutation2(W, T).
sorted([]).
sorted([_]).
sorted([A, B|T]) :- A =< B, sorted([B|T]).

quicksort([], []).
quicksort([A|L1], L2) :- partition(A, L1, P1, S1),
                         quicksort(P1, P2), quicksort(S1, S2),
                         append2(P2, [A|S2], L2).
partition(_, [], [], []).
partition(A, [H|T], [H|P], S) :- A >= H, partition(A, T, P, S).
partition(A, [H|T], P, [H|S]) :- A =< H, partition(A, T, P, S).
