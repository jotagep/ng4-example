import { Ng4ExamplePage } from './app.po';

describe('ng4-example App', () => {
  let page: Ng4ExamplePage;

  beforeEach(() => {
    page = new Ng4ExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
