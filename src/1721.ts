function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let fast = head;
  let slow = head;
  let first: ListNode | null = null;
  let second: ListNode | null = null;
  let count = 1;
  while (fast) {
    if (count === k) {
      first = fast;
    }
    if (count > k) {
      slow = slow!.next;
    }
    fast = fast.next;
    count++;
  }
  second = slow;
  [first!.val, second!.val] = [second!.val, first!.val];
  return head;
}
