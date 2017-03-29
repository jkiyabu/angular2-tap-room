import { Angular2TapRoomPage } from './app.po';

describe('angular2-tap-room App', () => {
  let page: Angular2TapRoomPage;

  beforeEach(() => {
    page = new Angular2TapRoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
