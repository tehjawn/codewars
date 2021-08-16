/**
 * AreSame.java
 * ------------
 * Given two arrays "a" and "b" write a function comp(a, b) (orcompSame(a, b)) that checks whether the 
 * two arrays have the "same" elements, with the same multiplicities. 
 * 
 * "Same" means, here, that the elements in "b" are the elements in "a" squared, regardless of the order.
 */

import java.util.Arrays;

public class AreSame extends Solution {

    /**
     * Checks if {b} is the set of the items in {a} squared.
     * @param a
     * @param b
     * @return
     */
    public static boolean comp(int a[], int b[]) {
        // If a or b are null or not the same length -> false
        if (a == null || b == null || a.length != b.length) return false;
        
        // Otherwise map each item in a to a^2 and sort
        int[] aArray = Arrays.stream(a).map(i -> i * i).sorted().toArray();
        // then sort b
        int[] bArray = Arrays.stream(b).sorted().toArray();

        // compare a to b - they should be the same. idk why array.equals doesn't work tho tbh
        return Arrays.toString(aArray).equals(Arrays.toString(bArray));
    }

    @Override
    public void testSolution() {
		int[] a = new int[]{121, 144, 19, 161, 19, 144, 19, 11};
		int[] b = new int[]{121, 14641, 20736, 361, 25921, 361, 20736, 361};
		assertEquals(true, AreSame.comp(a, b)); 
    }
}
