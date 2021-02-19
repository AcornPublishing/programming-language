-- Examples 10.29 and 10.30
-- load this file, then try running the various f# functions

f1 = do putStr "hi, mom\n"

f2 = do putStr "hi, "
        putStr "mom\n"

putStr2 :: String -> IO [()]
    -- function from strings to sequences of null-typed actions
putStr2 s = sequence (map putChar s)

f3 = do putStr2 "hello again\n"

map2 :: (a->b) -> [a] -> [b]
map2 f [] = []
map2 f (h:t) = f h : map f t        -- ':' is like cons in Scheme

inc n = n + 1
f4 = map2 inc [1, 2, 3]             -- [2, 3, 4]

sequence2 :: [IO ()] -> IO ()
sequence2 [] = return ()
sequence2 (a:more) = do a; sequence2 more

f5 = sequence2 [putChar 'x', putChar 'y']
