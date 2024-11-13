function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;

    // Check the current node value against the min and max limits
    if (root.val <= min || root.val >= max) {
        return false;
    }

    // Recursively check the left and right subtrees with updated constraints
    return (
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    );
}

// Example usage:
// Assume TreeNode is defined as: function TreeNode(val, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
const root1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root1)); // Output: true

const root2 = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
console.log(isValidBST(root2)); // Output: false


/**
 * Time Complexity:
 * O(N) where N is the number of nodes, as we visit each node once.
 * 
 * Space Complexity:
 * O(H) for the recursive call stack, where H is the height of the tree.
 */