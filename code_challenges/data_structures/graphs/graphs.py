class Graph():
    def __init__(self):
        self.node_list = list()
        self.adj_map = dict()

    def add_node(self, val):
        self.node_list.append(val)
        self.adj_map[val] = []

    def add_edge(self, node_a, node_b, weight):
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

test_graph = Graph()
print(test_graph.size())
test_graph.add_node('Seattle')
test_graph.add_node('El Paso')
test_graph.add_node('San Antonio')
test_graph.add_node('Baltimore')
test_graph.add_node('Biloxi')
test_graph.add_node('Delray Beach')

test_graph.add_edge('Seattle', 'El Paso', '$300')
test_graph.add_edge('San Antonio', 'El Paso', '$120')
test_graph.add_edge('San Antonio', 'Baltimore', '$400')
test_graph.add_edge('San Antonio', 'Biloxi', '$200')
test_graph.add_edge('Delray Beach', 'Biloxi', '$300')
test_graph.add_edge('Baltimore', 'Biloxi', '$350')

print(test_graph.get_nodes())
print(test_graph.get_neighbors('San Antonio'))
print(test_graph.size())
print(test_graph.adj_map)
