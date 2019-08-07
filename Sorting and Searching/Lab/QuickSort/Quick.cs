using System;

namespace QuickSort
{
    public class Quick<T> where T : IComparable
    {
        public static void Sort(T[] arr)
        {
            Helpers.Shuffle(arr);
            Sort(arr, 0, arr.Length - 1);
        }

        private static void Sort(T[] arr, int left, int right)
        {
            if (left >= right)
            {
                return;
            }

            int p = Partition(arr, left, right);
            Sort(arr, left, p - 1);
            Sort(arr, p + 1, right);
        }

        private static int Partition(T[] arr, int left, int right)
        {
            if (left >= right)
            {
                return left;
            }

            int leftScanIndex = left;
            int rightScanIndex = right + 1;
            int partitionElement = left;

            while (true)
            {
                while (Helpers.IsLess(arr[++leftScanIndex], arr[partitionElement]))
                {
                    if (leftScanIndex == right)
                    {
                        break;
                    }
                }

                while (Helpers.IsLess(arr[partitionElement], arr[--rightScanIndex]))
                {
                    if (rightScanIndex == left)
                    {
                        break;
                    }
                }

                if (leftScanIndex >= rightScanIndex)
                {
                    break;
                }

                Helpers.Swap(arr, leftScanIndex, rightScanIndex);
            }

            Helpers.Swap(arr, left, right);
            return rightScanIndex;
        }
    }
}
