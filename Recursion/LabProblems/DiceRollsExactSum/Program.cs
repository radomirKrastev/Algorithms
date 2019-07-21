namespace DiceRolls
{
    using System;
    using System.Collections.Generic;
    public class Program
    {
        public static void Main()
        {
            var dice = int.Parse(Console.ReadLine());
            var rolledDices = new List<int>();
            var desiredSum = int.Parse(Console.ReadLine());
            var sumSoFar = 0;
            PrintDiceRolls(dice, rolledDices, desiredSum, sumSoFar);
        }

        public static void PrintDiceRolls(int dice, List<int> rolledDices, int desiredSum, int sumSoFar)
        {
            if (dice==0)
            {
                if (sumSoFar == desiredSum)
                {
                    Console.WriteLine(string.Join(" ", rolledDices));
                }                
            }

            else
            {
                for (int i = 1; i <= 6; i++)
                {
                    var minSum = sumSoFar + i + 1 * (dice - 1);
                    var maxSum = sumSoFar + i + 6 * (dice - 1);

                    if (desiredSum >= minSum && desiredSum <= maxSum)
                    {
                        //choose 
                        rolledDices.Add(i);
                        //search/explore
                        PrintDiceRolls(dice - 1, rolledDices, desiredSum, sumSoFar + i);
                        //un-choose
                        rolledDices.RemoveAt(rolledDices.Count - 1);
                    }                    
                }
            }
        }
    }
}
