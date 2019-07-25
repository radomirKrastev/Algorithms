namespace Labyrinth
{
    using System;
    using System.Collections.Generic;
    public class Program
    {
        static List<char> path = new List<char>();
        public static void Main()
        {
            var rows = int.Parse(Console.ReadLine());
            var column = int.Parse(Console.ReadLine());
            var labyrinth = new Dictionary<int, List<char>>();
            //var path = new List<char>();            
            
            for (int i = 1; i <= rows; i++)
            {
                if (!labyrinth.ContainsKey(i))
                {
                    var maze = Console.ReadLine();
                    labyrinth[i] = new List<char>();

                    foreach (var c in maze)
                    {
                        labyrinth[i].Add(c);
                    }                    
                }   
            }

            PrintPath(labyrinth, 1, 0, 'N'); 
        }

        public static void PrintPath (Dictionary<int, List<char>> maze, int row, int column, char direction)
        {
            path.Add(direction);
            if (maze[row][column] == 'e')
            {
                path.Remove('N');
                Console.WriteLine(string.Join("",path));
                path.RemoveAt(path.Count - 1);
            }

            else
            {
                if (maze[row][column] != 'v' && maze[row][column] != '*')
                {                    
                    maze[row][column] = 'v';

                    if (row < maze.Keys.Count)
                    {
                        PrintPath(maze, row + 1, column, 'D');
                    }

                    if (column < maze[row].Count-1)
                    {
                        PrintPath(maze, row, column + 1, 'R');
                    }

                    if (row>1)
                    {
                        PrintPath(maze, row - 1, column, 'U');
                    }

                    if (column>0)
                    {
                        PrintPath(maze, row, column - 1, 'L');
                    }
                    
                    maze[row][column] = '-';                    
                }

                if (path.Count > 0)
                {
                    path.RemoveAt(path.Count - 1);
                }

                //foreach (var line in maze)
                //{
                //    Console.WriteLine(string.Join("", line.Value));
                //}

                //Console.WriteLine();
            }
        }
    }
}
