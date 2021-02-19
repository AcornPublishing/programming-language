      ! Figure 7.6
      ! This is Fortran 90

      program slices

      real, dimension (10, 10) :: matrix
      integer i, j

      real, dimension (4, 4) :: slice1
      real, dimension (5) :: slice2
      real, dimension (4, 4) :: slice3
      real, dimension (10, 3) :: slice4

      do j = 1, 10
          do i = 1, 10
              matrix(i, j) = (i-1)*10 + (j-1)
          enddo
      enddo

      slice1 = matrix(3:6, 4:7)
      slice2 = matrix(6:, 5)
      slice3 = matrix(:4, 2:8:2)
      slice4 = matrix(:, (/2, 5, 9/))

      do j = 1, 4
          print '(4F6.1)', slice1(:, j)
      enddo
      print*

      print '(5F6.1)', slice2
      print*

      do j = 1, 4
          print '(4F6.1)', slice3(:, j)
      enddo
      print*

      do j = 1, 3
          print '(10F6.1)', slice4(:, j)
      enddo

      end program slices
