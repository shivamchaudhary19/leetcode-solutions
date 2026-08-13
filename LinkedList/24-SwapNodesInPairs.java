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
    public ListNode swapPairs(ListNode head) {

        ListNode temp = new ListNode(0);
        temp.next = head;

        ListNode previous = temp;
        ListNode first = head;

        while (first != null && first.next != null) {

            ListNode second = first.next;
            ListNode nextPair = second.next;

            previous.next = second;
            second.next = first;
            first.next = nextPair;

            previous = first;
            first = nextPair;
        }

        return temp.next;
    }
}