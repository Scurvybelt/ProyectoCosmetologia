import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NotifierModule } from 'angular-notifier';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { InstagramComponent } from './components/common/instagram/instagram.component';
import { AppointmentComponent } from './components/common/appointment/appointment.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { StaffComponent } from './components/common/staff/staff.component';
import { PackagesComponent } from './components/common/packages/packages.component';
import { ProductsComponent } from './components/common/products/products.component';
import { IntroVideoComponent } from './components/common/intro-video/intro-video.component';
import { ServicesComponent } from './components/common/services/services.component';
import { AboutComponent } from './components/common/about/about.component';
import { FeaturedServicesComponent } from './components/common/featured-services/featured-services.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { TopHeaderComponent } from './components/common/top-header/top-header.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { BannerFormComponent } from './components/common/banner-form/banner-form.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { AppointmentPageComponent } from './components/pages/appointment-page/appointment-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { TeamDetailsPageComponent } from './components/pages/team-details-page/team-details-page.component';
import { PricingPageOneComponent } from './components/pages/pricing-page-one/pricing-page-one.component';
import { PricingPageTwoComponent } from './components/pages/pricing-page-two/pricing-page-two.component';
import { GalleryPageTwoComponent } from './components/pages/gallery-page-two/gallery-page-two.component';
import { GalleryPageOneComponent } from './components/pages/gallery-page-one/gallery-page-one.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { ServicesPageTwoComponent } from './components/pages/services-page-two/services-page-two.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { WidgetSidebarComponent } from './components/common/widget-sidebar/widget-sidebar.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CustomerServicePageComponent } from './components/pages/customer-service-page/customer-service-page.component';
import { TrackingOrderPageComponent } from './components/pages/tracking-order-page/tracking-order-page.component';
import { ComparePageComponent } from './components/pages/compare-page/compare-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        HomeDemoThreeComponent,
        NavbarComponent,
        FooterComponent,
        NotFoundComponent,
        BlogComponent,
        InstagramComponent,
        AppointmentComponent,
        FeedbackComponent,
        StaffComponent,
        PackagesComponent,
        ProductsComponent,
        IntroVideoComponent,
        ServicesComponent,
        AboutComponent,
        FeaturedServicesComponent,
        HomeoneBannerComponent,
        TopHeaderComponent,
        HometwoBannerComponent,
        HomethreeBannerComponent,
        BannerFormComponent,
        AboutPageComponent,
        TestimonialsPageComponent,
        FaqPageComponent,
        AppointmentPageComponent,
        TeamPageComponent,
        TeamDetailsPageComponent,
        PricingPageOneComponent,
        PricingPageTwoComponent,
        GalleryPageTwoComponent,
        GalleryPageOneComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent,
        ProfileAuthenticationPageComponent,
        ForgotPasswordPageComponent,
        ServicesPageOneComponent,
        ServicesPageTwoComponent,
        ServiceDetailsPageComponent,
        BlogGridPageComponent,
        BlogLeftSidebarPageComponent,
        BlogRightSidebarPageComponent,
        BlogDetailsPageComponent,
        WidgetSidebarComponent,
        ContactPageComponent,
        CustomerServicePageComponent,
        TrackingOrderPageComponent,
        ComparePageComponent,
        CartPageComponent,
        CheckoutPageComponent,
        ProductsPageComponent,
        ProductDetailsPageComponent,
        WishlistPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        AccordionModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        FormsModule,
        NgxPaginationModule,
        HttpClientModule,
        NotifierModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }