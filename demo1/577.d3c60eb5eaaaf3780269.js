"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[577],{6577:(wt,f,l)=>{l.r(f),l.d(f,{AuthModule:()=>vt});var a=l(8583),r=l(3679),_=l(1841),m=l(3423),t=l(7716);const b=["root",""];let v=(()=>{class o{constructor(){this.today=new Date}ngOnInit(){document.body.classList.add("bg-white")}ngOnDestroy(){document.body.classList.remove("bg-white")}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["body","root",""]],attrs:b,decls:14,vars:0,consts:[[1,"d-flex","flex-column","flex-column-fluid","bgi-position-y-bottom","position-x-center","bgi-no-repeat","bgi-size-contain","bgi-attachment-fixed",2,"background-image","url('./assets/media/illustrations/sketchy-1/14.png')"],[1,"d-flex","flex-center","flex-column","flex-column-fluid","p-10","pb-lg-20"],["routerLink","/",1,"mb-12"],["alt","Logo","src","./assets/media/logos/logo-1.svg",1,"h-45px"],[1,"w-lg-500px","bg-white","rounded","shadow-sm","p-10","p-lg-15","mx-auto"],[1,"d-flex","flex-center","flex-column-auto","p-10"],[1,"d-flex","align-items-center","fw-bold","fs-6"],[1,"text-muted","text-hover-primary","px-2","cursor-pointer"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"a",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4),t._UZ(5,"router-outlet"),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"a",7),t._uU(9,"About"),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"Contact"),t.qZA(),t.TgZ(12,"a",7),t._uU(13,"Contact Us"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[m.yS,m.lC],styles:["[_nghost-%COMP%]{height:100%}"]}),o})();var p=l(8049),c=l(4222),Z=l(5935);function w(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",21),t.TgZ(2,"div",22),t._uU(3," Use account "),t.TgZ(4,"strong"),t._uU(5),t.qZA(),t._uU(6," and password "),t.TgZ(7,"strong"),t._uU(8),t.qZA(),t._uU(9," to continue. "),t.qZA(),t.qZA(),t.BQk()),2&o){const n=t.oxw();t.xp6(5),t.Oqu(n.defaultAuth.email),t.xp6(3),t.Oqu(n.defaultAuth.password)}}function T(o,i){1&o&&(t.ynx(0),t.TgZ(1,"div",23),t.TgZ(2,"div",24),t._uU(3," The login details are incorrect "),t.qZA(),t.qZA(),t.BQk())}function x(o,i){1&o&&(t.ynx(0),t.TgZ(1,"span",25),t._uU(2," Please wait... "),t._UZ(3,"span",26),t.qZA(),t.BQk()),2&o&&(t.xp6(1),t.Udp("display","block"))}function q(o,i){1&o&&(t.ynx(0),t.TgZ(1,"span",27),t._uU(2,"Continue"),t.qZA(),t.BQk())}function C(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",28),t.TgZ(2,"span",29),t._uU(3),t.qZA(),t.qZA(),t.BQk()),2&o){const n=t.oxw().message;t.xp6(3),t.hij(" ",n," ")}}function A(o,i){if(1&o&&t.YNc(0,C,4,1,"ng-container",5),2&o){const n=i.control;t.Q6J("ngIf",n.hasError(i.validation)&&(n.dirty||n.touched))}}const h=function(o,i){return{"is-invalid":o,"is-valid":i}},k=function(o){return{validation:"required",message:"Email is required",control:o}},y=function(o){return{validation:"email",message:"Email is invalid",control:o}},F=function(o){return{validation:"minLength",message:"Email should have at least 3 symbols",control:o}},O=function(o){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:o}},P=function(o){return{validation:"required",message:"Password is required",control:o}},U=function(o){return{validation:"minlength",message:"Password should have at least 3 symbols",control:o}},L=function(o){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:o}};let J=(()=>{class o{constructor(n,e,s,u){this.fb=n,this.authService=e,this.route=s,this.router=u,this.defaultAuth={email:"admin@demo.com",password:"demo"},this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm(),this.returnUrl=this.route.snapshot.queryParams["returnUrl".toString()]||"/"}get f(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({email:[this.defaultAuth.email,r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])],password:[this.defaultAuth.password,r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])]})}submit(){this.hasError=!1;const n=this.authService.login(this.f.email.value,this.f.password.value).pipe((0,p.P)()).subscribe(e=>{e?this.router.navigate([this.returnUrl]):this.hasError=!0});this.unsubscribe.push(n)}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.qu),t.Y36(c.e),t.Y36(m.gz),t.Y36(m.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:43,vars:51,consts:[["novalidate","novalidate","id","kt_login_signin_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-10"],[1,"text-dark","mb-3"],[1,"text-gray-400","fw-bold","fs-4"],["routerLink","/auth/registration","id","kt_login_signup",1,"link-primary","fw-bolder"],[4,"ngIf"],[1,"fv-row","mb-10"],[1,"form-label","fs-6","fw-bolder","text-dark"],["type","email","name","email","formControlName","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","justify-content-between","mt-n5"],[1,"d-flex","flex-stack","mb-2"],[1,"form-label","fw-bolder","text-dark","fs-6","mb-0"],["routerLink","/auth/forgot-password","id","kt_login_forgot",1,"link-primary","fs-6","fw-bolder"],["type","password","name","password","autocomplete","off","formControlName","password",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"text-center"],["type","submit","id","kt_sign_in_submit",1,"btn","btn-lg","btn-primary","w-100","mb-5",3,"disabled"],[1,"text-center","text-muted","text-uppercase","fw-bolder","mb-5"],[1,"btn","btn-flex","flex-center","btn-light","btn-lg","w-100","mb-5","cursor-pointer"],["src","./assets/media/svg/brand-logos/google-icon.svg",1,"h-20px","me-3"],["formError",""],[1,"mb-10","bg-light-info","p-8","rounded"],[1,"text-info"],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"indicator-label"],[1,"fv-plugins-message-container"],["role","alert"]],template:function(n,e){if(1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(1,"div",1),t.TgZ(2,"h1",2),t._uU(3,"Sign In to Metronic"),t.qZA(),t.TgZ(4,"div",3),t._uU(5," New Here? "),t.TgZ(6,"a",4),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.qZA(),t.qZA(),t.YNc(9,w,10,2,"ng-container",5),t.YNc(10,T,4,0,"ng-container",5),t.TgZ(11,"div",6),t.TgZ(12,"label",7),t._uU(13,"Email"),t.qZA(),t._UZ(14,"input",8),t.GkF(15,9),t.GkF(16,9),t.GkF(17,9),t.GkF(18,9),t.qZA(),t.TgZ(19,"div",6),t.TgZ(20,"div",10),t.TgZ(21,"div",11),t.TgZ(22,"label",12),t._uU(23,"Password"),t.qZA(),t.TgZ(24,"a",13),t._uU(25," Forgot Password ? "),t.qZA(),t.qZA(),t.qZA(),t._UZ(26,"input",14),t.GkF(27,9),t.GkF(28,9),t.GkF(29,9),t.qZA(),t.TgZ(30,"div",15),t.TgZ(31,"button",16),t.YNc(32,x,4,2,"ng-container",5),t.ALo(33,"async"),t.YNc(34,q,3,0,"ng-container",5),t.ALo(35,"async"),t.qZA(),t.TgZ(36,"div",17),t._uU(37,"or"),t.qZA(),t.TgZ(38,"a",18),t._UZ(39,"img",19),t._uU(40," Continue with Google "),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,A,1,1,"ng-template",null,20,t.W1O)),2&n){const s=t.MAs(42);t.Q6J("formGroup",e.loginForm),t.xp6(7),t.Oqu(t.lcZ(8,25,"AUTH.GENERAL.SIGNUP_BUTTON")),t.xp6(2),t.Q6J("ngIf",!e.hasError),t.xp6(1),t.Q6J("ngIf",e.hasError),t.xp6(4),t.Q6J("ngClass",t.WLB(31,h,e.loginForm.controls.email.invalid,e.loginForm.controls.email.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(34,k,e.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(36,y,e.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(38,F,e.loginForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(40,O,e.loginForm.controls.email)),t.xp6(6),t.Udp("margin-left","5px"),t.xp6(2),t.Q6J("ngClass",t.WLB(42,h,e.loginForm.controls.password.invalid,e.loginForm.controls.password.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(45,P,e.loginForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(47,U,e.loginForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(49,L,e.loginForm.controls.password)),t.xp6(2),t.Q6J("disabled",e.loginForm.invalid),t.xp6(1),t.Q6J("ngIf",t.lcZ(33,27,e.isLoading$)),t.xp6(2),t.Q6J("ngIf",!t.lcZ(35,29,e.isLoading$))}},directives:[r._Y,r.JL,r.sg,m.yS,a.O5,r.Fj,r.JJ,r.u,a.mk,a.tP],pipes:[Z.X$,a.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),o})();class Q{static MatchPassword(i){var n,e,s;(null===(n=i.get("password"))||void 0===n?void 0:n.value)!==(null===(e=i.get("cPassword"))||void 0===e?void 0:e.value)&&(null===(s=i.get("cPassword"))||void 0===s||s.setErrors({ConfirmPassword:!0}))}}var I=l(3223);class S extends I.W{constructor(){super(...arguments),this.roles=[]}setUser(i){const n=i;this.id=n.id,this.username=n.username||"",this.password=n.password||"",this.fullname=n.fullname||"",this.email=n.email||"",this.pic=n.pic||"./assets/media/users/default.jpg",this.roles=n.roles||[],this.occupation=n.occupation||"",this.companyName=n.companyName||"",this.phone=n.phone||"",this.address=n.address,this.socialNetworks=n.socialNetworks}}function N(o,i){1&o&&(t.ynx(0),t.TgZ(1,"div",30),t.TgZ(2,"div",31),t._uU(3," The registration details are incorrect "),t.qZA(),t.qZA(),t.BQk())}function E(o,i){1&o&&(t.ynx(0),t.TgZ(1,"div",32),t.TgZ(2,"div",33),t._uU(3," 'Passsword' and 'Confirm Password' didn't match. "),t.qZA(),t.qZA(),t.BQk())}function M(o,i){1&o&&(t.ynx(0),t.TgZ(1,"span",34),t._uU(2,"Submit"),t.qZA(),t.BQk())}function G(o,i){1&o&&(t.ynx(0),t.TgZ(1,"span",35),t._uU(2," Please wait... "),t._UZ(3,"span",36),t.qZA(),t.BQk()),2&o&&(t.xp6(1),t.Udp("display","block"))}function Y(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",32),t.TgZ(2,"div",33),t.TgZ(3,"span",37),t._uU(4),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&o){const n=t.oxw().message;t.xp6(4),t.hij(" ",n," ")}}function V(o,i){if(1&o&&t.YNc(0,Y,5,1,"ng-container",10),2&o){const n=i.control;t.Q6J("ngIf",n.hasError(i.validation)&&(n.dirty||n.touched))}}const d=function(o,i){return{"is-invalid":o,"is-valid":i}},B=function(o){return{validation:"required",message:"Fullname is required",control:o}},K=function(o){return{validation:"minlength",message:"Fullname should have at least 3 symbols",control:o}},R=function(o){return{validation:"maxLength",message:"Fullname should have maximum 100 symbols",control:o}},W=function(o){return{validation:"required",message:"Email is required",control:o}},$=function(o){return{validation:"email",message:"Email is invalid",control:o}},j=function(o){return{validation:"minlength",message:"Email should have at least 3 symbols",control:o}},X=function(o){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:o}},H=function(o){return{validation:"required",message:"Password is required",control:o}},z=function(o){return{validation:"minlength",message:"Password should have at least 3 symbols",control:o}},D=function(o){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:o}},tt=function(o){return{validation:"required",message:"Confirm Password is required",control:o}},ot=function(o){return{validation:"minlength",message:"Confirm Password should have at least 3 symbols",control:o}},et=function(o){return{validation:"maxLength",message:"Confirm Password should have maximum 100 symbols",control:o}};let nt=(()=>{class o{constructor(n,e,s){this.fb=n,this.authService=e,this.router=s,this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm()}get f(){return this.registrationForm.controls}initForm(){this.registrationForm=this.fb.group({fullname:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],email:["qwe@qwe.qwe",r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])],password:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],cPassword:["",r.kI.compose([r.kI.required,r.kI.minLength(3),r.kI.maxLength(100)])],agree:[!1,r.kI.compose([r.kI.required])]},{validator:Q.MatchPassword})}submit(){this.hasError=!1;const n={};Object.keys(this.f).forEach(u=>{n[u]=this.f[u].value});const e=new S;e.setUser(n);const s=this.authService.registration(e).pipe((0,p.P)()).subscribe(u=>{u?this.router.navigate(["/"]):this.hasError=!0});this.unsubscribe.push(s)}ngOnDestroy(){this.unsubscribe.forEach(n=>n.unsubscribe())}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.qu),t.Y36(c.e),t.Y36(m.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-registration"]],decls:65,vars:80,consts:[["novalidate","novalidate","id","kt_login_signup_form",1,"form","w-100","fv-plugins-bootstrap5","fv-plugins-framework",3,"formGroup","ngSubmit"],[1,"mb-10","text-center"],[1,"text-dark","mb-3"],[1,"text-gray-400","fw-bold","fs-4"],["routerLink","/auth/login",1,"link-primary","fw-bolder"],["type","button",1,"btn","btn-light-primary","fw-bolder","w-100","mb-10"],["alt","Logo","src","./assets/media/svg/brand-logos/google-icon.svg",1,"h-20px","me-3"],[1,"d-flex","align-items-center","mb-10"],[1,"border-bottom","border-gray-300","mw-50","w-100"],[1,"fw-bold","text-gray-400","fs-7","mx-2"],[4,"ngIf"],[1,"row","fv-row","mb-7"],[1,"form-label","fw-bolder","text-dark","fs-6"],["type","text","name","fullname","formControlName","fullname","placeholder","Fullname","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"fv-row","mb-7"],["type","email","placeholder","Email","name","email","formControlName","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"mb-10","fv-row"],["type","password","placeholder","Password","name","password","formControlName","password","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"fv-row","mb-5"],["type","password","placeholder","Confirm password","name","cPassword","autocomplete","off","formControlName","cPassword",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"fv-row","mb-10"],[1,"form-check","form-check-custom","form-check-solid"],["id","kt_login_toc_agree","type","checkbox","formControlName","agree","name","agree",1,"form-check-input"],["for","kt_login_toc_agree",1,"form-check-label","fw-bold","text-gray-700","fs-6"],["href","https://keenthemes.com/metronic/?page=faq","target","_blank",1,"ms-1","link-primary"],[1,"text-center"],["type","submit","id","kt_sign_up_submit",1,"btn","btn-lg","btn-primary","w-100","mb-5",3,"disabled"],["routerLink","/auth/login","type","button","id","kt_login_signup_form_cancel_button",1,"btn","btn-lg","btn-light-primary","w-100","mb-5"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],["role","alert"]],template:function(n,e){if(1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(1,"div",1),t.TgZ(2,"h1",2),t._uU(3,"Create an Account"),t.qZA(),t.TgZ(4,"div",3),t._uU(5," Already have an account? "),t.TgZ(6,"a",4),t._uU(7,"Sign in?"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"button",5),t._UZ(9,"img",6),t._uU(10,"Sign in with Google "),t.qZA(),t.TgZ(11,"div",7),t._UZ(12,"div",8),t.TgZ(13,"span",9),t._uU(14,"OR"),t.qZA(),t._UZ(15,"div",8),t.qZA(),t.YNc(16,N,4,0,"ng-container",10),t.TgZ(17,"div",11),t.TgZ(18,"label",12),t._uU(19,"Fullname"),t.qZA(),t._UZ(20,"input",13),t.GkF(21,14),t.GkF(22,14),t.GkF(23,14),t.qZA(),t.TgZ(24,"div",15),t.TgZ(25,"label",12),t._uU(26,"Email"),t.qZA(),t._UZ(27,"input",16),t.GkF(28,14),t.GkF(29,14),t.GkF(30,14),t.GkF(31,14),t.qZA(),t.TgZ(32,"div",17),t.TgZ(33,"label",12),t._uU(34,"Password"),t.qZA(),t._UZ(35,"input",18),t.GkF(36,14),t.GkF(37,14),t.GkF(38,14),t.qZA(),t.TgZ(39,"div",19),t.TgZ(40,"label",12),t._uU(41,"Confirm Password"),t.qZA(),t._UZ(42,"input",20),t.GkF(43,14),t.GkF(44,14),t.GkF(45,14),t.YNc(46,E,4,0,"ng-container",10),t.qZA(),t.TgZ(47,"div",21),t.TgZ(48,"div",22),t._UZ(49,"input",23),t.TgZ(50,"label",24),t._uU(51," I Agree the\xa0"),t.TgZ(52,"a",25),t._uU(53,"terms and conditions"),t.qZA(),t._uU(54,". "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(55,"div",26),t.TgZ(56,"button",27),t.YNc(57,M,3,0,"ng-container",10),t.ALo(58,"async"),t.YNc(59,G,4,2,"ng-container",10),t.ALo(60,"async"),t.qZA(),t.TgZ(61,"a",28),t._uU(62," Cancel "),t.qZA(),t.qZA(),t.qZA(),t.YNc(63,V,1,1,"ng-template",null,29,t.W1O)),2&n){const s=t.MAs(64);t.Q6J("formGroup",e.registrationForm),t.xp6(6),t.Udp("margin-left","5px"),t.xp6(10),t.Q6J("ngIf",e.hasError),t.xp6(4),t.Q6J("ngClass",t.WLB(42,d,e.registrationForm.controls.fullname.invalid,e.registrationForm.controls.fullname.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(45,B,e.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(47,K,e.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(49,R,e.registrationForm.controls.fullname)),t.xp6(4),t.Q6J("ngClass",t.WLB(51,d,e.registrationForm.controls.email.invalid,e.registrationForm.controls.email.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(54,W,e.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(56,$,e.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(58,j,e.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(60,X,e.registrationForm.controls.email)),t.xp6(4),t.Q6J("ngClass",t.WLB(62,d,e.registrationForm.controls.password.invalid,e.registrationForm.controls.password.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(65,H,e.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(67,z,e.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(69,D,e.registrationForm.controls.password)),t.xp6(4),t.Q6J("ngClass",t.WLB(71,d,e.registrationForm.controls.cPassword.invalid,e.registrationForm.controls.cPassword.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(74,tt,e.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(76,ot,e.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(78,et,e.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngIf",e.registrationForm.controls.cPassword.errors&&e.registrationForm.controls.cPassword.errors.ConfirmPassword),t.xp6(10),t.Q6J("disabled",e.registrationForm.invalid||!e.registrationForm.controls.agree.value),t.xp6(1),t.Q6J("ngIf",!1===t.lcZ(58,38,e.isLoading$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(60,40,e.isLoading$))}},directives:[r._Y,r.JL,r.sg,m.yS,a.O5,r.Fj,r.JJ,r.u,a.mk,a.tP,r.Wl],pipes:[a.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),o})();function rt(o,i){1&o&&(t.ynx(0),t.TgZ(1,"div",14),t.TgZ(2,"div",15),t._uU(3," Sorry, looks like there are some errors detected, please try again. "),t.qZA(),t.qZA(),t.BQk())}function it(o,i){1&o&&(t.ynx(0),t.TgZ(1,"div",16),t.TgZ(2,"div",17),t._uU(3,"Sent password reset. Please check your email"),t.qZA(),t.qZA(),t.BQk())}function st(o,i){1&o&&(t.ynx(0),t.TgZ(1,"span",18),t._uU(2," Please wait... "),t._UZ(3,"span",19),t.qZA(),t.BQk())}function at(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",20),t.TgZ(2,"div",21),t.TgZ(3,"span",22),t._uU(4),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&o){const n=t.oxw().message;t.xp6(4),t.Oqu(n)}}function lt(o,i){if(1&o&&t.YNc(0,at,5,1,"ng-container",4),2&o){const n=i.control;t.Q6J("ngIf",n.hasError(i.validation)&&(n.dirty||n.touched))}}const mt=function(o,i){return{"is-invalid":o,"is-valid":i}},gt=function(o){return{validation:"required",message:"Email is required",control:o}},ut=function(o){return{validation:"email",message:"Email is invalid",control:o}},ct=function(o){return{validation:"minLength",message:"Email should have at least 3 symbols",control:o}},dt=function(o){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:o}};var g=(()=>{return(o=g||(g={}))[o.NotSubmitted=0]="NotSubmitted",o[o.HasError=1]="HasError",o[o.NoError=2]="NoError",g;var o})();const ht=[{path:"",component:v,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:J,data:{returnUrl:window.location.pathname}},{path:"registration",component:nt},{path:"forgot-password",component:(()=>{class o{constructor(n,e){this.fb=n,this.authService=e,this.errorState=g.NotSubmitted,this.errorStates=g,this.unsubscribe=[],this.isLoading$=this.authService.isLoading$}ngOnInit(){this.initForm()}get f(){return this.forgotPasswordForm.controls}initForm(){this.forgotPasswordForm=this.fb.group({email:["admin@demo.com",r.kI.compose([r.kI.required,r.kI.email,r.kI.minLength(3),r.kI.maxLength(320)])]})}submit(){this.errorState=g.NotSubmitted;const n=this.authService.forgotPassword(this.f.email.value).pipe((0,p.P)()).subscribe(e=>{this.errorState=e?g.NoError:g.HasError});this.unsubscribe.push(n)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.qu),t.Y36(c.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-forgot-password"]],decls:26,vars:26,consts:[["novalidate","novalidate","id","kt_login_password_reset_form",1,"form","w-100","fv-plugins-bootstrap5","fv-plugins-framework",3,"formGroup","ngSubmit"],[1,"text-center","mb-10"],[1,"text-dark","mb-3"],[1,"text-gray-400","fw-bold","fs-4"],[4,"ngIf"],[1,"fv-row","mb-10"],[1,"form-label","fw-bolder","text-gray-900","fs-6"],["type","email","formControlName","email","placeholder","Email","name","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","flex-wrap","justify-content-center","pb-lg-0"],["type","submit","id","kt_password_reset_submit",1,"btn","btn-lg","btn-primary","fw-bolder","me-4"],[1,"indicator-label"],["routerLink","/auth/login","id","kt_login_password_reset_form_cancel_button",1,"btn","btn-lg","btn-light-primary","fw-bolder"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"mb-10","bg-light-info","p-8","rounded"],[1,"text-info"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],["role","alert"]],template:function(n,e){if(1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(1,"div",1),t.TgZ(2,"h1",2),t._uU(3,"Forgotten Password ?"),t.qZA(),t.TgZ(4,"div",3),t._uU(5," Enter your email to reset your password. "),t.qZA(),t.qZA(),t.YNc(6,rt,4,0,"ng-container",4),t.YNc(7,it,4,0,"ng-container",4),t.TgZ(8,"div",5),t.TgZ(9,"label",6),t._uU(10,"Email"),t.qZA(),t._UZ(11,"input",7),t.GkF(12,8),t.GkF(13,8),t.GkF(14,8),t.GkF(15,8),t.qZA(),t.TgZ(16,"div",9),t.TgZ(17,"button",10),t.TgZ(18,"span",11),t._uU(19,"Submit"),t.qZA(),t.YNc(20,st,4,0,"ng-container",4),t.ALo(21,"async"),t.qZA(),t.TgZ(22,"a",12),t._uU(23," Cancel "),t.qZA(),t.qZA(),t.qZA(),t.YNc(24,lt,1,1,"ng-template",null,13,t.W1O)),2&n){const s=t.MAs(25);t.Q6J("formGroup",e.forgotPasswordForm),t.xp6(6),t.Q6J("ngIf",e.errorState===e.errorStates.HasError),t.xp6(1),t.Q6J("ngIf",e.errorState===e.errorStates.NoError),t.xp6(4),t.Q6J("ngClass",t.WLB(15,mt,e.forgotPasswordForm.controls.email.invalid,e.forgotPasswordForm.controls.email.valid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(18,gt,e.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(20,ut,e.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(22,ct,e.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(24,dt,e.forgotPasswordForm.controls.email)),t.xp6(5),t.Q6J("ngIf",t.lcZ(21,13,e.isLoading$))}},directives:[r._Y,r.JL,r.sg,a.O5,r.Fj,r.JJ,r.u,a.mk,a.tP,m.yS],pipes:[a.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),o})()},{path:"logout",component:(()=>{class o{constructor(n){this.authService=n,this.authService.logout()}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(c.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-logout"]],decls:2,vars:0,template:function(n,e){1&n&&(t.TgZ(0,"p"),t._uU(1,"logout works!"),t.qZA())},styles:[""]}),o})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}]}];let _t=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.Bz.forChild(ht)],m.Bz]}),o})();var bt=l(7292);let vt=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.ez,bt.q,_t,r.u5,r.UX,_.JF]]}),o})()}}]);