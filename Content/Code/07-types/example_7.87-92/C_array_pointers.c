/* Examples 7.87 through 7.92 */

#include <stdio.h>

void foo(int a[], int *b,               /* equivalent */
         int *c[], int **d,             /* equivalent -- row pointers */
         int e[][10], int (*f)[10]);    /* equivalent -- contiguous */
      /* int g[][], int (*h)[]             erroneous */

double determinant(int rows, int cols, double M[rows][cols]) {
    int i, j;

    double val = M[i][j];

    double *N;
    val = *(N + (i * cols) + j);    /* backward-compatible equivalent */
}

int main() {
    int n;
    int *a, *p;     /* pointer to integer */
    int b[10];      /* array of 10 integers */
    int c[10][10];  /* 10x10 two-dimensional array */
    int *d[10];     /* row of 10 pointers to integers */
    double *e;
    double (*f)[10];

    a = b;          /* make a point to the initial element of b */
    n = a[3];
    n = *(a+3);     /* equivalent to previous line */
    n = b[3];
    n = *(b+3);     /* equivalent to previous line */

    b[3] = 3;
    printf("%d\n", 3[b]);

    a = &b[2];
    p = &b[4];
    printf("a %s p\n", a < p ? "<" : ">=");     /* < */

    c[2][3] = 4;
    printf("%d %d\n", (*(c+2))[3], *(*(c+2)+3));

    printf("%d %d %d %d %d\n", sizeof(e), sizeof(f), sizeof(*e),
                               sizeof(*f[0]), sizeof(*f));
}
