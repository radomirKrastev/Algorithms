namespace EightQueens
{
    using System;
    using System.Collections.Generic;
    public class Program
    {
        public static void Main()
        {
            var field = new Dictionary<int, List<char>>();

            for (int i = 1; i <= 8; i++)
            {
                var initialRowSequence = new List<char>
                {'-', '-', '-', '-', '-', '-', '-', '-' };

                field.Add(i, initialRowSequence);
            }

            var queensToPlace = 8;
            var startRow = 1;
            PrintQueens(field, queensToPlace, startRow);
        }

        public static void PrintQueens(Dictionary<int, List<char>> field, int count, int row)
        {
            if (count == 0)
            {
                foreach (var line in field)
                {
                    Console.WriteLine(string.Join(" ", line.Value));
                }

                Console.WriteLine();
            }

            else
            {
                for (int c = 0; c < 8; c++)
                {
                    if (CheckPosition(field, row, c) == true)
                    {
                        //choose 
                        field[row][c] = '*';
                        //search/explore
                        PrintQueens(field, count - 1, row + 1);

                        field[row][field[row].IndexOf('*')] = '-';
                    }
                }
            }
        }

        public static bool CheckPosition(Dictionary<int, List<char>> field, int row, int column)
        {
            bool isPositionGood = true;
            var defaultRow = row;

            //check row
            if (field[row].Contains('*'))
            {
                return false;
            }

            //check up
            for (int i = row - 1; i >= 1; i--)
            {
                if (field[i][column] == '*')
                {
                    return false;
                }
            }
            //check down
            for (int i = row + 1; i <= 8; i++)
            {
                if (field[i][column] == '*')
                {
                    return false;
                }
            }
            //check down-right
            for (int i = column + 1; i < 8; i++)
            {
                if (row >= 1 && row < 8)
                {
                    if (field[row + 1][i] == '*')
                    {
                        return false;
                    }
                }

                else
                {
                    row = defaultRow;
                    break;
                }

                if (i == 7)
                {
                    row = defaultRow;
                    break;
                }
                row++;
            }
            //check down-left
            for (int i = column - 1; i >= 0; i--)
            {
                if (row >= 1 && row < 8)
                {
                    if (field[row + 1][i] == '*')
                    {
                        return false;
                    }
                }

                else
                {
                    row = defaultRow;
                    break;
                }

                if (i == 7 || i == 0)
                {
                    row = defaultRow;
                    break;
                }
                row++;
            }
            //check right-up
            for (int i = column + 1; i < 8; i++)
            {
                if (row > 1 && row <= 8)
                {
                    if (field[row - 1][i] == '*')
                    {
                        return false;
                    }
                }

                else
                {
                    row = defaultRow;
                    break;
                }

                if (i == 7)
                {
                    row = defaultRow;
                    break;
                }
                row--;
            }
            //check left-up
            for (int i = column - 1; i >= 0; i--)
            {
                if (row > 1 && row <= 8)
                {
                    if (field[row - 1][i] == '*')
                    {
                        return false;
                    }
                }

                else
                {
                    row = defaultRow;
                    break;
                }

                if (i == 7 || i == 0)
                {
                    row = defaultRow;
                    break;
                }
                row--;
            }

            return isPositionGood;
        }
    }
}
