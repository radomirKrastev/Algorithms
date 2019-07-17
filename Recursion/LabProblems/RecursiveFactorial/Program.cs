namespace RecursiveFactorial
{
    using System;
    public class Program
    {
        public static void Main()
        {
            var number = int.Parse(Console.ReadLine());
            var factorial = GetFactorial(number);
            Console.WriteLine(factorial);
        }

        public static long GetFactorial (int number)
        {
            if (number == 0)
            {
                return 1;
            }

            var factorial = number * GetFactorial(number-1);
            return factorial;
        }
    }
}
