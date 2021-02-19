// Example 3.7.  Passes through Portable.net cscc without complaint,
// but clearly violates the C# standard.  No entry point; compile -c

class A
{
    const int N = 10;

    void foo() {
        const int M = N;
            // should be an error, but pnet cscc permits it
        const int N = 20;
    }
}
