
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from '../../service/authentification.service';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public ldapLoginCtrl: FormControl;
public ldapPasswordCtrl: FormControl;
public loginForm: FormGroup;
constructor(
private fb: FormBuilder
) { }
ngOnInit() {
this.ldapLoginCtrl = this.fb.control('', Validators.required);
this.ldapPasswordCtrl = this.fb.control('', Validators.required);
this.loginForm = this.fb.group({
ldapLogin: this.ldapLoginCtrl,
ldapPassword: this.ldapPasswordCtrl
});
}
login() {
const ldapInformation = {
login: this.loginForm.value.ldapLogin,
password: this.loginForm.value.ldapPassword
};
}
}
