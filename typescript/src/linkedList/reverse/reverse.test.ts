import LinkedList from "../linked_list";
import { reverse_linked_list } from "./reverse";

describe("reverse linked lise", () => {
  test("reverse linked list", () => {
    const ll = LinkedList.from_array([0, 1, 2, 4]);
    const rell = LinkedList.from_array([4, 3, 2, 1]);
    const reverse = reverse_linked_list(ll);
    expect(reverse?.val === 0);
  });
});
