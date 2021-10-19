import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DisplayLoginComponent } from './components/display-login/display-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotComponent } from './components/forgot/forgot.component';

import { GetallbookComponent } from './components/getallbook/getallbook.component';
import { BookdashboardComponent } from './components/bookdashboard/bookdashboard.component';
import { AuthenticationGuard } from './authentication.guard';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AddcartComponent } from './components/addcart/addcart.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { BookpageComponent } from './components/bookpage/bookpage.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';
import { AdminDisplayComponent } from './components/admin-display/admin-display.component';
const routes: Routes = [
  {path:'', redirectTo:"display-login",pathMatch:'full'},

  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'display-login',component:DisplayLoginComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'addcart',component:AddcartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'orderplaced',component:OrderplacedComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminsignup',component:AdminsignupComponent},
  {path:'admin-display',component:AdminDisplayComponent},
  {path:'bookpage',component:BookpageComponent},
  {path:'bookdashboard',component:BookdashboardComponent, canActivate:[AuthenticationGuard],
  
  children:[
    
   
    {path:'header',component:HeaderComponent},
    {path:'footer',component:FooterComponent},
    {path:'getallbook',component:GetallbookComponent},
    
  ]
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
