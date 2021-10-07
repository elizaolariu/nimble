import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NimbleTextFieldModule, NimbleNumberFieldModule, NimbleSelectModule, NimbleListboxOptionModule, NimbleButtonModule } from '@ni/nimble-angular';
import { NimbleCheckboxModule } from 'projects/ni/nimble-angular/src/directives/checkbox';
import { NimbleThemeProviderModule } from 'projects/ni/nimble-angular/src/directives/theme-provider';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NimbleThemeProviderModule,
        NimbleTextFieldModule,
        NimbleNumberFieldModule,
        NimbleCheckboxModule,
        NimbleSelectModule,
        NimbleListboxOptionModule,
        NimbleButtonModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'test', component: TestComponent }
        ],
        { useHash: true })
    ],
    providers: [FormBuilder],
    bootstrap: [AppComponent]
})
export class AppModule { }
