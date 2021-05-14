export class GameDataObjectMother {
  /**
   * Sample dataset for testing
   */
  static getGameData() {

    return {
      body: [
        {
          'id': 1,
          'title': 'Kerbal Space Program',
          'platform': 'Xbox One',
          'price': 8,
          'description': 'Kerbal Space Program (KSP) is a space flight simulation video game developed and published by Squad.',
          'released': '15/07/16',
          'category': ['Simulation', 'Single-player']
        },
        {
          'id': 2,
          'title': 'Hearthstone',
          'platform': 'PC',
          'price': 5,
          'description': 'Hearthstone is a online digital collectible card game developed and published by Blizzard Entertainment.',
          'released': '11/03/14',
          'category': ['CCG', 'Single-player']
        },
        {
          'id': 3,
          'title': 'PGA Tour 2K21',
          'platform': '',
          'price': 15,
          'description': 'PGA Tour 2K21 is a sports video game developed by HB Studios and published by 2K Sports.',
          'released': '21/08/20',
          'category': ['Sports', 'Multiplayer']
        }
        ]
    };
  }
}



