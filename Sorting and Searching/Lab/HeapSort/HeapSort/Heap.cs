namespace HeapSort
{
    using System;

    public class Heap<T> where T : IComparable
    {
        public static void Sort(T[] arr)
        {
            var size = arr.Length;
            BuildMaxHeap(arr, size);
            Sort(arr, size);
        }

        private static void Sort(T[] arr, int size)
        {
            for (int i = size - 1; i > 0; i--)
            {
                Helper.Swap(arr, i, 0);
                size--;
                Sink(arr, 0, size);
            }
        }

        private static void BuildMaxHeap(T[] arr, int size)
        {
            for (int i = (size - 1) / 2; i >= 0; i--)
            {
                Sink(arr, i, size);
            }    
        }

        private static void Sink(T[] arr, int parentIndex, int size)
        {
            var leftChildPos = GetLeftChildIndex(arr, parentIndex);

            if (leftChildPos >= size)
            {
                return;
            }

            var rightChildPos = GetRightChildIndex(arr, parentIndex);
            var greatestChildPos = -1;
            var isLeftChildGreater = false;
            
            if (rightChildPos >= size || Helper.IsLess(arr[rightChildPos], arr[leftChildPos]))
            {
                greatestChildPos = leftChildPos;
                isLeftChildGreater = true;
            }
            else
            {
                greatestChildPos = rightChildPos;
            }

            if (Helper.IsLess(arr[parentIndex], arr[greatestChildPos]))
            {
                Helper.Swap(arr, parentIndex, greatestChildPos);

                if (isLeftChildGreater)
                {
                    Sink(arr, leftChildPos, size);
                }
                else
                {
                    Sink(arr, rightChildPos, size);
                }
            }
        }

        private static int GetLeftChildIndex(T[] arr, int parentIndex)
        {
            return (parentIndex * 2) + 1;
        }

        private static int GetRightChildIndex(T[] arr, int parentIndex)
        {
            return (parentIndex * 2) + 2;
        }
    }
}
