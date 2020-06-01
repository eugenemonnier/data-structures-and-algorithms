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
            output.push(node.value)
            if node.left: traverse(node.left)
            if node.right: traverse(node.right)

        traverse(self.root)
        return output

    def in_order(self):
        output = list()

        def traverse(node):
            if not node: return
            if node.left: traverse(node.left)
            output.push(node.value)
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

class BinarySearchTree(BinaryTree):
    def __init__(self):
        super().__init__()

    def add(self, val, curr_node = self.root):
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
