class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let cur = head,
    l = 0,
    prv: ListNode | null = null;
  while (cur) {
    cur = cur.next;
    l++;
  }
  cur = head;
  l -= n;
  while (l) {
    prv = cur;
    cur = cur!.next;
    l--;
  }
  if (cur === head) head = head?.next || null;
  else if (!cur?.next) prv!.next = null;
  else prv!.next = cur.next;
  return head;
}
