class Node:
    def __init__(self, value = None):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def pre_order(self):
        output = list()

        def traverse(node):
            if not node: return
            output.append(node.value)
            if node.left: traverse(node.left)
            if node.right: traverse(node.right)

        traverse(self.root)
        return output


    def match_tree(self, arr):
        output = []
        def match_traverse(node, arr):
            if not node: return
            if node.value in arr: output.append(node.value)
            if node.left: match_traverse(node.left, arr)
            if node.right: match_traverse(node.right, arr)
        match_traverse(self.root, arr)
        return output

    def __str__(self, branch = 1):
        if not self.root: return 'None'
        self.result = f'({self.root.value})\n'
        def traverse(node, branch):

            self.result +=  '\t' * branch + '└── (' + str(node.value) + ')\n'
            if node.left: traverse(node.left, branch + 1)
            if node.right: traverse(node.right, branch + 1)
            return self.result
        if self.root.left: traverse(self.root.left, branch)
        if self.root.right: traverse(self.root.right, branch)
        return f'{self.result}'

def tree_intersection (tree_a, tree_b):
    tree_arr = tree_a.pre_order()
    output_arr = tree_b.match_tree(tree_arr)
    if len(output_arr) < 1: output_arr.append('No matches found.')
    return output_arr

treeA = BinaryTree()
treeA.root = Node(10)
treeA.root.left = Node(13)
treeA.root.left.left = Node(5)
treeA.root.left.left.left = Node(20)
treeA.root.left.left.right = Node(11)
treeA.root.left.right = Node(6)
treeA.root.left.right.left = Node(8)
treeA.root.right = Node(30)
treeA.root.right.left = Node(95)
treeA.root.right.right = Node(1)

treeB = BinaryTree()
treeB.root = Node(8)
treeB.root.left = Node(13)
treeB.root.left.left = Node(12)
treeB.root.left.right = Node(30)
treeB.root.right = Node(5)
treeB.root.right.left = Node(50)
treeB.root.right.right = Node(0)
treeB.root.right.left.left = Node(11)
# print(testTree.find_maximum_value())
print(tree_intersection(treeA, treeB))
