namespace BinarySearch
{
    using System;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            var arr = Console.ReadLine().Split().Select(int.Parse).ToArray();
            var key = int.Parse(Console.ReadLine());
            var index = BinarySearchAlgo.FindIndex(arr, key, 0, arr.Length - 1);
            Console.WriteLine(index);
        }
    }
}
