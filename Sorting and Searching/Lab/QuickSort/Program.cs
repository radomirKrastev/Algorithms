namespace QuickSort
{
    using System;
    using System.Linq;
    class Program
    {
        public static void Main()
        {
            var array = Console.ReadLine().Split().Select(int.Parse).ToArray();

            Quick<int>.Sort(array);

            Console.WriteLine(string.Join(", ",array));
        }
    }
}
