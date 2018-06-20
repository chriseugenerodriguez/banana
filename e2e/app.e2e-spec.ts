import { BPage } from './app.po';

describe('b App', () => {
  let page: BPage;

  beforeEach(() => {
    page = new BPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
