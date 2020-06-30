const AnimalShelter = require('../fifo-animal-shelter')

describe('AnimalShelter module:', () => {
  describe('constructor()', () => {
    test('Creates a shelter array', () => {
      const testShelter = new AnimalShelter()
      expect(testShelter).toEqual({ shelter: [] })
    })
  })

  describe('enqueue(animal)', () => {
    test('takes dog or cat objects, and adds them to shelter in FIFO order', () => {
      const testShelter = new AnimalShelter()
      testShelter.enqueue({ type: 'dog', name: 'Leeloo' })
      testShelter.enqueue({ type: 'cat', name: 'Grumpy' })
      expect(testShelter).toEqual({ shelter: [{ type: 'dog', name: 'Leeloo' }, { type: 'cat', name: 'Grumpy' }] })
    })

    test('does not take in non-dog or cat animals', () => {
      const consoleSpy = jest
        .spyOn(console, 'log')
      const testShelter = new AnimalShelter()
      testShelter.enqueue({ type: 'dog', name: 'Leeloo' })
      testShelter.enqueue({ type: 'cat', name: 'Grumpy' })
      testShelter.enqueue({ type: 'mongoose', name: 'MongoDB' })
      expect(testShelter).toEqual({ shelter: [{ type: 'dog', name: 'Leeloo' }, { type: 'cat', name: 'Grumpy' }] })
      expect(consoleSpy).toHaveBeenCalledWith('We don\'t serve their kind here.')
    })
  })

  describe('dequeue(pref)', () => {
    test('dequeues the first dog, then dequeues the first cat in the shelter', () => {
      const testShelter = new AnimalShelter()
      testShelter.shelter = [
        { type: 'cat', name: 'Dragon' },
        { type: 'cat', name: 'Mr. Bigglesworth' },
        { type: 'dog', name: 'Leeloo' },
        { type: 'cat', name: 'Mrs. Noris' },
        { type: 'dog', name: 'Astro' },
        { type: 'cat', name: 'Sauron' }
      ]
      expect(testShelter.dequeue('dog')).toBe('dog')
      expect(testShelter.shelter).toEqual(
        [
          { type: 'cat', name: 'Dragon' },
          { type: 'cat', name: 'Mr. Bigglesworth' },
          { type: 'cat', name: 'Mrs. Noris' },
          { type: 'dog', name: 'Astro' },
          { type: 'cat', name: 'Sauron' }
        ]
      )
      expect(testShelter.dequeue('cat')).toBe('cat')
      expect(testShelter.shelter).toEqual(
        [
          { type: 'cat', name: 'Mr. Bigglesworth' },
          { type: 'cat', name: 'Mrs. Noris' },
          { type: 'dog', name: 'Astro' },
          { type: 'cat', name: 'Sauron' }
        ]
      )
    })
    test('if pref is not a dog or cat, returns null', () => {
      const testShelter = new AnimalShelter()
      testShelter.shelter = [
        { type: 'cat', name: 'Dragon' },
        { type: 'cat', name: 'Mr. Bigglesworth' },
        { type: 'dog', name: 'Leeloo' },
        { type: 'cat', name: 'Mrs. Noris' },
        { type: 'dog', name: 'Astro' },
        { type: 'cat', name: 'Sauron' }
      ]
      expect(testShelter.dequeue('snake')).toBe(null)
    })
    test('if no pref is given, removes first animal from shelter and returns their type', () => {
      const testShelter = new AnimalShelter()
      testShelter.shelter = [
        { type: 'cat', name: 'Dragon' },
        { type: 'cat', name: 'Mr. Bigglesworth' },
        { type: 'dog', name: 'Leeloo' },
        { type: 'cat', name: 'Mrs. Noris' },
        { type: 'dog', name: 'Astro' },
        { type: 'cat', name: 'Sauron' }
      ]
      expect(testShelter.dequeue()).toBe('cat')
      expect(testShelter.shelter).toEqual(
        [
          { type: 'cat', name: 'Mr. Bigglesworth' },
          { type: 'dog', name: 'Leeloo' },
          { type: 'cat', name: 'Mrs. Noris' },
          { type: 'dog', name: 'Astro' },
          { type: 'cat', name: 'Sauron' }
        ]
      )
    })
  })
})
