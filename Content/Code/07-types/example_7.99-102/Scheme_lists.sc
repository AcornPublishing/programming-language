;; Scheme code for Section 7.8 (Examples 7.99 through 7.102)

(let ((l1 '(a b c d))
      (l2 '(a . (b . (c . (d . ())))))
      (l3 '(a . (b . (c . d)))))
    (print l1) (newline)
    (print l2) (newline)
    (print l3) (newline)
    (print (if (equal? l1 l2) "l1 equals l2" "l1 does not equal l2"))
    (newline)
    (print (if (equal? l1 l3) "l1 equals l3" "l1 does not equal l3"))
    (newline)
    (print (cdr (cdr (cdr l1))))
    (newline)
    (print (cdr (cdr (cdr l3))))
    (newline))

(print (cons 'a '(b)))          (newline)
(print (car '(a b)))            (newline)
; (print (car '()))             ;; error
(print (cdr '(a b c)))          (newline)
(print (cdr '(a)))              (newline)
; (print (cdr '()))             ;; error
    ;; use nil instead of () in Common Lisp
(print (append '(a b) '(c d)))  (newline)
