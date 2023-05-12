function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists || lists.length == 0) return null;
  while (lists.length > 1) {
    let temp: Array<ListNode | null> = [];
    for (let i = 0; i < lists.length; i += 2) {
      if (!lists[i + 1]) {
        temp.push(lists[i]);
      } else {
        temp.push(mergeTwoLists(lists[i], lists[i + 1]));
      }
    }
    lists = temp;
  }
  function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null {
    if (l1 === null) {
      return l2;
    }
    if (l2 === null) {
      return l1;
    }

    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  }
  return lists[0];
}
