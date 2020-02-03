namespace HeapSort
{
    using System;

    public class Helper
    {
        public static bool IsLess(IComparable a, IComparable b)
        {
            return a.CompareTo(b) < 0;
        }

        public static void Swap<T>(T[] arr, int a, int b)
        {
            var temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }
    }
}
