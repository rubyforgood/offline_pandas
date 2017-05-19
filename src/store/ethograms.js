export default {
  namespaced: true,
  state: {
    ethograms: [
      {
        name: 'Panda Zoo',
        ethogramId: 123,
        ethogram: {
          subjects: [
            'Pamela Panda',
            'Peter Pan(da)'
          ],
          behaviors: [
            {
              name: 'walking',
              modifiers: ['quickly', 'slowly']
            },
            {
              name: 'eating',
              modifiers: ['gradually', 'inhaling']
            }
          ]
        }
      },
      {
        name: 'Elephant Lair',
        ethogramId: 456,
        ethogram: {
          subjects: [
            'Ellie Elephant',
            'Elon Elephant'
          ],
          behaviors: [
            {
              name: 'galumpfing',
              modifiers: ['medium-speed', 'fast-speed']
            }
          ]
        }
      }
    ]
  }
}
