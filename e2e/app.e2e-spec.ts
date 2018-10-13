import { EstimWattorAppPage } from './app.po';

describe('estim-wattor-app App', function() {
  let page: EstimWattorAppPage;

  beforeEach(() => {
    page = new EstimWattorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
