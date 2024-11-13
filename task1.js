function topKFrequent(nums, k) {
    const frequencyMap = new Map();

    // Count frequencies
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Create an array of [num, frequency] pairs and sort by frequency in descending order
    const frequencyArray = Array.from(frequencyMap.entries());
    frequencyArray.sort((a, b) => b[1] - a[1]);

    // Extract the top k elements
    return frequencyArray.slice(0, k).map(pair => pair[0]);
}

// Example usage:
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
console.log(topKFrequent([1], 1)); // Output: [1]


/**
 * Time Complexity:
 *  Counting frequencies takes O(N), where N is the length of nums
 * Sorting the frequency array takes O(UlogU), where U is the number of unique elements.
 * Overall complexity: O(N+UlogU).
 * 
 * Space Complexity:O(U) for storing frequencies in a map and the heap.
 */