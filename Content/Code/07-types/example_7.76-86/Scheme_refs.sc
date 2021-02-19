;; Scheme code from Section 7.7.1 (Examples 7.76 through 7.86)

(let
    ((t '(#\R (#\X ()()) (#\Y (#\Z ()()) (#\W ()())))))
    (car (cadr (caddr t))))

(let
    ((n '(#\N)))
    (print (cdr n))
    (newline)
    (set-cdr! n n)          ;; circular reference
    (print (cadddr n)))     ;; can dereference as often as we like!
