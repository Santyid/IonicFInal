import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActionProvider } from '../providers/action/action';
import { environment } from './credenciales';

@NgModule({
	declarations: [ MyApp, HomePage ],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule,
		AngularFirestoreModule,
		AngularFireModule.initializeApp(environment),
		AngularFireAuthModule,
		AngularFireStorageModule
	],
	bootstrap: [ IonicApp ],
	entryComponents: [ MyApp, HomePage ],
	providers: [
		StatusBar,
		SplashScreen,
		Camera,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		ActionProvider
	]
})
export class AppModule {}
