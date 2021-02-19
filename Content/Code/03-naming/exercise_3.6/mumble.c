// Figure 3.18 (Exercise 3.6)
// Run 'limit vmemoryuse 2048k' from the shell before executing
// this program to see the memory problem.

typedef struct list_node {
    void *data;
    struct list_node *next;
} list_node;

list_node *insert(void *d, list_node *L) {
    list_node *t = (list_node *) malloc(sizeof(list_node));
    t->data = d;
    t->next = L;
    return t;
}

list_node *reverse(list_node *L) {
    list_node *rtn = 0;
    while (L) {
        rtn = insert(L->data, rtn);
        L = L->next;
    }
    return rtn;
}

void delete_list(list_node *L) {
    while (L) {
        list_node *t = L;
        L = L->next;
        free(t->data);
        free(t);
    }
}

typedef struct widget {
    int i;
} widget;

int main() {
    int i;
    for (i = 0; i < 1000000; i++) {
        list_node *L = 0;
        widget *a = (widget *) malloc(sizeof(widget));
        widget *b = (widget *) malloc(sizeof(widget));
        widget *c = (widget *) malloc(sizeof(widget));
        insert(a, L);
        insert(b, L);
        insert(c, L);
        L = reverse(L);
        delete_list(L);
    }
}
