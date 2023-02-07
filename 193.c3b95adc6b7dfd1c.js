"use strict";(self.webpackChunkelements_demo=self.webpackChunkelements_demo||[]).push([[193],{1193:(w,l,n)=>{n.r(l),n.d(l,{HowItWorksModule:()=>Z});var r=n(858),s=n(7866),u=n(5465),e=n(4650);let d=(()=>{class t{constructor(){this.codeExampleComponent=g,this.codeExampleComponentBinding=m,this.codeExampleComponentLazy=c}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["demo-how-it-works"]],decls:175,vars:3,consts:[[1,"wrapper"],["routerLink","../../use-cases"],["href","https://angular.io/guide/elements","target","_blank"],["href","https://github.com/manfredsteyer/ngx-build-plus#readme","target","_blank"],[1,"large"],[3,"highlight"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"How it works"),e.qZA(),e.TgZ(3,"p"),e._uU(4," The "),e.TgZ(5,"code"),e._uU(6,"*axLazyElement"),e.qZA(),e._uU(7," directive is used to load any Angular element (or any other web component) and display it in the standard Angular component template. "),e.qZA(),e.TgZ(8,"blockquote"),e._uU(9," In case you are wondering about when this approach might be useful please check out "),e.TgZ(10,"a",1),e._uU(11,"use cases"),e.qZA(),e._uU(12," page to learn more... "),e.qZA(),e.TgZ(13,"h2"),e._uU(14,"Angular elements"),e.qZA(),e.TgZ(15,"blockquote"),e._uU(16," Angular elements are Angular components packaged as custom elements (also called Web Components), a web standard for defining new HTML elements in a framework-agnostic way - "),e.TgZ(17,"a",2),e._uU(18,"Official Angular Docs"),e.qZA()(),e.TgZ(19,"p"),e._uU(20," As written in the official Angular documentation, Angular elements "),e.TgZ(21,"code"),e._uU(22,"@angular/elements"),e.qZA(),e._uU(23," provide us with a way to convert standard Angular components to custom elements (web components) which then can be consumed as standard built-in HTML elements from the point of view of the consumer application. "),e.qZA(),e.TgZ(24,"p"),e._uU(25," The elements can be built with the help of Angular CLI and "),e.TgZ(26,"code"),e._uU(27,"ngx-build-plus"),e.qZA(),e.TgZ(28,"a",3),e._uU(29,"library"),e.qZA(),e._uU(30," into single a bundle. Having a single bundle file makes it very convenient to consume custom Angular element in the consumer app! "),e.qZA(),e.TgZ(31,"h2"),e._uU(32," Standard way of using Angular elements (and other web components) in Angular applications "),e.qZA(),e.TgZ(33,"p"),e._uU(34," Let's say we have created an Angular element, for example "),e.TgZ(35,"code"),e._uU(36,"<your-org-customer-editor></your-org-customer-editor>"),e.qZA(),e._uU(37," and built and packaged it into a single bundle file "),e.TgZ(38,"code"),e._uU(39,"your-org-customer-editor.js"),e.qZA(),e._uU(40,". "),e.qZA(),e.TgZ(41,"p"),e._uU(42," Usually we would have to include "),e.TgZ(43,"code"),e._uU(44,'<script src="path/to/your-org-customer-editor.js"><\/script>'),e.qZA(),e._uU(45," in our "),e.TgZ(46,"code"),e._uU(47,"index.html"),e.qZA(),e._uU(48," so that we can be sure that the element loads before it was used in the template of some component of our consumer app. "),e.qZA(),e.TgZ(49,"p"),e._uU(50," This approach has "),e.TgZ(51,"strong"),e._uU(52,"one main disadvantage"),e.qZA(),e._uU(53,', which is that it increases initial javascript payload that needs to be downloaded, parsed and executed... Initial payload hurts even more if we\'re dealing with "sub-application" style Angular elements which can be considerably more complex compared to single components like button or card. '),e.qZA(),e.TgZ(54,"p"),e._uU(55," Initial loading time can make huge impact on overall success of many kind of applications and represents the main reason for existence of this library which enables us to "),e.TgZ(56,"strong"),e._uU(57,"lazy load Angular elements"),e.qZA(),e._uU(58," with ease and highest possible granularity! "),e.qZA(),e.TgZ(59,"h2"),e._uU(60," Much Better Way of using Angular elements (and other web components) "),e.qZA(),e.TgZ(61,"p"),e._uU(62," Wouldn't it be better if we could use our elements in the same way as any other HTML element while postpone their loading from some backend until the very last moment possible? "),e.qZA(),e.TgZ(63,"p"),e._uU(64," More so, wouldn't it be great if this happened automatically without the need to manually trigger some kind of loading of the necessary bundle? "),e.qZA(),e.TgZ(65,"blockquote",4),e._uU(66," What if all these things could be achieved by using simple structural directive "),e.TgZ(67,"code"),e._uU(68,"*axLazyElement"),e.qZA(),e._uU(69,"? "),e.qZA(),e._UZ(70,"pre",5),e.TgZ(71,"p"),e._uU(72," The "),e.TgZ(73,"code"),e._uU(74,"*axLazyElement"),e.qZA(),e._uU(75," is a structural directive which means it will "),e.TgZ(76,"strong"),e._uU(77,"remove"),e.qZA(),e._uU(78," the element on which it was added from the DOM by default. This is very useful because we DO NOT want to render element before it was actually loaded from the backend! The directive will then trigger loading of the bundle and the render element once the loading was finished. "),e.qZA(),e.TgZ(79,"h2"),e._uU(80,"Using standard Angular template binding"),e.qZA(),e.TgZ(81,"p"),e._uU(82," Another great thing about using this approach is that we can use standard Angular template binding syntax like "),e.TgZ(83,"code"),e._uU(84,'[customerId]="customerId"'),e.qZA(),e._uU(85," and "),e.TgZ(86,"code"),e._uU(87,'(customerDataChange)="handleCustomerDataChange($event)"'),e.qZA(),e._uU(88," to pass in data and react to events. It works just as expected even though the element is lazy loaded! "),e.qZA(),e._UZ(89,"pre",5),e.TgZ(90,"h2"),e._uU(91,"Seamless lazy loading"),e.qZA(),e.TgZ(92,"p"),e._uU(93," As mentioned above, our goal is to lazy load element to improve application startup time by decreasing size of javascript which has to be downloaded initially. "),e.qZA(),e.TgZ(94,"p"),e._uU(95," Lazy loading with "),e.TgZ(96,"code"),e._uU(97,"*axLazyElements"),e.qZA(),e._uU(98," happens automatically whenever the element is rendered in the template of some Angular component. Consider the following example... "),e.qZA(),e._UZ(99,"pre",5),e.TgZ(100,"p"),e._uU(101," We're using "),e.TgZ(102,"code"),e._uU(103,'<your-org-customer-editor *axLazyElement="url"></your-org-customer-editor>'),e.qZA(),e._uU(104," in the components template but it will not trigger element loading just yet. As we may notice, the element is wrapped in the "),e.TgZ(105,"code"),e._uU(106,"<ng-container></ng-container>"),e.qZA(),e._uU(107," which uses "),e.TgZ(108,"code"),e._uU(109,"*ngIf"),e.qZA(),e._uU(110," directive so our element is not rendered until we click the button... "),e.qZA(),e.TgZ(111,"blockquote",4),e._uU(112," The loading of the element will be triggered only after we have clicked the button and rendered it in the component template "),e.qZA(),e.TgZ(113,"p"),e._uU(114," To summarize, the element loading will be postponed until it was rendered in the template of some component. This can happen in following cases... "),e.qZA(),e.TgZ(115,"ul")(116,"li"),e._uU(117,"Angular component uses element in its template"),e.qZA(),e.TgZ(118,"li"),e._uU(119," Angular component uses element in its template conditionally ("),e.TgZ(120,"code"),e._uU(121,"*ngIf"),e.qZA(),e._uU(122,", "),e.TgZ(123,"code"),e._uU(124,"*ngFor"),e.qZA(),e._uU(125,", ...) and the condition was fulfilled "),e.qZA(),e.TgZ(126,"li"),e._uU(127," User navigated to an Angular component which uses element in its template (can be both eagerly or lazily loaded routes) "),e.qZA()(),e.TgZ(128,"blockquote"),e._uU(129," This also means that if we used element in a component that is displayed straight from application startup, we would also trigger loading of the element bundle immediately so it will "),e.TgZ(130,"strong"),e._uU(131,"NOT be lazy"),e.qZA(),e._uU(132," in that case "),e.qZA(),e.TgZ(133,"h2"),e._uU(134,"In-depth overview of loading mechanism"),e.qZA(),e.TgZ(135,"p"),e._uU(136," Loading starts only once we want to display an Angular component which renders given element in its template. After that the loading goes through the following process "),e.qZA(),e.TgZ(137,"ol")(138,"li"),e._uU(139," Check if we provided reference to "),e.TgZ(140,"code"),e._uU(141,"loading"),e.qZA(),e._uU(142," template ("),e.TgZ(143,"code"),e._uU(144,"<ng-template #loading>Loading ...</ng-template>"),e.qZA(),e._uU(145,") and display it in place of the element... "),e.qZA(),e.TgZ(146,"li"),e._uU(147,"Check if element was already loaded in the past"),e.qZA(),e.TgZ(148,"li"),e._uU(149,"\u2705 If yes, remove loading template and render given element instead"),e.qZA(),e.TgZ(150,"li"),e._uU(151," \u2b07\ufe0f If no, create a "),e.TgZ(152,"code"),e._uU(153,"<script>"),e.qZA(),e._uU(154," tag with "),e.TgZ(155,"code"),e._uU(156,"src = url"),e.qZA(),e._uU(157," and handler for the "),e.TgZ(158,"code"),e._uU(159,"onload"),e.qZA(),e._uU(160," and "),e.TgZ(161,"code"),e._uU(162,"onerror"),e.qZA(),e._uU(163," events to notify directive when element was loaded or failed to load "),e.qZA(),e.TgZ(164,"li"),e._uU(165,"Append "),e.TgZ(166,"code"),e._uU(167,"<script>"),e.qZA(),e._uU(168," to the document body"),e.qZA(),e.TgZ(169,"li"),e._uU(170,"Once loaded, notify directive about the outcome"),e.qZA(),e.TgZ(171,"li"),e._uU(172," \u2705 Remove loading template and render given element when loading was successful "),e.qZA(),e.TgZ(173,"li"),e._uU(174," \u274c Remove loading template and render error template (if provided) when loading was not successful "),e.qZA()()()),2&o&&(e.xp6(70),e.Q6J("highlight",i.codeExampleComponent),e.xp6(19),e.Q6J("highlight",i.codeExampleComponentBinding),e.xp6(10),e.Q6J("highlight",i.codeExampleComponentLazy))},dependencies:[r.rH,s.y$],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]}),t})();const g="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'your-org-feature',\n  template: `\n    <your-org-customer-editor *axLazyElement=\"url\"></your-org-customer-editor>\n  `\n})\nexport class FeatureComponent {\n  url = 'path/to/your-org-customer-editor.js';\n}\n",c="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'your-org-feature',\n  template: `\n    <ng-container *ngIf=\"showEditor\">\n      <your-org-customer-editor *axLazyElement=\"url\"></your-org-customer-editor>\n    </ng-container>\n    <button (click)=\"toggleShowEditor()\">Edit customer</button>\n  `\n})\nexport class FeatureComponent {\n  showEditor = false;\n\n  url = 'path/to/your-org-customer-editor.js';\n\n  toggleShowEditor() {\n    this.showEditor = !showEditor;\n  }\n}\n",m="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'your-org-feature',\n  template: `\n    <your-org-customer-editor *axLazyElement=\"url\"\n      [customerId]=\"customerId\"\n      (customerDataChange)=\"handleCustomerDataChange($event)\">\n    </your-org-customer-editor>\n  `\n})\nexport class FeatureComponent {\n  url = 'path/to/your-org-customer-editor.js';\n\n  customerId = 'C-123-456';\n\n  handleCustomerDataChange(change) {\n    // handle change ...\n  }\n}\n",h=[{path:"",component:d}];let p=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz.forChild(h),r.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz,s._l,u.m,p]}),t})()}}]);