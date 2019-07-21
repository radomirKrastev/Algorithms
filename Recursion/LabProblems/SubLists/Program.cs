namespace SubLists
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class Program
    {
        public static void Main()
        {
            var names = Console.ReadLine().Split().ToList();
            var subListOfNames = new List <string>();
            PrintSubList(names, subListOfNames);
        }

        public static void PrintSubList(List<string> names, List <string> subList)
        {
            if (names.Count==0)
            {
                Console.WriteLine(string.Join(" ",subList));
            }

            else
            {
                var name = names[0];
                names.Remove(name);

                subList.Add(name);
                PrintSubList(names, subList);
                subList.RemoveAt(subList.Count - 1);

                PrintSubList(names, subList);
                names.Insert(0, name);
            }
        }
    }
}
