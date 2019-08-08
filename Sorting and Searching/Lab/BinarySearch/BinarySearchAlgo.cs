namespace BinarySearch
{
    using System;
    public class BinarySearchAlgo //<T> where T : IComparable
    {
        public static int FindIndex(int[] arr, int key, int start, int end)
        {
            if (end < start)
            {
                return -1;
            }

            else
            {
                int mid = (start + end) / 2;
                if (arr[mid] > key)
                {
                    return FindIndex(arr, key, start, mid - 1);
                }

                else if (arr[mid] < key)
                {
                    return FindIndex(arr, key, mid + 1, end);
                }

                else
                {
                    return mid;
                }
            }
        }
    }
}
