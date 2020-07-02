import pytest
from code_challenges.depth_first_graph.depth_first_graph import DFG

def test_depth_first_graph_happy_path(sample_graph):
    assert sample_graph.depth_first('Jakku') == ['Jakku', 'Takodana', 'Kijimi', 'Starkiller Base', 'Kef Bir', 'Exegol']

def test_depth_first_graph_empty_graph():
    sample_graph = DFG()
    assert sample_graph.depth_first('non_existent_node') == 'Graph does not contain any nodes.'

def test_depth_first_graph_no_edges(sample_graph2):
    assert sample_graph2.depth_first('B') == ['B']

def test_depth_first_graph_non_existent_node(sample_graph):
    assert sample_graph.depth_first('Alderaan') == 'Node does not exist in graph.'

@pytest.fixture
def sample_graph():
    graph = DFG()
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

@pytest.fixture
def sample_graph2():
    graph = DFG()
    graph.add_node('A')
    graph.add_node('B')
    graph.add_node('C')
    return graph
