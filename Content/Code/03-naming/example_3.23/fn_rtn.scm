;; Example 3.23

(define plus_x (lambda (x)
   (lambda (y) (+ x y))))

(let ((f (plus_x 2)))
   (f 3))
