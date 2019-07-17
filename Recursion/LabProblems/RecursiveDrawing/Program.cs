namespace RecursiveDrawing
{
    using System;
    public class Program
    {
        public static void Main()
        {
            var number = int.Parse(Console.ReadLine());
            var originalNumber = number;

            Print(number);
        }

        public static void Print(int number)
        {
            if (number==0)
            {
                return;
            }

            Console.WriteLine(new string('*', number));
            Print(number - 1);
            Console.WriteLine(new string('#',number));
        }
    }
}
