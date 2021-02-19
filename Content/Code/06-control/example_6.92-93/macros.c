/* Examples 6.92 and 6.93 */

#include <stdio.h>

#define DIVIDES(a,n) (!((n) % (a)))
/* true iff n has zero remainder modulo a */

#define MAX(a,b) ((a) > (b) ? (a) : (b))

int main() {
    int y = 3;
    int z = 2;
    int x = 15;
    if (DIVIDES(y + z, x)) {
        printf("%d divides %d\n", y + z, x);
    } else {
        printf("%d does not divide %d\n", y + z, x);
    }

    printf("%d %d\n", x, y);
    z = MAX(x++, y++);
    printf("%d %d -- oops!\n", x, y);
}
