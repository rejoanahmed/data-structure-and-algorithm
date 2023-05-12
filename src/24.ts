function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const curr = head;
  const next = head.next;
  const next_next = next.next;

  curr.next = swapPairs(next_next);
  next.next = curr;
  return next;
}
