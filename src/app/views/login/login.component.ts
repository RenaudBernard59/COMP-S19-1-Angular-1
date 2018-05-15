
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from '../../service/authentification.service';
import { Router, Route } from '@angular/router';
import { StorageService } from '../../service/storage.service';

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
        private fb: FormBuilder,
        private authentificationService: AuthentificationService,
        private storageService: StorageService,
        private router: Router
    ) {}

    ngOnInit() {
        this.ldapLoginCtrl = this.fb.control('', Validators.required);
        this.ldapPasswordCtrl = this.fb.control('', Validators.required);

        this.loginForm = this.fb.group({
            IdapLogin: this.ldapLoginCtrl,
            IdapPassword: this.ldapPasswordCtrl
        });
    }

    login() {
        const ldapInformation = {
            login: this.loginForm.value.ldapLogin,
            password: this.loginForm.value.ldapPassword
        };
        return this.authentificationService.login(ldapInformation).subscribe(
            success => {
                this.storageService.save('user', success);
                this.router.navigate(['home']);//composant route à définir
            },
            error => console.log(error)
        )
    }
}
