
public class CustomMath {
    public static int multiply(int a, int b) {
        return a * b;
    }
}

// ------------------------

using System;

namespace Solution
{
  public class SolutionClass
  {
    public static string EvenOrOdd(int number)
    {
      if (number % 2 == 0) return "Even";
      return "Odd";
    }
  }
}

// ------------------------

using System;

public class Kata
{
    public  static int Opposite(int number)
    {
      return number * -1;
    }
}

// ------------------------

using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    var sum = 0;
    for (var i = 0; i < arr.Length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
}

// ------------------------

using System.Linq;

public class Kata 
{
    public static int FindSmallestInt(int[] args) 
    {
      var smallest = args[0];
//       for (var i = 1; i < args.Length; i++) {
//         if (args[i] < smallest) {
//           smallest = args[i];
//         }
//       }
      args.ToList().ForEach(value => {
        if (value < smallest) {
          smallest = value;
        }
      });
      return smallest;
    }
}

// ------------------------

using System;

public static class Kata
{
  public static int MakeNegative(int number)
  {
/*     if (number < 0) return number;
    return number * -1; */
    return -Math.Abs(number);
  }
}

// ------------------------

using System;
using System.Linq;
using System.Collections.Generic;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        Dictionary<char, bool> vowels = new Dictionary<char, bool>()
        {
          { 'a', true },
          { 'e', true },
          { 'i', true },
          { 'o', true },
          { 'u', true },
        };
        int vowelCount = 0;

        foreach (var letter in str)
        {
          if (vowels.ContainsKey(letter))
          {
            vowelCount++;
          }
        }

        return vowelCount;
    }
}