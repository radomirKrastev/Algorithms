namespace CombinationsWithoutRepetitions
{
    using System;
    using System.Collections.Generic;
    public class Program
    {
        public static void Main()
        {
            var lastNumber = int.Parse(Console.ReadLine());
            var combinationLength = int.Parse(Console.ReadLine());
            var combination = new List<int>();
            var limit = 0;

            PrintCombinations(lastNumber, combinationLength, combination, limit);
        }

        public static void PrintCombinations (int border, int length, List <int> combination, int limit)
        {
            if (length == 0)
            {
                Console.WriteLine(string.Join(" ",combination));
            }

            else
            {
                for (int i = 1; i <= border; i++)
                {
                    if (limit < i)
                    {
                        combination.Add(i);
                    }

                    else
                    {
                        continue;
                    }

                    PrintCombinations(border, length - 1, combination, i);
                    combination.Remove(combination[combination.Count - 1]);
                }
            }
        }
    }
}
