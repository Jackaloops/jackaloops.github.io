#include <stdio.h>

int main() {
    char *x = "Hello";
    int i = 0;
    while( x[i] != '\0')
        printf( "%c", x[i++]);
    printf("\n");
    return 0;
}