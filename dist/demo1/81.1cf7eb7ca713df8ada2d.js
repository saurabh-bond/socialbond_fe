(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[81],{4081:(t,o,e)=>{"use strict";e.r(o),e.d(o,{AuthModule:()=>xt});var r=e(8583),n=e(3679),i=e(3423),s=e(7716);const a=["root",""];let l=(()=>{class t{constructor(){this.today=new Date}ngOnInit(){document.body.classList.add("bg-white")}ngOnDestroy(){document.body.classList.remove("bg-white")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["body","root",""]],attrs:a,decls:14,vars:0,consts:[[1,"bg-dark","d-flex","flex-column","flex-column-fluid","bgi-position-y-bottom","position-x-center","bgi-no-repeat","bgi-size-contain","bgi-attachment-fixed",2,"background-image","url('./assets/media/illustrations/sketchy-1/14-dark.png')"],[1,"d-flex","flex-center","flex-column","flex-column-fluid","p-10","pb-lg-20"],["routerLink","/",1,"mb-12"],["alt","Logo","src","./assets/media/logos/SB_logo.png",1,"h-100px"],[1,"w-lg-500px","bg-white","rounded","shadow-sm","p-10","p-lg-15","mx-auto"],[1,"d-flex","flex-center","flex-column-auto","p-10"],[1,"d-flex","align-items-center","fw-bold","fs-6"],["href","https://merchant.razorpay.com/policy/KnW0ctDvdahphe/terms","target","_blank",1,"text-muted","text-hover-primary","px-2","cursor-pointer"],["href","https://merchant.razorpay.com/policy/KnW0ctDvdahphe/contact_us","target","_blank",1,"text-muted","text-hover-primary","px-2","cursor-pointer"],["href","https://merchant.razorpay.com/policy/KnW0ctDvdahphe/privacy","target","_blank",1,"text-muted","text-hover-primary","px-2","cursor-pointer"]],template:function(t,o){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"a",2),s._UZ(3,"img",3),s.qZA(),s.TgZ(4,"div",4),s._UZ(5,"router-outlet"),s.qZA(),s.qZA(),s.TgZ(6,"div",5),s.TgZ(7,"div",6),s.TgZ(8,"a",7),s._uU(9," Terms & Condtions "),s.qZA(),s.TgZ(10,"a",8),s._uU(11," Contact "),s.qZA(),s.TgZ(12,"a",9),s._uU(13," Privacy "),s.qZA(),s.qZA(),s.qZA(),s.qZA())},directives:[i.yS,i.lC],styles:["[_nghost-%COMP%]{height:100%}"]}),t})();var m=e(8049),g=e(694),u=e(5935);function c(t,o){if(1&t&&(s.ynx(0),s.TgZ(1,"div",18),s.TgZ(2,"div",19),s._uU(3," Use account "),s.TgZ(4,"strong"),s._uU(5),s.qZA(),s._uU(6," and password "),s.TgZ(7,"strong"),s._uU(8),s.qZA(),s._uU(9," to continue. "),s.qZA(),s.qZA(),s.BQk()),2&t){const t=s.oxw();s.xp6(5),s.Oqu(t.defaultAuth.email),s.xp6(3),s.Oqu(t.defaultAuth.password)}}function d(t,o){1&t&&(s.ynx(0),s.TgZ(1,"div",20),s.TgZ(2,"div",21),s._uU(3," The login details are incorrect "),s.qZA(),s.qZA(),s.BQk())}function p(t,o){1&t&&(s.ynx(0),s.TgZ(1,"span",22),s._uU(2," Please wait... "),s._UZ(3,"span",23),s.qZA(),s.BQk()),2&t&&(s.xp6(1),s.Udp("display","block"))}function f(t,o){1&t&&(s.ynx(0),s.TgZ(1,"span",24),s._uU(2,"Continue"),s.qZA(),s.BQk())}function h(t,o){if(1&t&&(s.ynx(0),s.TgZ(1,"div",25),s.TgZ(2,"span",26),s._uU(3),s.qZA(),s.qZA(),s.BQk()),2&t){const t=s.oxw().message;s.xp6(3),s.hij(" ",t," ")}}function b(t,o){if(1&t&&s.YNc(0,h,4,1,"ng-container",5),2&t){const t=o.control;s.Q6J("ngIf",t.hasError(o.validation)&&(t.dirty||t.touched))}}const v=function(t,o){return{"is-invalid":t,"is-valid":o}},x=function(t){return{validation:"required",message:"Email is required",control:t}},Z=function(t){return{validation:"email",message:"Email is invalid",control:t}},w=function(t){return{validation:"minLength",message:"Email should have at least 3 symbols",control:t}},T=function(t){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:t}},k=function(t){return{validation:"required",message:"Password is required",control:t}},q=function(t){return{validation:"minlength",message:"Password should have at least 3 symbols",control:t}},_=function(t){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:t}};let y=(()=>{class t{constructor(t,o,e,r){this.fb=t,this.authService=o,this.route=e,this.router=r,this.defaultAuth={email:"test@autobot.com",password:"test"},this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm(),this.returnUrl=this.route.snapshot.queryParams["returnUrl".toString()]||"/"}get f(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({email:["",n.kI.compose([n.kI.required,n.kI.email,n.kI.minLength(3),n.kI.maxLength(320)])],password:["",n.kI.compose([n.kI.required,n.kI.minLength(3),n.kI.maxLength(100)])]})}submit(){this.hasError=!1;const t=this.authService.login(this.f.email.value,this.f.password.value).pipe((0,m.P)()).subscribe(t=>{t?this.router.navigate([this.returnUrl]):this.hasError=!0});this.unsubscribe.push(t)}ngOnDestroy(){this.unsubscribe.forEach(t=>t.unsubscribe())}}return t.\u0275fac=function(o){return new(o||t)(s.Y36(n.qu),s.Y36(g.e),s.Y36(i.gz),s.Y36(i.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-login"]],decls:38,vars:51,consts:[["novalidate","novalidate","id","kt_login_signin_form",1,"form","w-100",3,"formGroup","ngSubmit"],[1,"text-center","mb-10"],[1,"text-dark","mb-3"],[1,"text-gray-400","fw-bold","fs-4"],["routerLink","/auth/registration","id","kt_login_signup",1,"link-primary","fw-bolder"],[4,"ngIf"],[1,"fv-row","mb-10"],[1,"form-label","fs-6","fw-bolder","text-dark"],["type","email","name","email","formControlName","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","justify-content-between","mt-n5"],[1,"d-flex","flex-stack","mb-2"],[1,"form-label","fw-bolder","text-dark","fs-6","mb-0"],["routerLink","/auth/forgot-password","id","kt_login_forgot",1,"link-primary","fs-6","fw-bolder"],["type","password","name","password","autocomplete","off","formControlName","password",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"text-center"],["type","submit","id","kt_sign_in_submit",1,"btn","btn-lg","btn-primary","w-100","mb-5",3,"disabled"],["formError",""],[1,"mb-10","bg-light-info","p-8","rounded"],[1,"text-info"],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"indicator-label"],[1,"fv-plugins-message-container"],["role","alert"]],template:function(t,o){if(1&t&&(s.TgZ(0,"form",0),s.NdJ("ngSubmit",function(){return o.submit()}),s.TgZ(1,"div",1),s.TgZ(2,"h1",2),s._uU(3,"Sign In to SOCIOBOND"),s.qZA(),s.TgZ(4,"div",3),s._uU(5," New Here? "),s.TgZ(6,"a",4),s._uU(7),s.ALo(8,"translate"),s.qZA(),s.qZA(),s.qZA(),s.YNc(9,c,10,2,"ng-container",5),s.YNc(10,d,4,0,"ng-container",5),s.TgZ(11,"div",6),s.TgZ(12,"label",7),s._uU(13,"Email"),s.qZA(),s._UZ(14,"input",8),s.GkF(15,9),s.GkF(16,9),s.GkF(17,9),s.GkF(18,9),s.qZA(),s.TgZ(19,"div",6),s.TgZ(20,"div",10),s.TgZ(21,"div",11),s.TgZ(22,"label",12),s._uU(23,"Password"),s.qZA(),s.TgZ(24,"a",13),s._uU(25," Forgot Password ? "),s.qZA(),s.qZA(),s.qZA(),s._UZ(26,"input",14),s.GkF(27,9),s.GkF(28,9),s.GkF(29,9),s.qZA(),s.TgZ(30,"div",15),s.TgZ(31,"button",16),s.YNc(32,p,4,2,"ng-container",5),s.ALo(33,"async"),s.YNc(34,f,3,0,"ng-container",5),s.ALo(35,"async"),s.qZA(),s.qZA(),s.qZA(),s.YNc(36,b,1,1,"ng-template",null,17,s.W1O)),2&t){const t=s.MAs(37);s.Q6J("formGroup",o.loginForm),s.xp6(7),s.Oqu(s.lcZ(8,25,"AUTH.GENERAL.SIGNUP_BUTTON")),s.xp6(2),s.Q6J("ngIf",!o.hasError),s.xp6(1),s.Q6J("ngIf",o.hasError),s.xp6(4),s.Q6J("ngClass",s.WLB(31,v,o.loginForm.controls.email.invalid,o.loginForm.controls.email.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(34,x,o.loginForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(36,Z,o.loginForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(38,w,o.loginForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(40,T,o.loginForm.controls.email)),s.xp6(6),s.Udp("margin-left","5px"),s.xp6(2),s.Q6J("ngClass",s.WLB(42,v,o.loginForm.controls.password.invalid,o.loginForm.controls.password.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(45,k,o.loginForm.controls.password)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(47,q,o.loginForm.controls.password)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(49,_,o.loginForm.controls.password)),s.xp6(2),s.Q6J("disabled",o.loginForm.invalid),s.xp6(1),s.Q6J("ngIf",s.lcZ(33,27,o.isLoading$)),s.xp6(2),s.Q6J("ngIf",!s.lcZ(35,29,o.isLoading$))}},directives:[n._Y,n.JL,n.sg,i.yS,r.O5,n.Fj,n.JJ,n.u,r.mk,r.tP],pipes:[u.X$,r.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),t})();var A=e(5917);class O{static MatchPassword(t){var o,e,r;(null===(o=t.get("password"))||void 0===o?void 0:o.value)!==(null===(e=t.get("cPassword"))||void 0===e?void 0:e.value)&&(null===(r=t.get("cPassword"))||void 0===r||r.setErrors({ConfirmPassword:!0}))}}class F extends class{}{setUser(t){const o=t;this.id=o.id,this.password=o.password||"",this.name=o.fullname||"",this.email=o.email||"",this.avatar=o.avatar||"./assets/media/avatars/blank.png"}}var C=e(5304),U=e(9699);function P(t,o){if(1&t&&(s.ynx(0),s.TgZ(1,"div",25),s.TgZ(2,"div",26),s._uU(3),s.qZA(),s.qZA(),s.BQk()),2&t){const t=s.oxw();s.xp6(3),s.hij(" ",t.errorMsg," ")}}function J(t,o){1&t&&(s.ynx(0),s.TgZ(1,"div",27),s.TgZ(2,"div",28),s._uU(3," 'Passsword' and 'Confirm Password' didn't match. "),s.qZA(),s.qZA(),s.BQk())}function Q(t,o){1&t&&(s.ynx(0),s.TgZ(1,"span",29),s._uU(2,"Submit"),s.qZA(),s.BQk())}function I(t,o){1&t&&(s.ynx(0),s.TgZ(1,"span",30),s._uU(2," Please wait... "),s._UZ(3,"span",31),s.qZA(),s.BQk()),2&t&&(s.xp6(1),s.Udp("display","block"))}function L(t,o){if(1&t&&(s.ynx(0),s.TgZ(1,"div",27),s.TgZ(2,"div",28),s.TgZ(3,"span",32),s._uU(4),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&t){const t=s.oxw().message;s.xp6(4),s.hij(" ",t," ")}}function S(t,o){if(1&t&&s.YNc(0,L,5,1,"ng-container",5),2&t){const t=o.control;s.Q6J("ngIf",t.hasError(o.validation)&&(t.dirty||t.touched))}}const E=function(t,o){return{"is-invalid":t,"is-valid":o}},N=function(t){return{validation:"required",message:"Fullname is required",control:t}},M=function(t){return{validation:"minlength",message:"Fullname should have at least 3 symbols",control:t}},Y=function(t){return{validation:"maxLength",message:"Fullname should have maximum 100 symbols",control:t}},G=function(t){return{validation:"required",message:"Email is required",control:t}},K=function(t){return{validation:"email",message:"Email is invalid",control:t}},B=function(t){return{validation:"minlength",message:"Email should have at least 3 symbols",control:t}},V=function(t){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:t}},j=function(t){return{validation:"required",message:"Password is required",control:t}},W=function(t){return{validation:"minlength",message:"Password should have at least 3 symbols",control:t}},z=function(t){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:t}},$=function(t){return{validation:"required",message:"Confirm Password is required",control:t}},D=function(t){return{validation:"minlength",message:"Confirm Password should have at least 3 symbols",control:t}},X=function(t){return{validation:"maxLength",message:"Confirm Password should have maximum 100 symbols",control:t}};let H=(()=>{class t{constructor(t,o,e,r){this.fb=t,this.authService=o,this.router=e,this.toastr=r,this.errorMsg="The registration details are incorrect",this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm()}get f(){return this.registrationForm.controls}initForm(){this.registrationForm=this.fb.group({fullname:["",n.kI.compose([n.kI.required,n.kI.minLength(4),n.kI.maxLength(100)])],email:["",n.kI.compose([n.kI.required,n.kI.email,n.kI.minLength(4),n.kI.maxLength(320)])],password:["",n.kI.compose([n.kI.required,n.kI.minLength(4),n.kI.maxLength(32)])],cPassword:["",n.kI.compose([n.kI.required,n.kI.minLength(4),n.kI.maxLength(32)])],agree:[!1,n.kI.compose([n.kI.required])]},{validator:O.MatchPassword})}submit(){this.hasError=!1;const t={};Object.keys(this.f).forEach(o=>{t[o]=this.f[o].value});const o=new F;o.setUser(t);const e=this.authService.registration(o).pipe((0,m.P)(),(0,C.K)(t=>(this.errorMsg=t,(0,A.of)(void 0)))).subscribe(t=>{t?(this.toastr.success("User registration successful."),this.router.navigate(["/"])):(this.toastr.error(this.errorMsg),this.hasError=!0)});this.unsubscribe.push(e)}ngOnDestroy(){this.unsubscribe.forEach(t=>t.unsubscribe())}}return t.\u0275fac=function(o){return new(o||t)(s.Y36(n.qu),s.Y36(g.e),s.Y36(i.F0),s.Y36(U._W))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-registration"]],decls:57,vars:80,consts:[["novalidate","novalidate","id","kt_login_signup_form",1,"form","w-100","fv-plugins-bootstrap5","fv-plugins-framework",3,"formGroup","ngSubmit"],[1,"mb-10","text-center"],[1,"text-dark","mb-3"],[1,"text-gray-400","fw-bold","fs-4"],["routerLink","/auth/login",1,"link-primary","fw-bolder"],[4,"ngIf"],[1,"row","fv-row","mb-7"],[1,"form-label","fw-bolder","text-dark","fs-6"],["type","text","name","fullname","formControlName","fullname","placeholder","Fullname","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"fv-row","mb-7"],["type","email","placeholder","Email","name","email","formControlName","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"mb-10","fv-row"],["type","password","placeholder","Password","name","password","formControlName","password","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"fv-row","mb-5"],["type","password","placeholder","Confirm password","name","cPassword","autocomplete","off","formControlName","cPassword",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[1,"fv-row","mb-10"],[1,"form-check","form-check-custom","form-check-solid"],["id","kt_login_toc_agree","type","checkbox","formControlName","agree","name","agree",1,"form-check-input"],["for","kt_login_toc_agree",1,"form-check-label","fw-bold","text-gray-700","fs-6"],["href","https://keenthemes.com/metronic/?page=faq","target","_blank",1,"ms-1","link-primary"],[1,"text-center"],["type","submit","id","kt_sign_up_submit",1,"btn","btn-lg","btn-primary","w-100","mb-5",3,"disabled"],["routerLink","/auth/login","type","button","id","kt_login_signup_form_cancel_button",1,"btn","btn-lg","btn-light-primary","w-100","mb-5"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],[1,"indicator-label"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],["role","alert"]],template:function(t,o){if(1&t&&(s.TgZ(0,"form",0),s.NdJ("ngSubmit",function(){return o.submit()}),s.TgZ(1,"div",1),s.TgZ(2,"h1",2),s._uU(3,"Create an Account"),s.qZA(),s.TgZ(4,"div",3),s._uU(5," Already have an account? "),s.TgZ(6,"a",4),s._uU(7,"Sign in?"),s.qZA(),s.qZA(),s.qZA(),s.YNc(8,P,4,1,"ng-container",5),s.TgZ(9,"div",6),s.TgZ(10,"label",7),s._uU(11,"Name"),s.qZA(),s._UZ(12,"input",8),s.GkF(13,9),s.GkF(14,9),s.GkF(15,9),s.qZA(),s.TgZ(16,"div",10),s.TgZ(17,"label",7),s._uU(18,"Email"),s.qZA(),s._UZ(19,"input",11),s.GkF(20,9),s.GkF(21,9),s.GkF(22,9),s.GkF(23,9),s.qZA(),s.TgZ(24,"div",12),s.TgZ(25,"label",7),s._uU(26,"Password"),s.qZA(),s._UZ(27,"input",13),s.GkF(28,9),s.GkF(29,9),s.GkF(30,9),s.qZA(),s.TgZ(31,"div",14),s.TgZ(32,"label",7),s._uU(33,"Confirm Password"),s.qZA(),s._UZ(34,"input",15),s.GkF(35,9),s.GkF(36,9),s.GkF(37,9),s.YNc(38,J,4,0,"ng-container",5),s.qZA(),s.TgZ(39,"div",16),s.TgZ(40,"div",17),s._UZ(41,"input",18),s.TgZ(42,"label",19),s._uU(43," I Agree the\xa0"),s.TgZ(44,"a",20),s._uU(45,"terms and conditions"),s.qZA(),s._uU(46,". "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(47,"div",21),s.TgZ(48,"button",22),s.YNc(49,Q,3,0,"ng-container",5),s.ALo(50,"async"),s.YNc(51,I,4,2,"ng-container",5),s.ALo(52,"async"),s.qZA(),s.TgZ(53,"a",23),s._uU(54," Cancel "),s.qZA(),s.qZA(),s.qZA(),s.YNc(55,S,1,1,"ng-template",null,24,s.W1O)),2&t){const t=s.MAs(56);s.Q6J("formGroup",o.registrationForm),s.xp6(6),s.Udp("margin-left","5px"),s.xp6(2),s.Q6J("ngIf",o.hasError),s.xp6(4),s.Q6J("ngClass",s.WLB(42,E,o.registrationForm.controls.fullname.invalid,o.registrationForm.controls.fullname.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(45,N,o.registrationForm.controls.fullname)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(47,M,o.registrationForm.controls.fullname)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(49,Y,o.registrationForm.controls.fullname)),s.xp6(4),s.Q6J("ngClass",s.WLB(51,E,o.registrationForm.controls.email.invalid,o.registrationForm.controls.email.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(54,G,o.registrationForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(56,K,o.registrationForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(58,B,o.registrationForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(60,V,o.registrationForm.controls.email)),s.xp6(4),s.Q6J("ngClass",s.WLB(62,E,o.registrationForm.controls.password.invalid,o.registrationForm.controls.password.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(65,j,o.registrationForm.controls.password)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(67,W,o.registrationForm.controls.password)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(69,z,o.registrationForm.controls.password)),s.xp6(4),s.Q6J("ngClass",s.WLB(71,E,o.registrationForm.controls.cPassword.invalid,o.registrationForm.controls.cPassword.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(74,$,o.registrationForm.controls.cPassword)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(76,D,o.registrationForm.controls.cPassword)),s.xp6(1),s.Q6J("ngTemplateOutlet",t)("ngTemplateOutletContext",s.VKq(78,X,o.registrationForm.controls.cPassword)),s.xp6(1),s.Q6J("ngIf",o.registrationForm.controls.cPassword.errors&&o.registrationForm.controls.cPassword.errors.ConfirmPassword),s.xp6(10),s.Q6J("disabled",o.registrationForm.invalid||!o.registrationForm.controls.agree.value),s.xp6(1),s.Q6J("ngIf",!1===s.lcZ(50,38,o.isLoading$)),s.xp6(2),s.Q6J("ngIf",s.lcZ(52,40,o.isLoading$))}},directives:[n._Y,n.JL,n.sg,i.yS,r.O5,n.Fj,n.JJ,n.u,r.mk,r.tP,n.Wl],pipes:[r.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),t})();var R=e(6215),tt=e(205),ot=e(8939);function et(t,o){1&t&&(s.ynx(0),s.TgZ(1,"div",9),s.TgZ(2,"div",10),s._uU(3," Sorry, looks like there are some errors detected, please try again. "),s.qZA(),s.qZA(),s.BQk())}function rt(t,o){1&t&&(s.ynx(0),s.TgZ(1,"div",11),s.TgZ(2,"div",12),s._uU(3,"Sent password reset mail. Please check your email"),s.qZA(),s.qZA(),s.BQk())}function nt(t,o){1&t&&(s.TgZ(0,"div",13),s.TgZ(1,"div",14),s.TgZ(2,"div",15),s.TgZ(3,"h3",16),s._uU(4," Email is correct! "),s.qZA(),s.TgZ(5,"p",17),s._uU(6," Message with 'recovery' instruction has "),s._UZ(7,"br"),s._uU(8," been sent. Please check your email. "),s._UZ(9,"br"),s.qZA(),s.TgZ(10,"a",18),s._uU(11," Ok, got it! "),s.qZA(),s.qZA(),s.qZA(),s.qZA())}const it=function(t,o){return{"is-invalid":t,"is-valid":o}},st=function(t){return{validation:"required",message:"Email is required",control:t}},at=function(t){return{validation:"email",message:"Email is invalid",control:t}},lt=function(t){return{validation:"minLength",message:"Email should have at least 3 symbols",control:t}},mt=function(t){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:t}};function gt(t,o){if(1&t&&(s.TgZ(0,"div",19),s.TgZ(1,"label",20),s._uU(2,"Email"),s.qZA(),s._UZ(3,"input",21),s.GkF(4,22),s.GkF(5,22),s.GkF(6,22),s.GkF(7,22),s.qZA()),2&t){const t=s.oxw(),o=s.MAs(12);s.xp6(3),s.Q6J("ngClass",s.WLB(9,it,t.forgotPasswordForm.controls.email.invalid,t.forgotPasswordForm.controls.email.valid)),s.xp6(1),s.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",s.VKq(12,st,t.forgotPasswordForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",s.VKq(14,at,t.forgotPasswordForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",s.VKq(16,lt,t.forgotPasswordForm.controls.email)),s.xp6(1),s.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",s.VKq(18,mt,t.forgotPasswordForm.controls.email))}}function ut(t,o){1&t&&(s.ynx(0),s.TgZ(1,"span",27),s._uU(2," Please wait... "),s._UZ(3,"span",28),s.qZA(),s.BQk())}function ct(t,o){if(1&t&&(s.TgZ(0,"div",23),s.TgZ(1,"button",24),s.TgZ(2,"span",25),s._uU(3,"Submit"),s.qZA(),s.YNc(4,ut,4,0,"ng-container",4),s.ALo(5,"async"),s.qZA(),s.TgZ(6,"a",26),s._uU(7," Cancel "),s.qZA(),s.qZA()),2&t){const t=s.oxw();s.xp6(4),s.Q6J("ngIf",s.lcZ(5,1,t.isLoading$))}}function dt(t,o){if(1&t&&(s.ynx(0),s.TgZ(1,"div",29),s.TgZ(2,"div",30),s.TgZ(3,"span",31),s._uU(4),s.qZA(),s.qZA(),s.qZA(),s.BQk()),2&t){const t=s.oxw().message;s.xp6(4),s.Oqu(t)}}function pt(t,o){if(1&t&&s.YNc(0,dt,5,1,"ng-container",4),2&t){const t=o.control;s.Q6J("ngIf",t.hasError(o.validation)&&(t.dirty||t.touched))}}var ft=(()=>(function(t){t[t.NotSubmitted=0]="NotSubmitted",t[t.HasError=1]="HasError",t[t.NoError=2]="NoError"}(ft||(ft={})),ft))();const ht=[{path:"",component:l,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:y,data:{returnUrl:window.location.pathname}},{path:"registration",component:H},{path:"forgot-password",component:(()=>{class t{constructor(t,o,e){this.fb=t,this.authService=o,this.toastr=e,this.errorState=ft.NotSubmitted,this.errorStates=ft,this.errorMsg="",this.unsubscribe=[],this.isLoadingSubject=new R.X(!1),this.isLoading$=this.isLoadingSubject.asObservable()}ngOnInit(){this.initForm()}get f(){return this.forgotPasswordForm.controls}initForm(){this.forgotPasswordForm=this.fb.group({email:["",n.kI.compose([n.kI.required,n.kI.email,n.kI.minLength(3),n.kI.maxLength(320)])]})}submit(){if(this.forgotPasswordForm.invalid)return;this.errorState=ft.NotSubmitted,this.isLoadingSubject.next(!0);const t=this.authService.forgotPassword(this.f.email.value).pipe((0,m.P)(),(0,C.K)(t=>(this.errorState=ft.HasError,this.errorMsg=t.error.message,this.toastr.error(this.errorMsg),(0,tt._)(this.errorMsg))),(0,ot.x)(()=>this.isLoadingSubject.next(!1))).subscribe(t=>{console.log("results",t),200===t.statusCode?(this.errorState=ft.NoError,this.toastr.success(t.message)):(this.errorMsg=t.message,this.toastr.error(this.errorMsg),this.errorState=ft.HasError)});this.unsubscribe.push(t)}}return t.\u0275fac=function(o){return new(o||t)(s.Y36(n.qu),s.Y36(g.e),s.Y36(U._W))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-forgot-password"]],decls:13,vars:6,consts:[["novalidate","novalidate","id","kt_login_password_reset_form",1,"form","w-100","fv-plugins-bootstrap5","fv-plugins-framework",3,"formGroup","ngSubmit"],[1,"text-center","mb-10"],[1,"text-dark","mb-3"],[1,"text-gray-400","fw-bold","fs-4"],[4,"ngIf"],["class","card card-custom bgi-no-repeat gutter-b","style","height: 175px; background-color: #4ab58e; background-position: calc(100% + 1rem) bottom; background-size: 25% auto; background-image: url(assets/media/svg/humans/custom-1.svg);",4,"ngIf"],["class","fv-row mb-10",4,"ngIf"],["class","d-flex flex-wrap justify-content-center pb-lg-0",4,"ngIf"],["formError",""],[1,"mb-lg-15","alert","alert-danger"],[1,"alert-text","font-weight-bold"],[1,"mb-10","bg-light-info","p-8","rounded"],[1,"text-info"],[1,"card","card-custom","bgi-no-repeat","gutter-b",2,"height","175px","background-color","#4ab58e","background-position","calc(100% + 1rem) bottom","background-size","25% auto","background-image","url(assets/media/svg/humans/custom-1.svg)"],[1,"card-body","d-flex","align-items-center"],[1,"py-2"],[1,"text-white","font-weight-bolder","mb-3"],[1,"text-white","font-size-lg"],["routerLink","/auth/login",1,"swal2-confirm","btn","font-weight-bold","btn-light-primary"],[1,"fv-row","mb-10"],[1,"form-label","fw-bolder","text-gray-900","fs-6"],["type","email","formControlName","email","placeholder","Email","name","email","autocomplete","off",1,"form-control","form-control-lg","form-control-solid",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"d-flex","flex-wrap","justify-content-center","pb-lg-0"],["type","submit","id","kt_password_reset_submit",1,"btn","btn-lg","btn-primary","fw-bolder","me-4"],[1,"indicator-label"],["routerLink","/auth/login","id","kt_login_password_reset_form_cancel_button",1,"btn","btn-lg","btn-light-primary","fw-bolder"],[1,"indicator-progress"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],["role","alert"]],template:function(t,o){1&t&&(s.TgZ(0,"form",0),s.NdJ("ngSubmit",function(){return o.submit()}),s.TgZ(1,"div",1),s.TgZ(2,"h1",2),s._uU(3,"Forgotten Password ?"),s.qZA(),s.TgZ(4,"div",3),s._uU(5," Enter your email to reset your password. "),s.qZA(),s.qZA(),s.YNc(6,et,4,0,"ng-container",4),s.YNc(7,rt,4,0,"ng-container",4),s.YNc(8,nt,12,0,"div",5),s.YNc(9,gt,8,20,"div",6),s.YNc(10,ct,8,3,"div",7),s.qZA(),s.YNc(11,pt,1,1,"ng-template",null,8,s.W1O)),2&t&&(s.Q6J("formGroup",o.forgotPasswordForm),s.xp6(6),s.Q6J("ngIf",o.errorState===o.errorStates.HasError),s.xp6(1),s.Q6J("ngIf",o.errorState===o.errorStates.NoError),s.xp6(1),s.Q6J("ngIf",o.errorState===o.errorStates.NoError),s.xp6(1),s.Q6J("ngIf",o.errorState!==o.errorStates.NoError),s.xp6(1),s.Q6J("ngIf",o.errorState!==o.errorStates.NoError))},directives:[n._Y,n.JL,n.sg,r.O5,i.yS,n.Fj,n.JJ,n.u,r.mk,r.tP],pipes:[r.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),t})()},{path:"logout",component:(()=>{class t{constructor(t){this.authService=t,this.authService.logout()}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(s.Y36(g.e))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-logout"]],decls:2,vars:0,template:function(t,o){1&t&&(s.TgZ(0,"p"),s._uU(1,"logout works!"),s.qZA())},styles:[""]}),t})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}]}];let bt=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.Bz.forChild(ht)],i.Bz]}),t})();var vt=e(7292);let xt=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.ez,vt.q,bt,n.u5,n.UX]]}),t})()}}]);