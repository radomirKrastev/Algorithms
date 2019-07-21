namespace DiceRolls
{
    using System;
    using System.Collections.Generic;
    public class Program
    {
        public static void Main()
        {
            int dice = 3;
            var rolledDices = new List<int>();
            PrintDiceRolls(dice, rolledDices);
        }

        public static void PrintDiceRolls (int dice, List <int> rolledDices)
        {
            if (dice == 0)
            {
                Console.WriteLine(string.Join(" ", rolledDices));
            }

            else
            {
                for (int i = 1; i <= 6; i++)
                {
                    //choose 
                    rolledDices.Add(i);
                    //search/explore
                    PrintDiceRolls(dice - 1, rolledDices);
                    //un-choose
                    rolledDices.RemoveAt(rolledDices.Count - 1);
                }
            }
        }
    }
}
