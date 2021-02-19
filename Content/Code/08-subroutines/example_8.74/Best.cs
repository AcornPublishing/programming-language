// Example 8.67

using System;

public delegate bool Chooser<T>(T a, T b);

class Arbiter<T> {
    T bestSoFar;
    Chooser<T> comp;

    public Arbiter(Chooser<T> c) {
        comp = c;
        bestSoFar = default(T);
    }
    public void Consider(T t) {
        if (bestSoFar == default(T) || comp(t, bestSoFar)) bestSoFar = t;
    }
    public T Best() {
        return bestSoFar;
    }
}

public class Best {
    public static bool CaseSensitive(String a, String b) {
        return String.Compare(a, b) < 1;
    }
    public static bool CaseInsensitive(Object a, Object b) {
        return String.Compare(a.ToString(), b.ToString(), true) < 1;
    }
    public static void Main(String[] args)
    {
        Arbiter<String> csNames =
            new Arbiter<String>(new Chooser<String>(CaseSensitive));
        csNames.Consider("Apple");
        csNames.Consider("aardvark");
        Console.WriteLine(csNames.Best());      // Apple

        Arbiter<String> ciNames =
            new Arbiter<String>(new Chooser<String>(CaseInsensitive));
        ciNames.Consider("Apple");
        ciNames.Consider("aardvark");
        Console.WriteLine(ciNames.Best());      // aardvark
    }
}
