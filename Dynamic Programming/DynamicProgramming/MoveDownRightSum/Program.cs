namespace MoveDownRightSum
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var matrix = new int[,]
            {
                { 2, 6, 1, 8, 9, 4, 2 },
                { 1, 8, 0, 3, 5, 6, 7 },
                { 3, 4, 8, 7, 2, 1, 8 },
                { 0, 9, 2, 8, 1, 7, 9 },
                { 2, 7, 1, 9, 7, 8, 2 },
                { 4, 5, 6, 1, 2, 5, 6 },
                { 9, 3, 5, 2, 8, 1, 9 },
                { 2, 3, 4, 1, 7, 2, 8 },
            };

            var movesMatrix = CalculateEachStep(matrix);
            var path = GetPath(movesMatrix);
            PrintPathWithinMatrix(matrix, path);            
        }

        private static HashSet<int[]> GetPath(int[,] matrix)
        {
            var row = matrix.GetLength(0) - 1;
            var col = matrix.GetLength(1) - 1;
            var path = new HashSet<int[]>();
            path.Add(new int[] { matrix.GetLength(0) - 1, matrix.GetLength(1) - 1 });

            while (row > 0 || col > 0)
            {
                if (row <= 0)
                {
                    MoveLeft(path, row, col--);
                    continue;
                }

                if (col <= 0)
                {
                    MoveUp(path, row--, col);
                    continue;
                }

                if (matrix[row - 1, col] > matrix[row, col - 1])
                {
                    MoveUp(path, row--, col);
                }
                else
                {
                    MoveLeft(path, row, col--);
                }
            }

            return path;
        }

        private static int[,] CalculateEachStep(int[,] matrix)
        {
            var movesMatrix = new int[matrix.GetLength(0), matrix.GetLength(1)];
            movesMatrix[0, 0] = matrix[0, 0];

            for (int c = 1; c < movesMatrix.GetLength(1); c++)
            {
                movesMatrix[0, c] = matrix[0, c] + movesMatrix[0, c - 1];
            }

            for (int r = 1; r < movesMatrix.GetLength(0); r++)
            {
                movesMatrix[r, 0] = matrix[r, 0] + movesMatrix[r - 1, 0];
            }

            for (int r = 1; r < movesMatrix.GetLength(0); r++)
            {
                for (int c = 1; c < movesMatrix.GetLength(1); c++)
                {
                    if (movesMatrix[r - 1, c] > movesMatrix[r, c - 1])
                    {
                        movesMatrix[r, c] = matrix[r, c] + movesMatrix[r - 1, c];
                    }
                    else
                    {
                        movesMatrix[r, c] = matrix[r, c] + movesMatrix[r, c - 1];
                    }
                }
            }

            return movesMatrix;
        }

        private static void PrintPathWithinMatrix(int[,] matrix, HashSet<int[]> path)
        {
            for (int r = 0; r < matrix.GetLength(0); r++)
            {
                for (int c = 0; c < matrix.GetLength(1); c++)
                {
                    if (IsPath(r, c, path))
                    {
                        Console.ForegroundColor = ConsoleColor.Cyan;
                    }

                    Console.Write(matrix[r, c] + " ");
                    Console.ForegroundColor = ConsoleColor.White;
                }

                Console.WriteLine();
            }
        }

        private static bool IsPath(int row, int col, HashSet<int[]> path)
        {
            return path.Any(x => x[0] == row && x[1] == col);
        }

        private static void MoveLeft(HashSet<int[]> path, int row, int col)
        {
            var step = new int[2];
            step[0] = row;
            step[1] = col - 1;
            path.Add(step);
        }

        private static void MoveUp(HashSet<int[]> path, int row, int col)
        {
            var step = new int[2];
            step[0] = row - 1;
            step[1] = col;
            path.Add(step);
        }
    }
}
