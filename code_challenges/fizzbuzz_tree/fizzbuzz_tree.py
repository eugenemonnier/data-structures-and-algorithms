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

def fizzbuzz_tree (tree):
    fb_tree = BinaryTree()
    fb_tree.root = fb_tree_helper(tree.root)
    return fb_tree

def fb_tree_helper (node):
    if not node: return None
    fizz_val = fizzify(node.value)
    new_node = Node(fizz_val)
    new_node.left = fb_tree_helper(node.left)
    new_node.right = fb_tree_helper(node.right)
    return new_node

def fizzify (val):
    if val % 15 == 0: return 'fizzbuzz'
    elif val % 3 == 0: return 'fizz'
    elif val % 5 == 0: return 'buzz'
    else: return str(val)
