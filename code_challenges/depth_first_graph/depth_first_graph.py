from code_challenges.data_structures.graphs.graphs import Graph

class DFG(Graph):
    def depth_first (self, root):
        if len(self.node_list) == 0: return 'Graph does not contain any nodes.'
        visited, results = {} , []
        for node in self.node_list: visited[node] = False
        if not root in visited.keys(): return 'Node does not exist in graph.'
        self.DFT(root, visited, results)
        return results

    def DFT (self, node, visited, results):
        if not visited[node]:
            visited[node] = True
            results.append(node)
            neighbors = self.adj_map.get(node)
            for neighbor in neighbors: self.DFT(neighbor['node'], visited, results)
        return results
