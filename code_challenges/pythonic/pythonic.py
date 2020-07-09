from code_challenges.data_structures.linked_list.linked_list import LinkedList

class PythonicLinkedList(LinkedList):
    def __init__(self, collection = None):
        super().__init__()
        if collection:
            for item in reversed(collection):
                self.insert(item)

    def __iter__(self):
        def value_generator():
            current = self.head
            while current:
                yield current.value
                current = current.next
        return value_generator()

    def __str__(self):
        out = ''
        for value in self:
            out += f'[ { value } ] -> '
        return out + 'None'

    def __len__(self):
        return self.length

    def __eq__(self, other):
        return list(self) == list(other)

    def __getitem__(self, index):
        if index < 0 or index > self.length - 1: raise IndexError
        for i, item in enumerate(self):
            if i == index:
                return item
