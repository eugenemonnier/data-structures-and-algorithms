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

    def in_order(self):
        output = list()

        def traverse(node):
            if not node: return
            if node.left: traverse(node.left)
            output.append(node.value)
            if node.right: traverse(node.right)

        traverse(self.root)
        return output

    def post_order(self):
        output = list()

        def traverse(node):
            if not node: return
            if node.left: traverse(node.left)
            if node.right: traverse(node.right)
            output.append(node.value)

        traverse(self.root)
        return output

    def breadth_first(self):
        output, queue = list(), list()
        if not self.root: return output
        queue.append(self.root)
        while len(queue) > 0:
            current = queue[0]
            if current.left: queue.append(current.left)
            if current.right: queue.append(current.right)
            output.append(queue[0].value)
            queue.pop(0)
        return output

    def find_maximum_value(self):
        return self.max_binary_helper(self.root)

    def max_binary_helper(self, node, max_val = float('-inf')):
        if not node: return max_val
        if node.value > max_val: max_val = node.value
        if node.left:
            max_val = self.max_binary_helper(node.left, max_val)
        if node.right:
            max_val = self.max_binary_helper(node.right, max_val)
        return max_val

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

class BinarySearchTree(BinaryTree):
    def __init__(self):
        super().__init__()

    def add(self, val, curr_node = None):
        if not curr_node: curr_node = self.root
        if not self.root:
            self.root = Node(val)
            return self.root

        if curr_node.value == val: return None
        if curr_node.value > val and not curr_node.left:
            curr_node.left = Node(val)
            return curr_node.left
        elif curr_node.value < val and not curr_node.right:
            curr_node.right = Node(val)
            return curr_node.right

        if curr_node.value > val:
            self.add(val, curr_node.left)
        elif curr_node.value < val:
            self.add(val, curr_node.right)

    def contains(self, val):
        found = False
        curr_node = self.root

        while not found:
            if curr_node.value > val:
                if curr_node.left: curr_node = curr_node.left
                else: break
            elif curr_node.value < val:
                if curr_node.right: curr_node = curr_node.right
                else: break
            else: found = True
        return found

testTree = BinaryTree()
testTree.root = Node(100)
testTree.root.left = Node(19)
testTree.root.left.left = Node(82)
testTree.root.left.right = Node(3)
testTree.root.right = Node(5)
testTree.root.right.left = Node(42)
testTree.root.right.left.left = Node(2)
print(testTree.find_maximum_value())
