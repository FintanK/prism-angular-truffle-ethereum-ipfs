import { AngularTrufflePage } from './app.po';

describe('angular-truffle App', () => {
  let page: AngularTrufflePage;

  beforeEach(() => {
    page = new AngularTrufflePage();
  });

  it('Should display app name in the header of the page', () => {
    page.navigateTo();
    page.getHeaderText().then(result => {
      expect(result).toEqual('Prism');
    });
  });
});
