class Solution {
    public int kthSmallest(int[][] matrix, int k) {

        int n = matrix.length;

        int[] ptr = new int[n];

        int answer = 0;

        for (int count = 0; count < k; count++) {

            int min = Integer.MAX_VALUE;
            int minRow = -1;

            for (int row = 0; row < n; row++) {

                if (ptr[row] < n && matrix[row][ptr[row]] < min) {
                    min = matrix[row][ptr[row]];
                    minRow = row;
                }
            }

            answer = min;

            ptr[minRow]++;
        }

        return answer;
    }
}