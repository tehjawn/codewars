
/**
 * TwoSum.java
 * ------------
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice
 * You can return the answer in any order.
 * 
 * Example:
 * nums = [2,7,11,15], target = 9 => [0,1] Because nums[0] + nums[1] = 9
 * 
 * Example 2:
 * nums = [3,2,4], target = 6 => [1,2] Because nums[1] + nums[2] = 6
 * 
 */

import java.util.Arrays;
import java.util.HashMap;

class TwoSum extends Solution {
  /**
   * twoSum checks if two numbers in {nums} add up to {target}, and if so it returns their indices.
   * @param nums
   * @param target
   * @return
   */
  public int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      if (map.containsKey((nums[i]))) {
        return new int[]{map.get(nums[i]), i};
      }
      map.put(target - nums[i], i);
    }

    return new int[]{0, 0};
  }

  @Override
  public void testSolution() {
    int[] a = new int[] { 2, 7, 11, 15 };
    int b = 9;
    System.out.println(String.format("Testing TwoSum of {%s} to contain {%s}...", Arrays.toString(a), b));
    assertEquals(true, Arrays.toString(twoSum(a, b)).equals("[0, 1]"));
  }
}
