# Angular-tutorial
Getting Started with Angular. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Created project 

    > ng new angular
    Would you like to add Angular routing (Y/N)? Y
    Which stylesheet format would you like to use? SASS
    
## To Run the project

    > cd project_name
    > npm install
    > ng serve
   
## Create Component

    > ng generate component user
    > ng generate component /folder/userDetails
    > ng g c user
   
## Create Service

    > ng g s /folder/servicename
    > ng generate service /folder/servicename
   
## Passing an Array of classes
   
    <button [ngClass]="['btn', 'btn-primary', isCreateUser]">Button</button>
    
    Note: isCreateUser is a variable and btn or btn-primary is bootstrap classes. 

## ngForm

    <form #userlogin = "ngForm" (ngSubmit) = "editUser(userlogin.value)">
      <input type="text" class="form-control" id="username" name="username" placeholder="Username" ngModel="{{selectedUser.username}}">
    <input type="submit" value="Register">
      
## Get Url, params or paramMap details using ActivatedRoute

    constructor(private router: ActivatedRoute) { }
    
    ngOnInit() {
      
      # Using ParamMap
      this.router.paramMap.forEach((paramsMap: ParamMap) => {
            let id = paramsMap.get('id');
      });
      
      # Using Param
      this.router.params.forEach(params => { 
          let id = params['id'];
      });
      
      # Using Url
      this.router.url.forEach((segements: UrlSegment[]) => {
         segements.filter((value: UrlSegment) => {
           console.log(value);
         });
      })
    }

# Routing

    # class class AppRoutingModule { }
    const routes: Routes = [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UserComponent },
      { path: 'deleteUser/:id', component: UserComponent },
    ];
    
    # Create link in html part and mention <router-outlet>
    <div class="container">
      <nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
          <li routerLinkActive="active" routerLink="/dashboard">Home</li>
          <li routerLinkActive="active" routerLink="/users">Users</li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
    </div>

## Navigation 

    // If you want to redirect or navigate url after delete or update 
    constructor(private router: Router) {}
    
    updateUser(user: User): void {
        this.userService.editUser(user);
        this.router.navigate(['users']);  // users is a Url link in app-routing.modules
        // this.router.navigate(['users', id]);  // redirect Url : '/users/:id'
    }

## Way to install Bootstap in project (localy not globly)

     # npm install --save bootstrap@3
     # Go to angular.json file and change the blow written code:
        -> "styles" : [
                "src/stylex.css";,
                "node_modules/bootstrap/dist/css/bootstrap.css"  // add filepath from created file in node_module folder.
            ]

## Reactive forms

Reactive forms provide a model-driven approach. this approach is used to handling form inputs. This guide will show us to how to create and update a basic form control, progress to using multiple controls in a group, validate form values, and create dynamic forms where we can add or remove controls dynamicly or at run time.

How to Implement Reactive forms, let's see step by step :

**Step 1 : ReactiveFormsModule**

Register the reactive forms module in our app. that means we need to use reactive forms. Import ReactiveFormsModule from '@angular/forms' in 'app.module.ts' file.

      import { ReactiveFormsModule } from '@angular/forms';
      @NgModule({
        imports: [
          ReactiveFormsModule
        ],
      })

**Step 2 : FormGroup, FormBuilder, Validators**

Import 'form' module in your component where Form need to validate and all.

      export class LoginComponent implements OnInit {

        loginForm: FormGroup;

        validationMessage= {
          'userName':{
            'required': 'UserName is required',
            'minlength': "userName Name Must be equals or more than 2 character or equals or less than 8 character.",
            'maxlength': "userName Name Must be equals or more than 2 character or equals or less than 8 character."
          },
          'password': {
            'required': 'password is required',
            'minlength': "password Must be equals or more than 2 character or equals or less than 8 character.",
            'maxlength': "password Must be equals or more than 2 character or equals or less than 8 character."
          }
        };

        formErrors = {
          'userName': '',
          'password': ''
        };

        constructor(private fb: FormBuilder) { }

        ngOnInit(): void {
        this.loginForm =  this.fb.group({
          userName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
          password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]]
        });

        logKeyValuePair(group: FormGroup): void {
          Object.keys(group.controls).forEach((key:string) => {
            const absControl = group.get(key);
            console.log('key : '+key+", value : "+absControl.value)
            this.formErrors[key]='';
            if(absControl && !absControl.valid) {
              const message = this.validationMessage[key];
              
              for(const errorKey in absControl.errors ) {
                if(errorKey) {
                  this.formErrors[key] += message[errorKey] +' ';  
                }
              }
            }
          });
        }

        onSubmit(): void {
          this.logKeyValuePair(this.loginForm);
          console.log('Error :', this.formErrors);
        }

      }

**Step 3 : Create Form**

[formGroup]="loginForm" and formControlName="userName"  needs to mention to get all field and validate it.

        <div class="container">
            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="col-md-4 col-md-offset-2">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input class="form-control" formControlName="userName" aria-describedby="emailHelp">
                    <small class="form-text has-error" *ngIf="formErrors.userName">{{formErrors.userName}}</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input class="form-control" formControlName="password">
                    <small class="form-text has-error" *ngIf="formErrors.password">{{formErrors.password}}</small>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button type="submit" class="btn btn-info">Submit</button>
                </div>
            </form>
        </div>