;;; Examples 10.24 and 10.25

(define double (lambda (x) (+ x x)))

(double (* 3 4))                                ; 24

(define switch (lambda (x a b c)
    (cond ((< x 0) a)
          ((= x 0) b)
          ((> x 0) c))))

(switch -1 (+ 1 2) (+ 2 3) (+ 3 4))             ; 3
