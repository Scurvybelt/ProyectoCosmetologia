import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { AppointmentPageComponent } from './components/pages/appointment-page/appointment-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ComparePageComponent } from './components/pages/compare-page/compare-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CustomerServicePageComponent } from './components/pages/customer-service-page/customer-service-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { GalleryPageOneComponent } from './components/pages/gallery-page-one/gallery-page-one.component';
import { GalleryPageTwoComponent } from './components/pages/gallery-page-two/gallery-page-two.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { PricingPageOneComponent } from './components/pages/pricing-page-one/pricing-page-one.component';
import { PricingPageTwoComponent } from './components/pages/pricing-page-two/pricing-page-two.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { ServicesPageTwoComponent } from './components/pages/services-page-two/services-page-two.component';
import { TeamDetailsPageComponent } from './components/pages/team-details-page/team-details-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';
import { TrackingOrderPageComponent } from './components/pages/tracking-order-page/tracking-order-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';

const routes: Routes = [
    {path: '', redirectTo: 'index-2', pathMatch: 'full'},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'appointment', component: AppointmentPageComponent},
    {path: 'services', component: ServicesPageOneComponent},
    {path: 'services-2', component: ServicesPageTwoComponent},
    {path: 'service-details', component: ServiceDetailsPageComponent},
    {path: 'service-details/:categoria', component: ServiceDetailsPageComponent},
    /*{path: 'service-details/:categoria/:tratamiento', component: ServiceDetailsPageComponent},*/
    {path: 'team', component: TeamPageComponent},
    {path: 'team-details', component: TeamDetailsPageComponent},
    {path: 'pricing', component: PricingPageOneComponent},
    {path: 'pricing-2', component: PricingPageTwoComponent},
    {path: 'gallery', component: GalleryPageOneComponent},
    {path: 'gallery-2', component: GalleryPageTwoComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'profile-authentication', component: ProfileAuthenticationPageComponent},
    {path: 'forgot-password', component: ForgotPasswordPageComponent},
    {path: 'tracking-order', component: TrackingOrderPageComponent},
    {path: 'shop', component: ProductsPageComponent},
    {path: 'product/:slug', component: ProductDetailsPageComponent},
    {path: 'compare', component: ComparePageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'wishlist', component: WishlistPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'customer-service', component: CustomerServicePageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-left-sidebar', component: BlogLeftSidebarPageComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }