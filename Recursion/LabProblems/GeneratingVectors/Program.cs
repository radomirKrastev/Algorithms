namespace GeneratingVectors
{
    using System;
    public class Program
    {
        public static void Main()
        {
            var length = int.Parse(Console.ReadLine());
            var array = new int[length];
            PrintVector(0, array);
        }

        public static void PrintVector(int index, int [] array)
        {
            if (index == array.Length)
            {
                Console.WriteLine(string.Join("", array));
            }

            else
            {
                for (int i = 0; i <= 1; i++)
                {
                    array[index] = i;
                    PrintVector(index + 1, array);
                }
            }            
        }

    }
}
