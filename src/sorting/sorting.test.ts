import { merge_sort, quick_sort, insertion_sort, bubble_sort } from "./sorting";

test("INFO : insertion_sort", () => {
  expect(insertion_sort([1, 4, 2, 6, 8, 12])).toEqual([1, 2, 4, 6, 8, 12]);
  expect(insertion_sort([1, 4, 2, 6, 8, 12, 1])).toEqual([
    1, 1, 2, 4, 6, 8, 12,
  ]);
  expect(insertion_sort([1, 4, 2, 6, 8, 12, 1, 1])).toEqual([
    1, 1, 1, 2, 4, 6, 8, 12,
  ]);
});

test("INFO : bubble_sort", () => {
  expect(bubble_sort([1, 4, 2, 6, 8, 12])).toEqual([1, 2, 4, 6, 8, 12]);
  expect(bubble_sort([1, 4, 2, 6, 8, 12, 1])).toEqual([1, 1, 2, 4, 6, 8, 12]);
  expect(bubble_sort([1, 4, 2, 6, 8, 12, 1, 1])).toEqual([
    1, 1, 1, 2, 4, 6, 8, 12,
  ]);
  expect(bubble_sort([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
test("INFO : merge_sort", () => {
  expect(merge_sort([1, 4, 2, 6, 8, 12])).toEqual([1, 2, 4, 6, 8, 12]);
  expect(merge_sort([1, 4, 2, 6, 8, 12, 1])).toEqual([1, 1, 2, 4, 6, 8, 12]);
  expect(merge_sort([1, 4, 2, 6, 8, 12, 1, 1])).toEqual([
    1, 1, 1, 2, 4, 6, 8, 12,
  ]);
  expect(merge_sort([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test("INFO : quick_sort", () => {
  expect(quick_sort([1, 4, 2, 6, 8, 12])).toEqual([1, 2, 4, 6, 8, 12]);
  expect(quick_sort([1, 4, 2, 6, 8, 12, 1])).toEqual([1, 1, 2, 4, 6, 8, 12]);
  expect(quick_sort([1, 4, 2, 6, 8, 12, 1, 1])).toEqual([1, 1, 1, 2, 4, 6, 8, 12]);
  expect(quick_sort([1,2,3,4,5,6,7])).toEqual([1,2,3,4,5,6,7]);
});
