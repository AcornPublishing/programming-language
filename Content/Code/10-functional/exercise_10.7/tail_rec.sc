;;; Exercise 10.7

;; compute integer log, base 2
;; (number of bits in binary representation)
;; works only for positive integers
(define log2
  (lambda (n)
    (if (= n 1) 0 (+ 1 (log2 (quotient (+ n 1) 2))))))

;; find minimum element in a list
(define min
  (lambda (l)
    (cond
     ((null? l) '())
     ((null? (cdr l)) (car l))
     (#t (let ((a (car l))
               (b (min (cdr l))))
           (if (< b a) b a))))))
