import {App, platform, StatusBar} from 'ionic/ionic';
import {MapPage} from 'map/map';

@App({
    template: '<ion-view [root]="root"></ion-nav',
})

export class AppCmp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = MapPage;
  }

  initializeApp(){
    this.platform.ready().then(() => {
      console.log('Platform ready');
      StatusBar.setStyle(StatusBar.DEFAULT);
    });
  }
}
