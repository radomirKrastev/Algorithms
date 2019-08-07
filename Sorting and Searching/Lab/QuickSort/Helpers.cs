namespace QuickSort
{
    using System;
    public static class Helpers
    {
        public static bool IsLess(IComparable first, IComparable second)
        {
            return first.CompareTo(second) < 0;
        }

        public static void Swap <T>(T[] arr, int firstIndex, int secondIndex)
        {
            T temp = arr[firstIndex];
            arr[firstIndex] = arr[secondIndex];
            arr[secondIndex] = temp;
        }

        public static void Shuffle <T>(T[] arr)
        {
            Random random = new Random();

            for (int i = 0; i < arr.Length; i++)
            {
                int randonIndex = random.Next(i + 1, arr.Length);
                Swap(arr, i, randonIndex);
            }
        }
    }
}
