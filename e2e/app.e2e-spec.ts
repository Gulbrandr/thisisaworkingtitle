import { ThisisaworkingtitlePage } from './app.po';

describe('thisisaworkingtitle App', () => {
  let page: ThisisaworkingtitlePage;

  beforeEach(() => {
    page = new ThisisaworkingtitlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
