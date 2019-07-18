namespace GeneratingCombinations
{
    using System;
    using System.Linq;
    using System.Collections.Generic;
    public class Program
    {
        public static void Main()
        {
            var arr = Console.ReadLine().Split().Select(int.Parse).ToArray();
            var elements = int.Parse(Console.ReadLine());
            var combination = new int[elements];

            GenerateCombinations(arr, combination, 0, -1);
        }

        public static void GenerateCombinations (int [] arr, int [] combination, int index, int border)
        {
            if (index == combination.Length)
            {
                Console.WriteLine(string.Join(" ",combination));
            }

            else
            {
                for (int i = border+1; i < arr.Length; i++)
                {
                    combination[index] = arr[i];
                    GenerateCombinations(arr, combination, index + 1, i);
                }
            }
        }
    }
}
