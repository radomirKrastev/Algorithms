namespace Longest_Increasing_Subsequence
{
    using System;
    public class LongestIncreasingSubsequence
    {
        public static void Main()
        {
            var sequence = new[] { 3, 14, 5, 12, 15, 7, 8, 9, 11, 10, 1 };
            var longestSeq = FindLongestIncreasingSubsequence(sequence);
            Console.WriteLine("Longest increasing subsequence (LIS)");
            Console.WriteLine("  Length: {0}", longestSeq.Length);
            Console.WriteLine("  Sequence: [{0}]", string.Join(", ", longestSeq));
        }

        public static int[] FindLongestIncreasingSubsequence(int[] sequence)
        {
            var length = new int[sequence.Length];
            var previous = new int[sequence.Length];

            var maxLength = 0;
            var index = -1;

            for (int a = 0; a < sequence.Length; a++)
            {
                length[a] = 1;
                previous[a] = -1;

                for(int b = 0; b < a; b++)
                {
                    if(sequence[b] < sequence[a] && length[b] + 1 > length[a])
                    {
                        length[a] = length[b] + 1;
                        previous[a] = b;
                    }
                }

                if(length[a] > maxLength)
                {
                    maxLength = length[a];
                    index = a;
                }
            }

            var result = new int[maxLength];

            for(int i = maxLength - 1; i >= 0; i--)
            {
                result[i] = sequence[index];
                index = previous[index];
            }

            return result;
        }
    }
}
