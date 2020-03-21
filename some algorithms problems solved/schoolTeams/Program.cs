using System;
using System.Collections.Generic;
using System.Linq;

namespace schoolTeams
{
    public class Program
    {
        static void Main()
        {
            var girls = Console.ReadLine().Split(", ").Select(x => x.ToString()).ToArray();
            var boys = Console.ReadLine().Split(", ").Select(x => x.ToString()).ToArray();

            var girlsSpots = 3;
            var boysSpots = 2;

            var boysCombos = new string[boysSpots];
            var girlsCombos = new string[girlsSpots];

            var boysTeam = new List<string[]>();
            var girlsTeam = new List<string[]>();

            Combine(boysTeam, boys, boysCombos, 0, 0);
            Combine(girlsTeam, girls, girlsCombos, 0, 0);

            var team = new List<string>();
            team.AddRange(girlsTeam[0]);
            team.AddRange(boysTeam[0]);


            for (int g = 0; g < girlsTeam.Count; g++)
            {
                var gPlayers = string.Join(", ", girlsTeam[g]);  
                for (int b = 0; b < boysTeam.Count; b++)
                {
                var bPlayers = string.Join(", ", boysTeam[b]);  

                    Console.WriteLine($"{gPlayers}, {bPlayers}");
                }
            }
        }

        public static void Combine(List<string[]> result, string[] arr, string[] team, int index, int start)
        {
            if (index >= team.Length)
            {
                var subArray = new string[team.Length];
                Array.Copy(team, 0, subArray, 0, team.Length);
                result.Add(subArray);
            }
            else
            {
                for (int i = start; i < arr.Length; i++)
                {
                    team[index] = arr[i];
                    Combine(result, arr, team, index + 1, i + 1);
                }
            }
        }

        //public static void Permute(int index, List<string> arr)
        //{
        //    if (index >= arr.Count)
        //    {
        //        Console.WriteLine(string.Join(", ", arr.Select(x => string.Join(", ", x))));
        //    }
        //    else
        //    {
        //        Permute(index + 1, arr);
        //        for (int i = index + 1; i < arr.Count; i++)
        //        {
        //            Swap(i, index, arr);
        //            Permute(index + 1, arr);
        //            Swap(i, index, arr);
        //        }
        //    }
        //}

        //public static void Swap(int a, int b, List<string> arr)
        //{
        //    var current = arr[a];
        //    arr[a] = arr[b];
        //    arr[b] = current;
        //}
    }
}