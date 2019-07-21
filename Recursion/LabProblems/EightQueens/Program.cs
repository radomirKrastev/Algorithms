namespace EightQueens
{
    using System;
    public class Program
    {
        public static void Main()
        {
            var field = new int[64];
            var queensPositioned = PlaceQueens(field);
            

            Console.WriteLine(queensPositioned);
        }

        public static int [] PlaceQueens (int[] field)
        {
            var isRowBeatable = true;
            var isColumnBeatable = true;
            var isDiagonalBeatable = true;



            if(isRowBeatable==false && isColumnBeatable==false && isDiagonalBeatable == false)
            {
                return field;
            }

            else
            {
                for (int i = 0; i < field.Length; i++)
                {
                    for (int i = 0; i < field.Length; i++)
                    {

                    }
                }

            }
        }
    }
}
