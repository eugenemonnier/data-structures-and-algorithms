class Graph():
    def __init__(self):
        self.node_list = list()
        self.adj_map = dict()

    def add_node(self, val):
        self.node_list.append(val)
        self.adj_map[val] = []

    def add_edge(self, node_a, node_b, weight = None):
        self.adj_map.get(node_a).append({ 'node': node_b, 'weight': weight })
        self.adj_map.get(node_b).append({ 'node': node_a, 'weight': weight })

    def get_nodes(self):
        return self.node_list

    def get_neighbors(self, node):
        return self.adj_map.get(node)

    def size(self):
        graph_list = self.node_list
        number_of_nodes = len(graph_list)
        if number_of_nodes == 0:
            return None
        return len(graph_list)

