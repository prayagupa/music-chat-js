/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. 
 *
 */

import {
  NgModule,
  Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  FormsModule
} from '@angular/forms';

/*
 * Components
 */
import {NavigationBarComponent} from './components/NavigationBarComponent';
import {
  ChatThreadsComponent,
  ChatThreadComponent
  } from './components/ChatThreadsComponents';
import {
  ChatComponent,
  ChatMessage
  } from './components/ChatComponent';

/*
 * Injectables
 */
import {servicesInjectables} from './services/services';
import {utilInjectables} from './util/util';

/*
 * Services
 */
import {
  MessagesService,
  ThreadsService,
  UserService
} from './services/services';

import {ChatDataCollection} from './ChatDataCollection';

/*
 * Webpack
 */
require('../css/styles.css');

@Component({
  selector: 'chat-app',
  template: `
  <div>
    <nav-bar></nav-bar>
    <div class="container">
      <chat-threads></chat-threads>
      <chat-window></chat-window>
    </div>
  </div>
  `
})
class ChatApp {
  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService) {
    ChatDataCollection.init(messagesService, threadsService, userService);
  }
}

@NgModule({
  declarations: [
    ChatApp,
    NavigationBarComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatComponent,
    ChatMessage,
    utilInjectables
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [ ChatApp ],
  providers: [ servicesInjectables ]
})
export class ChatAppModule {}

platformBrowserDynamic().bootstrapModule(ChatAppModule);

// --------------------
// You can ignore these 'require' statements. The code will work without them.
// They're currently required to get watch-reloading
// from webpack, but removing them is a TODO
require('./services/services');
require('./ChatDataCollection');
require('./util/util');
require('./components/NavigationBarComponent');
require('./components/ChatComponent');
require('./components/ChatThreadsComponents');

