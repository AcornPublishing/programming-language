;;; Scheme code for Sections 10.3 through 10.3.5
;;; (Examples 10.2 through 10.20)

(+ 3 4)                                     ; 7

;; ((+ 3 4))                                ; error

(quote (+ 3 4))                             ; (+ 3 4)

(let ((a 3))
    (if (> a 0) (+ 2 3) (+ 2 "foo")))       ; 5

;; (let ((a 0))
;;     (if (> a 0) (+ 2 3) (+ 2 "foo")))    ; error

(define min (lambda (a b) (if (< a b) a b)))

(min 123 456)                               ; 123
(min 3.14159 2.71828)                       ; 2.71828

(let ((a #t)
      (b #\x)
      (c "abc")
      (d 'foo)
      (e 123)
      (f '(1 . 2))
      (g '(1 2 3)))
  (print (boolean? a))      ; a is a Boolean
  (print (char? b))         ; b is a character
  (print (string? c))       ; c is a string
  (print (symbol? d))       ; d is a symbol
  (print (number? e))       ; e is a number
  (print (pair? f))         ; f is a (not necessarily proper) pair
  (print (list? g))         ; g is a (proper) list
  (newline)
  (print (boolean? b))      ; b is not a Boolean
  (print (char? c))         ; c is not a character
  (print (string? d))       ; d is not a string
  (print (symbol? e))       ; e is not a symbol
  (print (number? f))       ; f is not a number
  (print (pair? g))         ; g IS a (not necessarily proper) pair
  (print (list? a))         ; h is not a (proper) list
  (newline)
  )

(symbol? 'x$_%:&=*!)        ; #t

(lambda (x) (* x x))        ; #<procedure>

((lambda (x) (* x x)) 3 )   ; 9

(if (< 2 3) 4 5)            ; 4
(if #f 2 3)                 ; 3

(let ((a 3)
      (b 4)
      (square (lambda (x) (* x x)))
      (plus +))
  (sqrt (plus (square a) (square b))))      ; 5

(let ((a 3))
  (let ((a 4)
        (b a))
    (+ a b)))                               ; 7

(letrec ((fact
          (lambda (n)
            (if (= n 1) 1
              (* n (fact (- n 1)))))))
        (fact 5))                           ; 120

(define hypot
  (lambda (a b)
    (sqrt (+ (* a a) (* b b)))))
(hypot 3 4)                                 ; 5

(car '(2 3 4))                              ; 2
(cdr '(2 3 4))                              ; (3 4)
(cons 2 '(3 4))                             ; (2 3 4)

(cdr '(2))                                  ; ()        ; the empty list
(cons 2 3)                                  ; (2 . 3)   ; an improper list

(memq 'z '(x y z w))                        ; (z w)
(memq '(z) '(x y (z) w))                    ; #f
(member '(z) '(x y (z) w))                  ; ((z) w)

(if (memq 'z '(x y z w)) "yes" "no")        ; "yes"

(assq 'z '((x a) (y b) (z c) (w d)))        ; (z c)

(cond
 ((< 3 2) 1)
 ((< 4 3) 2)
 (else 3))                                  ; 3

(let ((x 2)
      (l '(a b)))
    (set! x 3)
    (set-car! l '(c d))
    (set-cdr! l '(e))
    (print x)                               ; 3
    (newline)
    (print l)                               ; ((c d) e)
    (newline)
)

(begin
 (display "hi ")
 (display "mom")
 (newline))

(define iter-fib (lambda (n)
    ; print the first n+1 Fibonacci numbers
    (do ((i 0 (+ i 1))      ; initially 0, inc'ed in each iteration
         (a 0 b)            ; initially 0, set to b in each iteration
         (b 1 (+ a b)))     ; initially 1, set to sum of a and b
        ((= i n) b)         ; termination test and final value
      (display b)           ; body of loop
      (display " "))))      ; body of loop

(iter-fib 10)               ; 1 1 2 3 5 8 13 21 34 55   89

(for-each (lambda (a b) (display (* a b)) (newline))
  '(2 4 6)
  '(3 5 7))                 ; 6 20 42

(define compose
  (lambda (f g)
    (lambda (x) (f (g x)))))
((compose car cdr) '(1 2 3))                ; 2

(define compose2
  (lambda (f g)
    (eval (list 'lambda '(x) (list f (list g 'x)))
          (scheme-report-environment 5))))
((compose2 car cdr) '(1 2 3))               ; 2
