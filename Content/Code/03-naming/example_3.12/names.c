// Figure 3.6 (Example 3.12)

#include <stdio.h>

/*
    Place into *s a new name beginning with the letter l and
    continuing with the ascii representation of an integer guaranteed
    to be distinct in each separate call.  s is assumed to point to
    space large enough to hold any such name; for the short ints used
    here, seven characters suffice.  l is assumed to be an upper or
    lower-case letter.  sprintf 'prints' formatted output to a string.
*/
void gen_new_name(char *s, char l) {
    static short int name_nums[52];
        /* C guarantees that static local variables without explicit
        initial values are initialized as if explicitly set to zero. */
    int index = (l >= 'a' && l <= 'z') ? l-'a' : 26 + l-'A';
    name_nums[index]++;
    sprintf(s, "%c%d\0", l, name_nums[index]);
}

int main () {
    char pword[7];
    char dword[7];
    char qword[7];

    gen_new_name(pword, 'p');
    gen_new_name(dword, 'd');
    gen_new_name(qword, 'q');

    printf ("%s %s %s\n", pword, dword, qword);

    gen_new_name(pword, 'p');
    gen_new_name(dword, 'd');
    gen_new_name(qword, 'q');

    printf ("%s %s %s\n", pword, dword, qword);

    return 0;
}
