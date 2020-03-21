namespace Cinema
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class Program
    {
        public static void Main()
        {
            var friends = Console.ReadLine().Split(", ").Select(x => x.ToString()).ToList();
            var seatedFriends = new Dictionary<string, int>();

            var command = Console.ReadLine();

            while (command != "generate")
            {
                var tokens = command.Split(" - ");
                seatedFriends.Add(tokens[0], int.Parse(tokens[1]) - 1);
                command = Console.ReadLine();
            }

            foreach (var name in seatedFriends)
            {
                friends.Remove(name.Key);
            }

            var result = new List<List<string>>();

            Permute(0, friends, result);

            for (int i = 0; i < result.Count; i++)
            {
                foreach (var name in seatedFriends.OrderBy(x=>x.Value))
                {
                    result[i].Insert(name.Value, name.Key);
                }
            }

            foreach (var perm in result)
            {
                Console.WriteLine(string.Join(" ", perm));
            }
        }

        public static void Permute(int index, List<string> arr, List<List<string>> result)
        {
            if (index >= arr.Count)
            {
                var copy = new List<string>();

                for (int i = 0; i < arr.Count; i++)
                {
                    copy.Add(arr[i]);
                }

                result.Add(copy);
                //Console.WriteLine(string.Join(", ", arr.Select(x => string.Join(", ", x))));
            }
            else
            {
                Permute(index + 1, arr, result);
                for (int i = index + 1; i < arr.Count; i++)
                {
                    Swap(i, index, arr);
                    Permute(index + 1, arr, result);
                    Swap(i, index, arr);
                }
            }
        }

        public static void Swap(int a, int b, List<string> arr)
        {
            var current = arr[a];
            arr[a] = arr[b];
            arr[b] = current;
        }
    }
}
