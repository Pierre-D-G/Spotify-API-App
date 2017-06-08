import { SpotifyAPIAppPage } from './app.po';

describe('spotify-api-app App', () => {
  let page: SpotifyAPIAppPage;

  beforeEach(() => {
    page = new SpotifyAPIAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
