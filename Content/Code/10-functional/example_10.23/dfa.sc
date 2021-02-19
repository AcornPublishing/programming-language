;;; Figure 10.1 (Example 10.23)

(define simulate
  (lambda (dfa input)
(cons (car dfa)                 ; start state
      (if (null? input)
          (if (infinal? dfa) '(accept) '(reject))
        (simulate (move dfa (car input)) (cdr input))))))

(define infinal?
  (lambda (dfa)
(memq (car dfa) (caddr dfa))))

(define move
  (lambda (dfa symbol)
(let ((curstate (car dfa)) (trans (cadr dfa)) (finals (caddr dfa)))
  (list
   (if (eq? curstate 'error)
       'error
     (let ((pair (assoc (list curstate symbol) trans)))
       (if pair (cadr pair) 'error)))
   trans
   finals))))

(simulate
 '(q0                                                 ; start state
   (((q0 0) q2) ((q0 1) q1) ((q1 0) q3) ((q1 1) q0)   ; transition fn
    ((q2 0) q0) ((q2 1) q3) ((q3 0) q1) ((q3 1) q2))
   (q0))                                              ; final states
 '(0 1 1 0 1))                                        ; input string
                    ; (q0 q2 q3 q2 q0 q1 reject)

(simulate
 '(q0                                                 ; start state
   (((q0 0) q2) ((q0 1) q1) ((q1 0) q3) ((q1 1) q0)   ; transition fn
    ((q2 0) q0) ((q2 1) q3) ((q3 0) q1) ((q3 1) q2))
   (q0))                                              ; final states
 '(0 1 0 0 1 0))                                      ; input string
                    ; (q0 q2 q3 q1 q3 q2 q0 accept)
