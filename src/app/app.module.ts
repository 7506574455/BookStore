import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DisplayLoginComponent } from './components/display-login/display-login.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {AuthguardServiceService} from './services/authguard-service.service'
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { GetallbookComponent } from './components/getallbook/getallbook.component';
import { BookdashboardComponent } from './components/bookdashboard/bookdashboard.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AddcartComponent } from './components/addcart/addcart.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { BookpageComponent } from './components/bookpage/bookpage.component';
import { StarComponent } from './components/star/star.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';
import { AdminDisplayComponent } from './components/admin-display/admin-display.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DisplayLoginComponent,
    HeaderComponent,
    FooterComponent,
    ForgotComponent,
    GetallbookComponent,
    BookdashboardComponent,
    WishlistComponent,
    AddcartComponent,
    OrderplacedComponent,
    AdminloginComponent,
    BookpageComponent,
    StarComponent,
    AdminsignupComponent,
    AdminDisplayComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule,
    MatRadioModule,
    MatPaginatorModule
    
    
  ],
  providers: [
    AuthguardServiceService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
