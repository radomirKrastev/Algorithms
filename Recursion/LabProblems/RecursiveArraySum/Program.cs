namespace RecursiveArraySum
{
    using System;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            var array = Console.ReadLine().Split().Select(int.Parse).ToArray();

            var sum = Sum(array, 0);
            Console.WriteLine(sum);
        }

        public static int Sum(int[] array, int index)
        {
            if (index == array.Length)
            {
                return 0;
            }

            var sum = array[index] + Sum(array, index + 1);
            return sum;
        }
    }
}
