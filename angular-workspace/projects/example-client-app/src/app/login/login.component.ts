import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonAppearance } from '@ni/nimble-components/dist/esm/button/types';
import { NimbleTheme } from '@ni/nimble-components/dist/esm/theme-provider/themes';

@Component({
    selector: 'nimble-example-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public loginForm: FormGroup;
    public theme: NimbleTheme = NimbleTheme.Light;
    public themes = NimbleTheme;
    public buttonAppearance = ButtonAppearance;
    public value = true;

    public constructor(private readonly formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            username: [''],
            password: ['', Validators.required]
        });
    }

    public valueChanged(): void {
        console.log('valueChanged');
    }
    
    public focusout(): void {
        console.log('focusout');
    }
}
