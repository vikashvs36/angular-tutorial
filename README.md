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
