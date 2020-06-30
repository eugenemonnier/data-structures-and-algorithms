from code_challenges.data_structures.graphs.graphs import Graph
from code_challenges.data_structures.stacks_and_queues.stacks_and_queues import Queue

class BFG(Graph):

    def breadth_first(self, node):
        result, visited, node_queue = [], dict(), Queue()
        for key in self.adj_map.keys():
            visited[key] = False
        visited[node] = True
        node_queue.enqueue(node)

        while not node_queue.isEmpty():
            queued_node = node_queue.dequeue()
            neighbor_list = self.adj_map.get(queued_node)
            for neighbor_map in neighbor_list:
                neighbor = neighbor_map.get('node')
                print(neighbor)
                if not visited[neighbor]:
                    visited[neighbor] = True
                    node_queue.enqueue(neighbor)
            result.append(queued_node)
        return result
