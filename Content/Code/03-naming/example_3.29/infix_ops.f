      ! Example 3.29
      ! This is Fortran 90

      module infix_ops

      interface operator(+)
          module procedure add_bool
      end interface

      contains

      function add_bool(i, j) result(k)
          logical, intent(in) :: i
          logical, intent(in) :: j
          logical             :: k
          k = i .OR. j
      end function add_bool

      end module infix_ops

      program main
      use infix_ops

      logical :: a = .true.
      logical :: b = .false.

      print*, a, ' OR ', b, ' = ', a+b

      a = .false.

      print*, a, ' OR ', b, ' = ', a+b

      end program main
