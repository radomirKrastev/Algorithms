using System;
using System.Collections.Generic;
using System.Text;

namespace QuickSort
{
    public static class Helpers
    {
        public static bool IsLess(IComparable first, IComparable second)
        {
            return first.CompareTo(second) < 0;
        }
    }
}
