/* Example 7.34 */

#define AN 6.022e23  /* Avogadro's number */

typedef struct element {
    char name[2];
    int atomic_number;
    double atomic_weight;
    _Bool metallic;
} element;

int main() {
    element copper;
    element my_element;
    double atoms, mass;

    copper.name[0] = 'C'; copper.name[1] = 'u';
    atoms = mass / copper.atomic_weight * AN;
    my_element = copper;
}
