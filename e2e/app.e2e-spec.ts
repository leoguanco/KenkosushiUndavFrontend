import { KenkoSushiFrontendPage } from './app.po';

describe('kenko-sushi-frontend App', () => {
  let page: KenkoSushiFrontendPage;

  beforeEach(() => {
    page = new KenkoSushiFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
