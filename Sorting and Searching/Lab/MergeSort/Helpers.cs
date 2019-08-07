namespace MergeSort
{
    using System;
    public static class Helpers
    {
        public static bool IsLess(IComparable first, IComparable second)
        {
            return first.CompareTo(second) < 0;
        }
    }
}
