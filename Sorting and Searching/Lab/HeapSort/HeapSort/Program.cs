namespace HeapSort
{
    using System;

    public class Program
    {
        public static void Main()
        {
            var arr = new int[] { 1, 23, 3, 500, 0, 500, 47, -132, 0, 3, 6, 5, 33, 89 };
            Heap<int>.Sort(arr);
            Console.WriteLine(string.Join(", ", arr));
        }
    }
}
