;;; Scheme code for Section 10.5
;;; (Examples 10.32 through 10.36)

;; Streams (Examples 10.26 and 10.27) don't work as shown in the book in
;; Scheme because Scheme uses applicative order evaluation.  They can be
;; made to work with delay and force; this is the subject of Exercise 10.14.

(map * '(2 4 6) '(3 5 7))                       ; (6 20 42)

(define fold (lambda (f l i)
    (if (null? l) i     ; i is commonly the identity element for f
        (f (car l) (fold f (cdr l) i)))))

(fold + '(1 2 3 4 5) 0)                         ; 15
(fold * '(1 2 3 4 5) 1)                         ; 120

(define total (lambda (l) (fold + l 0)))
(total '(1 2 3 4 5))                            ; 15

(define total-all (lambda (l)
    (map total l)))
(total-all '((1 2 3 4 5)
             (2 4 6 8 10)
             (3 6 9 12 15)))                    ; (15 30 45)

(define make-double (lambda (f) (lambda (x) (f x x))))
(define twice (make-double +))
(define square (make-double *))

(twice 3)                                       ; 6
(square 6)                                      ; 36

(define curried-plus (lambda (a) (lambda (b) (+ a b))))
((curried-plus 3) 4)                            ; 7
(define plus-3 (curried-plus 3))
(plus-3 4)                                      ; 7

(map (curried-plus 3) '(1 2 3))                 ; (4 5 6)

(define curry (lambda (f) (lambda (a) (lambda (b) (f a b)))))
(((curry +) 3) 4)                               ; 7
(define curried-plus2 (curry +))

(map (curried-plus2 3) '(1 2 3))                ; (4 5 6)
