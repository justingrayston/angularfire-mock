import { AngularfireMockDemoPage } from './app.po';

describe('angularfire-mock-demo App', () => {
  let page: AngularfireMockDemoPage;

  beforeEach(() => {
    page = new AngularfireMockDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
