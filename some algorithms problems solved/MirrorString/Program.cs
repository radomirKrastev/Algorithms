using System;
using System.Linq;

namespace MirrorString
{
    class Program
    {
        static void Main()
        {
            var a = Console.ReadLine();


            char[] charArray = a.ToCharArray();
            Array.Reverse(charArray);
            var b =  new string(charArray);
            //var b = a.Reverse().ToString();

            var matrix = new int[a.Length + 1, b.Length + 1];

            for (int c = 0; c < matrix.GetLength(1); c++)
            {
                matrix[0, c] = 0;
                matrix[c, 0] = 0;
            }
            for (int r = 1; r < matrix.GetLength(0); r++)
            {
                var rowA = r - 1;
                for (var c = 1; c < matrix.GetLength(1); c++)
                {
                    var colB = c - 1;

                    if (a[rowA] != b[colB])
                    {
                        matrix[r, c] = Math.Max(matrix[r - 1, c], matrix[r, c - 1]);
                    }
                    else
                    {
                        matrix[r, c] = matrix[r - 1, c - 1] + 1;
                    }
                }
            }

            var row = a.Length;
            var col = b.Length;
            var result = "";

            while (row != 0 && col != 0)
            {
                if (a[row - 1] != b[col - 1])
                {
                    if (matrix[row - 1, col] > matrix[row, col - 1])
                    {
                        row--;
                    }
                    else
                    {
                        col--;
                    }

                    continue;
                }

                result += a[row - 1];
                row--;
                col--;
            }

            //Console.WriteLine($"Length: {matrix[a.Length, b.Length]}");
            Console.WriteLine($"{string.Join("", result.Split().Reverse())}");
        }
    }
}
