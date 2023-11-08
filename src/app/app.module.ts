import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';

// import { UserInputComponent } from './components/user-input/user-input.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryListComponent,
    // UserInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
