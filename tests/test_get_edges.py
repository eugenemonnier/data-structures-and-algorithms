import pytest
from code_challenges.get_edges.get_edges import GE

def test_get_edge_truthy(sample_graph):
    assert sample_graph.get_edges('Kef Bir', 'Exegol') == 'true, 1700'

@pytest.fixture
def sample_graph():
    graph = GE()
    graph.add_node('Jakku')
    graph.add_node('Takodana')
    graph.add_node('Starkiller Base')
    graph.add_node('Kijimi')
    graph.add_node('Kef Bir')
    graph.add_node('Exegol')
    graph.add_edge('Jakku', 'Takodana', 200)
    graph.add_edge('Kijimi', 'Takodana', 300)
    graph.add_edge('Jakku', 'Starkiller Base', 300)
    graph.add_edge('Starkiller Base', 'Takodana', 100)
    graph.add_edge('Starkiller Base', 'Kijimi', 400)
    graph.add_edge('Starkiller Base', 'Kef Bir', 600)
    graph.add_edge('Kijimi', 'Kef Bir', 500)
    graph.add_edge('Exegol', 'Kef Bir', 1700)
    return graph
