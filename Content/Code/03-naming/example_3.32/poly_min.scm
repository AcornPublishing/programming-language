;; Example 3.32

(define min (lambda (a b) (if (< a b) a b)))

(min 123 456)
(min 3.14159 2.71828)

;; (min "abc" "def")        => run-time error
