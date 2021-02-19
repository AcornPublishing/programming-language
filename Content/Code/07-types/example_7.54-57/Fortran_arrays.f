      ! Fortran code from Section 7.4.1 (Examples 7.54 through 7.57)
      ! This is Fortran 90

      program Fortran_arrays

      character, dimension (1:26) :: upper
      character (26) upper2    ! shorthand notation
      integer i, j

      real, dimension (10,10) :: matrix

      do i = 1, 26
          upper(i) = char(i-1 + ichar('A'))
      enddo

      do i = 1, 10
          do j = 1, 10
              matrix(i, j) = (i-1)*10 + (j-1)
          enddo
      enddo

      print*, upper(10), matrix(3, 4)

      end program Fortran_arrays
