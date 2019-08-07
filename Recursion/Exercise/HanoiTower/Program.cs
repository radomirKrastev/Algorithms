namespace AnotherHanoiTowerApproach
{
    using System;
    using System.Collections.Generic;
    public class Program
    {
        static List<int> source = new List<int>();
        static List<int> destination = new List<int>();
        static List<int> spare = new List<int>();
        static int steps = 1;
        static int movedDisk = 0;

        public static void Main()
        {
            int disksToMove = int.Parse(Console.ReadLine());

            for (int i = disksToMove; i > 0; i--)
            {
                source.Add(i);
            }

            Console.WriteLine($"Source: {string.Join(", ", source)}");
            Console.WriteLine($"Destination: {string.Join(", ", destination)}");
            Console.WriteLine($"Spare: {string.Join(", ", spare)}");
            Console.WriteLine();

            MoveDisk(source, destination, spare, disksToMove);
        }

        public static void MoveDisk(List<int> SS
            , List<int> DE
            , List<int> SP
            , int disksToMove)
        {
            if (disksToMove == 1)
            {
                DE.Add(SS[SS.Count - 1]);
                SS.Remove(SS[SS.Count - 1]);
                movedDisk = DE[DE.Count - 1];
                PrintPositions();
                steps++;
            }

            else
            {
                MoveDisk(SS, SP, DE, disksToMove - 1);

                DE.Add(SS[SS.Count - 1]);
                SS.Remove(SS[SS.Count - 1]);
                movedDisk = DE[DE.Count - 1];
                PrintPositions();
                steps++;

                MoveDisk(SP, DE, SS, disksToMove - 1);
            }
        }

        public static void PrintPositions()
        {
            Console.WriteLine($"Step #{steps}: Moved disk {movedDisk}");
            Console.WriteLine($"Source: {string.Join(", ", source)}");
            Console.WriteLine($"Destination: {string.Join(", ", destination)}");
            Console.WriteLine($"Spare: {string.Join(", ", spare)}");
            Console.WriteLine();
        }
    }
}
