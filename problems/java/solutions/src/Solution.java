public class Solution {
    public void testSolution(){
        assertEquals(true, true);
    }

    public Boolean assertEquals(Object a, Object b) {
        if (a.equals(b)) {
            System.out.println("✔️ - Test passed! Expected {" + a.toString() + "} is equal to {" + b.toString() + "}");
        } else {
            System.out.println("❌ - Test failed! Expected {" + a.toString() + "} is equal to {" + b.toString() + "}");
        }
        return a.equals(b);
    }
}
