class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
        this.next = null;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
// Here we defined the linked list , only needed in code editors , no need of it in leetcode

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {

        ListNode temp = new ListNode(0);
        temp.next = head;

        ListNode slow = temp;
        ListNode fast = temp;

        for (int i = 0; i <= n; i++) {
            fast = fast.next;
        }

        while (fast != null) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;

        return temp.next;
    }
}