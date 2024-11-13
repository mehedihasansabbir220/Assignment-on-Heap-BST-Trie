# JavaScript Assignment on Heap, BST, Trie

This repository contains solutions to tasks involving the use of heaps and binary search trees in JavaScript. Each solution is optimized for efficient time and space complexity, suitable for large input sizes.

## Task 1: K Most Frequent Elements

### Problem Statement
Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.

### Solution Explanation
The function uses a frequency map to count occurrences of each element, then selects the `k` most frequent elements. Sorting is applied to the frequency list to find the top `k` elements.

### Example
```javascript
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

#### Complexity Analysis
- Time Complexity: O(N+UlogU), where N is the length of nums and U is the number of unique elements.
- Space Complexity: O(U), where U is the number of unique elements in nums.



## Task 2: Validate Binary Search Tree (BST)
### Problem Statement
Given the root of a binary tree, determine if it is a valid binary search tree.

### Solution Explanation
The function recursively validates each node to ensure it fits within the expected min/max bounds. For each node:

The left child must have a smaller value.
The right child must have a larger value.
```
Input: root = [2,1,3]
Output: true
```# Assignment-on-Heap-BST-Trie
