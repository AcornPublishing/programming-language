C   Example 3.30
C   This is Fortran 77

      real function min(x, y)
      real x, y
      min = y
      if (x .lt. y) min = x
      return
      end

      program coerce_min

      real a, b
      integer i, j

      a = 3.0
      b = 5.0

      i = 5
      j = 3

      print*, min(a, b)
      print*, min(i, j)

      end
