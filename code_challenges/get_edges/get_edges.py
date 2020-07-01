from code_challenges.breadth_first_graph.breadth_first_graph import BFG

class GE(BFG):

    def get_edges(self, node_a, node_b):
        neighbor_list = self.adj_map.get(node_a)
        for neighbor in neighbor_list:
            if neighbor['node'] == node_b: return 'true, ' + str(neighbor['weight'])
        return 'false, 0'
