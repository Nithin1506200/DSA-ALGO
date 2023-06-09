import LinkedList from "../linked_list";

export function reverse_linked_list(
  head: LinkedList | null
): LinkedList | null {
  if (head === null) {
    return null;
  }
  let current: LinkedList | null = head;
  let prev: LinkedList | null = null;
  while (current) {
    let next: LinkedList | null = current.next;
    current.next = next;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
}
