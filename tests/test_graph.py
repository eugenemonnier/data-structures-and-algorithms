import pytest
from code_challenges.data_structures.graphs.graphs import Graph

def test_add_node(test_graph):
    test_graph.add_node('New York')
    assert test_graph.size() == 7
    TF = False
    if 'New York' in test_graph.adj_map: TF = True
    assert TF == True

def test_add_edge(test_graph):
    test_graph.add_node('New York')
    test_graph.add_edge('New York', 'Seattle', '$600')
    destination_cost = test_graph.adj_map.get('New York')
    assert destination_cost == [{ 'node': 'Seattle', 'weight': '$600' }]

def test_get_nodes(test_graph):
    assert test_graph.get_nodes() == ['Seattle', 'El Paso', 'San Antonio', 'Baltimore', 'Biloxi', 'Delray Beach']

def test_get_neighbors(test_graph):
    assert test_graph.get_neighbors('San Antonio') == [{'node': 'El Paso', 'weight': '$120'}, {'node': 'Baltimore', 'weight': '$400'}, {'node': 'Biloxi', 'weight': '$200'}]

def test_size_graph_multi_nodes(test_graph):
    assert test_graph.size() == 6

def test_size_graph_single_node():
    test_graph = Graph()
    test_graph.add_node('New York')
    assert test_graph.size() == 1

def test_size_graph_no_nodes(test_graph):
    test_graph = Graph()
    assert test_graph.size() == None

@pytest.fixture
def test_graph():
    graph = Graph()
    graph.add_node('Seattle')
    graph.add_node('El Paso')
    graph.add_node('San Antonio')
    graph.add_node('Baltimore')
    graph.add_node('Biloxi')
    graph.add_node('Delray Beach')
    graph.add_edge('Seattle', 'El Paso', '$300')
    graph.add_edge('San Antonio', 'El Paso', '$120')
    graph.add_edge('San Antonio', 'Baltimore', '$400')
    graph.add_edge('San Antonio', 'Biloxi', '$200')
    graph.add_edge('Delray Beach', 'Biloxi', '$300')
    graph.add_edge('Baltimore', 'Biloxi', '$350')
    return graph
