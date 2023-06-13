const ejs = require('ejs');

const expectedEateries = require('../../helpers/loadEateries.js');

describe('Eateries Show View', () => {

  it('should render the show template', () => {
    expectedEateries.forEach( async expectedEatery => {
      const doc = document.createElement('html');
      doc.innerHTML = await ejs.renderFile(
        './views/eateries/show.ejs',
        { eatery: expectedEatery }
      );

      const name    = doc.querySelector('hgroup > h1').innerHTML;
      const genre   = doc.querySelector('hgroup > h2 > strong').innerHTML;
      const price   = doc.querySelector('hgroup > h2 > small').innerHTML;
      const address = doc.querySelector('main > h6').innerHTML;

      expect(name).toBe(expectedEatery.name);
      expect(genre).toBe(expectedEatery.genre);
      expect(price).toBe(expectedEatery.price);
      expect(address).toBe(expectedEatery.address);
    });

  });

});
