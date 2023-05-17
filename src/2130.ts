function pairSum(head: ListNode | null): number {
  const stack: number[] = [];
  let slow = head;
  let fast = head!.next;

  while (fast != null) {
    stack.push(slow!.val);
    slow = slow!.next;
    fast = fast.next!.next;
  }

  let maxTwinSum = 0;
  while (slow != null) {
    maxTwinSum = Math.max(maxTwinSum, slow.val + stack.pop()!);
    slow = slow.next;
  }

  return maxTwinSum;
}
