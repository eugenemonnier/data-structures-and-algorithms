import pytest
from code_challenges.breadth_first_graph.breadth_first_graph import BFG

def test_breadth_first(sample_graph):
    assert sample_graph.breadth_first('A') == ['A', 'B', 'D', 'C', 'E', 'F', 'H', 'G']


@pytest.fixture
def sample_graph():
    test_graph = BFG()
    test_graph.add_node('A')
    test_graph.add_node('B')
    test_graph.add_node('C')
    test_graph.add_node('D')
    test_graph.add_node('E')
    test_graph.add_node('F')
    test_graph.add_node('G')
    test_graph.add_node('H')
    test_graph.add_edge('A', 'B')
    test_graph.add_edge('C', 'B')
    test_graph.add_edge('C', 'G')
    test_graph.add_edge('A', 'D')
    test_graph.add_edge('B', 'D')
    test_graph.add_edge('E', 'D')
    test_graph.add_edge('F', 'D')
    test_graph.add_edge('H', 'D')
    test_graph.add_edge('H', 'F')
    return test_graph
