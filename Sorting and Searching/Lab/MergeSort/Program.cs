namespace MergeSort
{
    using System;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            var array = Console.ReadLine().Split().Select(int.Parse).ToArray();

            MergeSort<int>.Sort(array);

            Console.WriteLine(string.Join(", ", array));
        }
    }
}
