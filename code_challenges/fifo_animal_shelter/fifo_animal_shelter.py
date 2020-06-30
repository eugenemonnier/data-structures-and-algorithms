class AnimalShelter:
    def __init__(self):
        self.shelter = list()

    def enqueue(self, animal):
        animal = animal.lower()
        if animal == 'dog' or animal == 'cat':
            self.shelter.append(animal)
        else: return "We don't serve their kind here"
        return animal

    def dequeue(self, pref = 'nopref'):
        pref = pref.lower()
        if pref == 'dog' or pref == 'cat':
            self.shelter.remove(pref)
        elif pref == 'nopref':
            pref = self.shelter.pop(0)
        else:
            pref = None
        return pref
