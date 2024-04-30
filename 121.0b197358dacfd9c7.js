"use strict";(self.webpackChunkelements_demo=self.webpackChunkelements_demo||[]).push([[121],{121:(Z,u,t)=>{t.r(u),t.d(u,{default:()=>i});var a=t(5195),d=t(2058),e=t(9212);const i=[{path:"",component:(()=>{class o{ngOnInit(){}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=e.Xpm({type:o,selectors:[["demo-api"]],standalone:!0,features:[e.jDz],decls:836,vars:0,consts:[["color","accent"],["href","https://github.com/systemjs/systemjs","target","_blank"],["routerLink","/examples/testing"]],template:function(n,g){1&n&&(e.TgZ(0,"h1"),e._uU(1,"API"),e.qZA(),e.TgZ(2,"section")(3,"h2"),e._uU(4,"LazyElementDirective"),e.qZA(),e.TgZ(5,"code",0),e._uU(6,"Directive"),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"p"),e._uU(9," A structural directive which lazy loads desired Angular element (or any other webcomponent) "),e.qZA(),e.TgZ(10,"mat-card")(11,"table")(12,"thead")(13,"th"),e._uU(14,"Property"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Description"),e.qZA()(),e.TgZ(17,"tbody")(18,"tr")(19,"td")(20,"pre"),e._uU(21,"selector"),e.qZA()(),e.TgZ(22,"td")(23,"p"),e._uU(24," The selector is "),e.TgZ(25,"code"),e._uU(26,"axLazyElement"),e.qZA(),e._uU(27," which should be used with "),e.TgZ(28,"code"),e._uU(29,"*"),e.qZA(),e._uU(30," as in "),e.TgZ(31,"code"),e._uU(32,"*axLazyElement"),e.qZA(),e._uU(33," because it is a structural directive. "),e.qZA()()(),e.TgZ(34,"tr")(35,"td")(36,"pre"),e._uU(37,"@Input('axLazyElement')\nurl: string;"),e.qZA()(),e.TgZ(38,"td")(39,"p"),e._uU(40," The url of the element bundle (or module). This is the main property which corresponds to the main directive selector. "),e.qZA(),e.TgZ(41,"ul")(42,"li"),e._uU(43," Inline string value - "),e.TgZ(44,"code"),e._uU(45,"<some-element *axLazyElement=\"'https://elements.com/some-element'\"></some-element>"),e.qZA()(),e.TgZ(46,"li"),e._uU(47," Component property reference - "),e.TgZ(48,"code"),e._uU(49,'<some-element *axLazyElement="url"></some-element>'),e.qZA()(),e.TgZ(50,"code",0),e._uU(51,"Pre-configurable"),e.qZA()()()(),e.TgZ(52,"tr")(53,"td")(54,"pre"),e._uU(55,"@Input('axLazyElementLoadingTemplate')\nloadingTemplateRef: TemplateRef<any>;"),e.qZA()(),e.TgZ(56,"td")(57,"p"),e._uU(58," Reference to Angular template which will be displayed before the element bundle (or module) was loaded. To show loader we can create following template "),e.TgZ(59,"code"),e._uU(60,"<ng-template #loading>Loading...</ng-template>"),e.qZA(),e._uU(61," and then we have to reference it "),e.TgZ(62,"code"),e._uU(63,'<some-element *axLazyElement="url; loadingTemplate: loading"></some-element>'),e.qZA()(),e.TgZ(64,"code",0),e._uU(65,"Optional"),e.qZA(),e._uU(66,"\xa0"),e.TgZ(67,"code",0),e._uU(68,"Default: undefined"),e.qZA()()(),e.TgZ(69,"tr")(70,"td")(71,"pre"),e._uU(72,"@Input('axLazyElementErrorTemplate')\nerrorTemplateRef: TemplateRef<any>;"),e.qZA()(),e.TgZ(73,"td")(74,"p"),e._uU(75," Reference to Angular template which will be displayed when the element bundle (or module) loading failed. To show error message we can create following template "),e.TgZ(76,"code"),e._uU(77,"<ng-template #error>Loading failed...</ng-template>"),e.qZA(),e._uU(78," and then we have to reference it "),e.TgZ(79,"code"),e._uU(80,'<some-element *axLazyElement="url; errorTemplate: error"></some-element>'),e.qZA()(),e.TgZ(81,"code",0),e._uU(82,"Optional"),e.qZA(),e._uU(83,"\xa0"),e.TgZ(84,"code",0),e._uU(85,"Default: undefined"),e.qZA()()(),e.TgZ(86,"tr")(87,"td")(88,"pre"),e._uU(89,"@Input('axLazyElementModule')\nisModule: boolean;"),e.qZA()(),e.TgZ(90,"td")(91,"p"),e._uU(92," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),e.TgZ(93,"code"),e._uU(94,"<script>"),e.qZA(),e._uU(95," tag which will get "),e.TgZ(96,"code"),e._uU(97,'type="module"'),e.qZA(),e._uU(98," in case this flag was set to true. The flag can be set using "),e.TgZ(99,"code"),e._uU(100,'<some-element *axLazyElement="url; module: true"></some-element>'),e.qZA()(),e.TgZ(101,"code",0),e._uU(102,"Optional"),e.qZA(),e._uU(103,"\xa0"),e.TgZ(104,"code",0),e._uU(105,"Default: false"),e.qZA(),e.TgZ(106,"code",0),e._uU(107,"Pre-configurable"),e.qZA()()(),e.TgZ(108,"tr")(109,"td")(110,"pre"),e._uU(111,"@Input('axLazyElementImportMap')\nimportMap: boolean;"),e.qZA()(),e.TgZ(112,"td")(113,"p"),e._uU(114," Flag that specifies if the element url should be resolved using import maps. If set to true an instance of "),e.TgZ(115,"a",1),e._uU(116,"SystemJS"),e.qZA(),e._uU(117," needs to exist in the application. "),e.TgZ(118,"code"),e._uU(119,"System.resolve"),e.qZA(),e._uU(120," is used in order to find the correct URL to load the bundle file containing the element definition. The flag can be set using "),e.TgZ(121,"code"),e._uU(122,'<some-element *axLazyElement="url; importMap: true"></some-element>'),e.qZA()(),e.TgZ(123,"code",0),e._uU(124,"Optional"),e.qZA(),e._uU(125,"\xa0"),e.TgZ(126,"code",0),e._uU(127,"Default: false"),e.qZA(),e.TgZ(128,"code",0),e._uU(129,"Pre-configurable"),e.qZA()()()()()(),e.TgZ(130,"mat-card")(131,"table")(132,"thead")(133,"th"),e._uU(134,"Function"),e.qZA(),e.TgZ(135,"th"),e._uU(136,"Description"),e.qZA()(),e.TgZ(137,"tbody")(138,"tr")(139,"td")(140,"pre"),e._uU(141,"destroyEmbeddedView()"),e.qZA()(),e.TgZ(142,"td")(143,"p"),e._uU(144," The "),e.TgZ(145,"code"),e._uU(146,"destroyEmbeddedView"),e.qZA(),e._uU(147," is a public method which can be called by parent component to destroy element's embedded view on demand. "),e.qZA()()()()()()(),e.TgZ(148,"section")(149,"h2"),e._uU(150,"LazyElementModule"),e.qZA(),e.TgZ(151,"code",0),e._uU(152,"Module"),e.qZA(),e._UZ(153,"br"),e.TgZ(154,"p"),e._uU(155," An Angular module which exports "),e.TgZ(156,"code"),e._uU(157,"*axLazyElement"),e.qZA(),e._uU(158," and "),e.TgZ(159,"code"),e._uU(160,"*axLazyElementDynamic"),e.qZA(),e._uU(161," directives so it has to be imported in other Angular modules which want to use these directives in the templates of their components. Module can be also pre-configured using "),e.TgZ(162,"code"),e._uU(163,"forRoot()"),e.qZA(),e._uU(164," and "),e.TgZ(165,"code"),e._uU(166,"forFeature()"),e.qZA(),e._uU(167," static methods. "),e.qZA(),e.TgZ(168,"mat-card")(169,"table")(170,"thead")(171,"th"),e._uU(172,"Function"),e.qZA(),e.TgZ(173,"th"),e._uU(174,"Description"),e.qZA()(),e.TgZ(175,"tbody")(176,"tr")(177,"td")(178,"pre"),e._uU(179,"forRoot(options: LazyElementModuleRootOptions)"),e.qZA()(),e.TgZ(180,"td")(181,"p"),e._uU(182," The "),e.TgZ(183,"code"),e._uU(184,"forRoot()"),e.qZA(),e._uU(185," static method which accepts options of "),e.TgZ(186,"code"),e._uU(187,"LazyElementModuleRootOptions"),e.qZA(),e._uU(188," type "),e._UZ(189,"br"),e.TgZ(190,"code",0),e._uU(191,"Optional"),e.qZA()()()(),e.TgZ(192,"tr")(193,"td")(194,"pre"),e._uU(195,"forFeature(options: LazyElementModuleOptions)"),e.qZA()(),e.TgZ(196,"td")(197,"p"),e._uU(198," The "),e.TgZ(199,"code"),e._uU(200,"forFeature()"),e.qZA(),e._uU(201," static method which accepts options of "),e.TgZ(202,"code"),e._uU(203,"LazyElementModuleOptions"),e.qZA(),e._uU(204," type "),e._UZ(205,"br"),e.TgZ(206,"code",0),e._uU(207,"Optional"),e.qZA()()()()()()()(),e.TgZ(208,"section")(209,"h2"),e._uU(210,"LazyElementModuleRootOptions"),e.qZA(),e.TgZ(211,"code",0),e._uU(212,"Interface"),e.qZA(),e._UZ(213,"br"),e.TgZ(214,"p"),e._uU(215," Type of an option object that can be passed to static "),e.TgZ(216,"code"),e._uU(217,"forRoot()"),e.qZA(),e._uU(218," method of "),e.TgZ(219,"code"),e._uU(220,"LazyElementModule"),e.qZA(),e._uU(221,". "),e.qZA(),e.TgZ(222,"mat-card")(223,"table")(224,"thead")(225,"th"),e._uU(226,"Property"),e.qZA(),e.TgZ(227,"th"),e._uU(228,"Description"),e.qZA()(),e.TgZ(229,"tbody")(230,"tr")(231,"td")(232,"pre"),e._uU(233,"elementConfigs: ElementConfig[]"),e.qZA()(),e.TgZ(234,"td")(235,"p"),e._uU(236," Optional array of "),e.TgZ(237,"code"),e._uU(238,"ElementConfig"),e.qZA(),e._uU(239,"... "),e._UZ(240,"br"),e.TgZ(241,"code",0),e._uU(242,"Optional"),e.qZA(),e._uU(243,"\xa0"),e.TgZ(244,"code",0),e._uU(245,"Default: []"),e.qZA()()()(),e.TgZ(246,"tr")(247,"td")(248,"pre"),e._uU(249,"rootOptions: LazyElementRootOptions"),e.qZA()(),e.TgZ(250,"td")(251,"p"),e._uU(252," Optional object of "),e.TgZ(253,"code"),e._uU(254,"LazyElementRootOptions"),e.qZA(),e._uU(255,"... "),e._UZ(256,"br"),e.TgZ(257,"code",0),e._uU(258,"Optional"),e.qZA(),e._uU(259,"\xa0"),e.TgZ(260,"code",0),e._uU(261,"Default: { }"),e.qZA()()()()()()()(),e.TgZ(262,"section")(263,"h2"),e._uU(264,"LazyElementRootOptions"),e.qZA(),e.TgZ(265,"code",0),e._uU(266,"Interface"),e.qZA(),e._UZ(267,"br"),e.TgZ(268,"p"),e._uU(269," Type of an option object that can be passed as the "),e.TgZ(270,"code"),e._uU(271,"rootOptions"),e.qZA(),e._uU(272," of the "),e.TgZ(273,"code"),e._uU(274,"LazyElementModuleRootOptions"),e.qZA(),e._uU(275," into the "),e.TgZ(276,"code"),e._uU(277,"forRoot()"),e.qZA(),e._uU(278," method of "),e.TgZ(279,"code"),e._uU(280,"LazyElementModule"),e.qZA(),e._uU(281,". These options will be applied to every element loaded using "),e.TgZ(282,"code"),e._uU(283,"*axLazyElement"),e.qZA(),e._uU(284," or "),e.TgZ(285,"code"),e._uU(286,"*axLazyElementDynamic"),e.qZA(),e._uU(287," directives. These options can be overridden by the element configuration in "),e.TgZ(288,"code"),e._uU(289,"forFeature()"),e.qZA(),e._uU(290," and lastly by the inline configuration of "),e.TgZ(291,"code"),e._uU(292,"*axLazyElement"),e.qZA(),e._uU(293," directive. "),e.qZA(),e.TgZ(294,"mat-card")(295,"table")(296,"thead")(297,"th"),e._uU(298,"Property"),e.qZA(),e.TgZ(299,"th"),e._uU(300,"Description"),e.qZA()(),e.TgZ(301,"tbody")(302,"tr")(303,"td")(304,"pre"),e._uU(305,"loadingComponent: Type<any>"),e.qZA()(),e.TgZ(306,"td")(307,"p"),e._uU(308," Component class to be displayed during element loading (similar to "),e.TgZ(309,"code"),e._uU(310,"loadingTemplate"),e.qZA(),e._uU(311," that can be specified inline in the template, eg "),e.TgZ(312,"code"),e._uU(313,'*axLazyElement="url; loadingTemplate: loading;"'),e.qZA(),e._uU(314,") "),e.qZA(),e.TgZ(315,"code",0),e._uU(316,"Optional"),e.qZA(),e._uU(317,"\xa0"),e.TgZ(318,"code",0),e._uU(319,"Default: undefined"),e.qZA()()(),e.TgZ(320,"tr")(321,"td")(322,"pre"),e._uU(323,"errorComponent: Type<any>"),e.qZA()(),e.TgZ(324,"td")(325,"p"),e._uU(326," Component class to be displayed after element loading failed (similar to "),e.TgZ(327,"code"),e._uU(328,"errorTemplate"),e.qZA(),e._uU(329," that can be specified inline in the template, eg "),e.TgZ(330,"code"),e._uU(331,'*axLazyElement="url; errorTemplate: error;"'),e.qZA(),e._uU(332,") "),e.qZA(),e.TgZ(333,"code",0),e._uU(334,"Optional"),e.qZA(),e._uU(335,"\xa0"),e.TgZ(336,"code",0),e._uU(337,"Default: undefined"),e.qZA()()(),e.TgZ(338,"tr")(339,"td")(340,"pre"),e._uU(341,"isModule: boolean"),e.qZA()(),e.TgZ(342,"td")(343,"p"),e._uU(344," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),e.TgZ(345,"code"),e._uU(346,"<script>"),e.qZA(),e._uU(347," tag which will get "),e.TgZ(348,"code"),e._uU(349,'type="module"'),e.qZA(),e._uU(350," in case this flag was set to true. "),e.qZA(),e.TgZ(351,"code",0),e._uU(352,"Optional"),e.qZA(),e._uU(353,"\xa0"),e.TgZ(354,"code",0),e._uU(355,"Default: undefined"),e.qZA()()(),e.TgZ(356,"tr")(357,"td")(358,"pre"),e._uU(359,"importMap: boolean"),e.qZA()(),e.TgZ(360,"td")(361,"p"),e._uU(362," Flag that specifies if the element url should be resolved using import maps. If set to true an instance of "),e.TgZ(363,"a",1),e._uU(364,"SystemJS"),e.qZA(),e._uU(365," needs to exist in the application. "),e.TgZ(366,"code"),e._uU(367,"System.resolve"),e.qZA(),e._uU(368," is used in order to find the correct URL to load the bundle file containing the element definition. "),e.qZA(),e.TgZ(369,"code",0),e._uU(370,"Optional"),e.qZA(),e._uU(371,"\xa0"),e.TgZ(372,"code",0),e._uU(373,"Default: undefined"),e.qZA()()(),e.TgZ(374,"tr")(375,"td")(376,"pre"),e._uU(377,"preload: boolean"),e.qZA()(),e.TgZ(378,"td")(379,"p"),e._uU(380," Flag that specifies if the all the modules should be preloaded "),e.qZA(),e.TgZ(381,"code",0),e._uU(382,"Optional"),e.qZA(),e._uU(383,"\xa0"),e.TgZ(384,"code",0),e._uU(385,"Default: undefined"),e.qZA()()(),e.TgZ(386,"tr")(387,"td")(388,"pre"),e._uU(389,"hooksConfig: HooksConfig"),e.qZA()(),e.TgZ(390,"td")(391,"p"),e._uU(392," Global hooks configuration for all elements. Any loaded element will run hooks configured here unless some of them were overriden in "),e.TgZ(393,"code"),e._uU(394,"ElementConfig"),e.qZA(),e._uU(395,". "),e.qZA(),e.TgZ(396,"code",0),e._uU(397,"Optional"),e.qZA(),e._uU(398,"\xa0"),e.TgZ(399,"code",0),e._uU(400,"Default: undefined"),e.qZA()()()()()()(),e.TgZ(401,"section")(402,"h2"),e._uU(403,"LazyElementModuleOptions"),e.qZA(),e.TgZ(404,"code",0),e._uU(405,"Interface"),e.qZA(),e._UZ(406,"br"),e.TgZ(407,"p"),e._uU(408," Type of an option object that can be passed to static "),e.TgZ(409,"code"),e._uU(410,"forFeature()"),e.qZA(),e._uU(411," method of "),e.TgZ(412,"code"),e._uU(413,"LazyElementModule"),e.qZA(),e._uU(414,". "),e.qZA(),e.TgZ(415,"mat-card")(416,"table")(417,"thead")(418,"th"),e._uU(419,"Property"),e.qZA(),e.TgZ(420,"th"),e._uU(421,"Description"),e.qZA()(),e.TgZ(422,"tbody")(423,"tr")(424,"td")(425,"pre"),e._uU(426,"elementConfigs: ElementConfig[]"),e.qZA()(),e.TgZ(427,"td")(428,"p"),e._uU(429," Optional array of "),e.TgZ(430,"code"),e._uU(431,"ElementConfig"),e.qZA(),e._uU(432,"... "),e._UZ(433,"br"),e.TgZ(434,"code",0),e._uU(435,"Optional"),e.qZA(),e._uU(436,"\xa0"),e.TgZ(437,"code",0),e._uU(438,"Default: []"),e.qZA()()()()()()()(),e.TgZ(439,"section")(440,"h2"),e._uU(441,"ElementConfig"),e.qZA(),e.TgZ(442,"code",0),e._uU(443,"Interface"),e.qZA(),e._UZ(444,"br"),e.TgZ(445,"p"),e._uU(446," The element config used to pre-configure "),e.TgZ(447,"code"),e._uU(448,"LazyElementModule"),e.qZA(),e._uU(449," so that we do not have to specify url (and other supported options) inline inside of the "),e.TgZ(450,"code"),e._uU(451,"*axLazyElement"),e.qZA(),e._uU(452," and "),e.TgZ(453,"code"),e._uU(454,"*axLazyElementDynamic"),e.qZA(),e._uU(455," directives. The configs are matched to particular elements by the tag. The elements are still loaded lazily even though they are preconfigured in the module during application startup... "),e.qZA(),e.TgZ(456,"mat-card")(457,"table")(458,"thead")(459,"th"),e._uU(460,"Property"),e.qZA(),e.TgZ(461,"th"),e._uU(462,"Description"),e.qZA()(),e.TgZ(463,"tbody")(464,"tr")(465,"td")(466,"pre"),e._uU(467,"tag: string"),e.qZA()(),e.TgZ(468,"td")(469,"p"),e._uU(470,"Tag of an element (eg: "),e.TgZ(471,"code"),e._uU(472,"some-element"),e.qZA(),e._uU(473,")"),e.qZA()()(),e.TgZ(474,"tr")(475,"td")(476,"pre"),e._uU(477,"url: string"),e.qZA()(),e.TgZ(478,"td")(479,"p"),e._uU(480," The url of an element bundle or ES module (eg: "),e.TgZ(481,"code"),e._uU(482,"https://my-org.com/elements/some-element.js"),e.qZA(),e._uU(483,") "),e.qZA()()(),e.TgZ(484,"tr")(485,"td")(486,"pre"),e._uU(487,"isModule: boolean"),e.qZA()(),e.TgZ(488,"td")(489,"p"),e._uU(490," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),e.TgZ(491,"code"),e._uU(492,"<script>"),e.qZA(),e._uU(493," tag which will get "),e.TgZ(494,"code"),e._uU(495,'type="module"'),e.qZA(),e._uU(496," in case this flag was set to true. "),e.qZA(),e.TgZ(497,"code",0),e._uU(498,"Optional"),e.qZA(),e._uU(499,"\xa0"),e.TgZ(500,"code",0),e._uU(501,"Default: undefined"),e.qZA()()(),e.TgZ(502,"tr")(503,"td")(504,"pre"),e._uU(505,"importMap: boolean"),e.qZA()(),e.TgZ(506,"td")(507,"p"),e._uU(508," Flag that specifies if the element url should be resolved using import maps. If set to true an instance of "),e.TgZ(509,"a",1),e._uU(510,"SystemJS"),e.qZA(),e._uU(511," needs to exist in the application. "),e.TgZ(512,"code"),e._uU(513,"System.resolve"),e.qZA(),e._uU(514," is used in order to find the correct URL to load the bundle file containing the element definition. "),e.qZA(),e.TgZ(515,"code",0),e._uU(516,"Optional"),e.qZA(),e._uU(517,"\xa0"),e.TgZ(518,"code",0),e._uU(519,"Default: undefined"),e.qZA()()(),e.TgZ(520,"tr")(521,"td")(522,"pre"),e._uU(523,"loadingComponent: Type<any>"),e.qZA()(),e.TgZ(524,"td")(525,"p"),e._uU(526," Component class to be displayed during element loading (similar to "),e.TgZ(527,"code"),e._uU(528,"loadingTemplate"),e.qZA(),e._uU(529," that can be specified inline in the template, eg "),e.TgZ(530,"code"),e._uU(531,'*axLazyElement="url; loadingTemplate: loading;"'),e.qZA(),e._uU(532,") "),e.qZA(),e.TgZ(533,"code",0),e._uU(534,"Optional"),e.qZA(),e._uU(535,"\xa0"),e.TgZ(536,"code",0),e._uU(537,"Default: undefined"),e.qZA()()(),e.TgZ(538,"tr")(539,"td")(540,"pre"),e._uU(541,"errorComponent: Type<any>"),e.qZA()(),e.TgZ(542,"td")(543,"p"),e._uU(544," Component class to be displayed after element loading failed (similar to "),e.TgZ(545,"code"),e._uU(546,"errorTemplate"),e.qZA(),e._uU(547," that can be specified inline in the template, eg "),e.TgZ(548,"code"),e._uU(549,'*axLazyElement="url; errorTemplate: error;"'),e.qZA(),e._uU(550,") "),e.qZA(),e.TgZ(551,"code",0),e._uU(552,"Optional"),e.qZA(),e._uU(553,"\xa0"),e.TgZ(554,"code",0),e._uU(555,"Default: undefined"),e.qZA()()(),e.TgZ(556,"tr")(557,"td")(558,"pre"),e._uU(559,"preload: boolean"),e.qZA()(),e.TgZ(560,"td")(561,"p"),e._uU(562,"Flag that specifies if the element is preloaded."),e.qZA(),e.TgZ(563,"code",0),e._uU(564,"Optional"),e.qZA(),e._uU(565,"\xa0"),e.TgZ(566,"code",0),e._uU(567,"Default: undefined"),e.qZA()()(),e.TgZ(568,"tr")(569,"td")(570,"pre"),e._uU(571,"hooks: HooksConfig"),e.qZA()(),e.TgZ(572,"td")(573,"p"),e._uU(574," Hooks configuration for the element. Any hook specified here will overwrite corresponding root hook for the element. See "),e.TgZ(575,"code"),e._uU(576,"HooksConfig"),e.qZA(),e._uU(577,". "),e.qZA(),e.TgZ(578,"code",0),e._uU(579,"Optional"),e.qZA(),e._uU(580,"\xa0"),e.TgZ(581,"code",0),e._uU(582,"Default: undefined"),e.qZA()()()()()()(),e.TgZ(583,"section")(584,"h2"),e._uU(585,"HooksConfig"),e.qZA(),e.TgZ(586,"code",0),e._uU(587,"Interface"),e.qZA(),e._UZ(588,"br"),e.TgZ(589,"p"),e._uU(590," Hooks for running custom logic as part of the element's lifecycle. See "),e.TgZ(591,"code"),e._uU(592,"ElementConfig"),e.qZA(),e._uU(593," and "),e.TgZ(594,"code"),e._uU(595,"LazyElementRootOptions"),e.qZA(),e._uU(596,". "),e.qZA(),e.TgZ(597,"mat-card")(598,"table")(599,"thead")(600,"th"),e._uU(601,"Property"),e.qZA(),e.TgZ(602,"th"),e._uU(603,"Description"),e.qZA()(),e.TgZ(604,"tbody")(605,"tr")(606,"td")(607,"pre"),e._uU(608,"beforeLoad: Hook"),e.qZA()(),e.TgZ(609,"td")(610,"p"),e._uU(611," This hook will run before the browser starts the element's download. If the provided hook returns a "),e.TgZ(612,"code"),e._uU(613,"Promise"),e.qZA(),e._uU(614," the element's download will be postponed until the Promise is resolved. "),e.qZA(),e.TgZ(615,"code",0),e._uU(616,"Optional"),e.qZA(),e._uU(617,"\xa0"),e.TgZ(618,"code",0),e._uU(619,"Default: undefined"),e.qZA()()(),e.TgZ(620,"tr")(621,"td")(622,"pre"),e._uU(623,"afterLoad: Hook"),e.qZA()(),e.TgZ(624,"td")(625,"p"),e._uU(626," This hook will run after the element's download has been completed. If the provided hook returns a "),e.TgZ(627,"code"),e._uU(628,"Promise"),e.qZA(),e._uU(629," the element's insertion into the corresponding Angular's view will be postponed until the Promise is resolved. "),e.qZA(),e.TgZ(630,"code",0),e._uU(631,"Optional"),e.qZA(),e._uU(632,"\xa0"),e.TgZ(633,"code",0),e._uU(634,"Default: undefined"),e.qZA()()()()()()(),e.TgZ(635,"section")(636,"h2"),e._uU(637,"Hook"),e.qZA(),e.TgZ(638,"code",0),e._uU(639,"Type"),e.qZA(),e._UZ(640,"br"),e.TgZ(641,"p"),e._uU(642,"Hook that can be run as part of "),e.TgZ(643,"code"),e._uU(644,"HooksConfig"),e.qZA(),e._uU(645,"."),e.qZA(),e.TgZ(646,"mat-card")(647,"table")(648,"thead")(649,"th"),e._uU(650,"Value"),e.qZA(),e.TgZ(651,"th"),e._uU(652,"Description"),e.qZA()(),e.TgZ(653,"tbody")(654,"tr")(655,"td")(656,"pre"),e._uU(657,"(tag: string) => Promise<void> \u2758 <void>"),e.qZA()(),e.TgZ(658,"td")(659,"p"),e._uU(660," Provided function will be called at the appropriate time in the element's lifecycle. If the function returns a "),e.TgZ(661,"code"),e._uU(662,"Promise"),e.qZA(),e._uU(663," the library will wait for its' resolution before proceeding. "),e.qZA()()()()()()(),e.TgZ(664,"section")(665,"h2"),e._uU(666,"LazyElementsLoaderService"),e.qZA(),e.TgZ(667,"code",0),e._uU(668,"Service"),e.qZA(),e._UZ(669,"br"),e.TgZ(670,"p"),e._uU(671," A service used for loading the Angular element (or any other webcomponent) "),e.qZA(),e.TgZ(672,"mat-card")(673,"table")(674,"thead")(675,"th"),e._uU(676,"Method"),e.qZA(),e.TgZ(677,"th"),e._uU(678,"Description"),e.qZA()(),e.TgZ(679,"tbody")(680,"tr")(681,"td")(682,"pre"),e._uU(683,"preload(tags? : string[]): void"),e.qZA()(),e.TgZ(684,"td")(685,"p"),e._uU(686," Preloads the specified tags which are preconfigured using "),e.TgZ(687,"code"),e._uU(688,"forRoot"),e.qZA(),e._uU(689," and "),e.TgZ(690,"code"),e._uU(691,"forFeature"),e.qZA(),e._uU(692,". If "),e.TgZ(693,"code"),e._uU(694,"tags"),e.qZA(),e._uU(695," is "),e.TgZ(696,"code"),e._uU(697,"undefined|null"),e.qZA(),e._uU(698," preload all the configured tags. "),e._UZ(699,"br"),e._uU(700," Parameters: "),e._UZ(701,"br"),e._uU(702," tags "),e.TgZ(703,"code",0),e._uU(704,"Optional"),e.qZA(),e._uU(705,"\xa0"),e.TgZ(706,"code",0),e._uU(707,"Default: undefined"),e.qZA(),e._UZ(708,"br"),e._uU(709," returns: "),e.TgZ(710,"code",0),e._uU(711,"void"),e.qZA()()()()()()()(),e.TgZ(712,"section")(713,"h2"),e._uU(714,"LAZY_ELEMENTS_REGISTRY"),e.qZA(),e.TgZ(715,"code",0),e._uU(716,"Token"),e.qZA(),e._UZ(717,"br"),e.TgZ(718,"p"),e._uU(719," A token used to override default lazy elements registry which is used to prevent multiple downloads of the same element Javascript bundle... "),e.qZA(),e.TgZ(720,"mat-card")(721,"table")(722,"thead")(723,"th"),e._uU(724,"Value"),e.qZA(),e.TgZ(725,"th"),e._uU(726,"Description"),e.qZA()(),e.TgZ(727,"tbody")(728,"tr")(729,"td")(730,"pre"),e._uU(731,"{\n  provide: LAZY_ELEMENTS_REGISTRY,\n  useClass: YourRegistryImplementation\n}"),e.qZA()(),e.TgZ(732,"td")(733,"p"),e._uU(734," Overrides default lazy elements registry implementation which can be useful when using library in the multiple apps (or elements) on a single page to prevent multiple downloads of the same element Javascript bundle. The new implementation has to implement "),e.TgZ(735,"code"),e._uU(736,"LazyElementsRegistry"),e.qZA()()()()()()()(),e.TgZ(737,"section")(738,"h2"),e._uU(739,"LazyElementsRegistry"),e.qZA(),e.TgZ(740,"code",0),e._uU(741,"Interface"),e.qZA(),e._UZ(742,"br"),e.TgZ(743,"p"),e._uU(744," An interface which has to be implemented by custom lazy elements registry. The default lazy element registry used by the library out of the box is "),e.TgZ(745,"code"),e._uU(746,"Map<string, Promise<void>"),e.qZA()(),e.TgZ(747,"mat-card")(748,"table")(749,"thead")(750,"th"),e._uU(751,"Property"),e.qZA(),e.TgZ(752,"th"),e._uU(753,"Description"),e.qZA()(),e.TgZ(754,"tbody")(755,"tr")(756,"td")(757,"pre"),e._uU(758,"get: (url: string) => Promise<void>"),e.qZA()(),e.TgZ(759,"td")(760,"p"),e._uU(761," Retrieve loading state ("),e.TgZ(762,"code"),e._uU(763,"Promise"),e.qZA(),e._uU(764,") of an element bundle identified by the "),e.TgZ(765,"code"),e._uU(766,"url"),e.qZA()()()(),e.TgZ(767,"tr")(768,"td")(769,"pre"),e._uU(770,"set: (url: string, notifier: Promise<void>) => void"),e.qZA()(),e.TgZ(771,"td")(772,"p"),e._uU(773," Store loading state ("),e.TgZ(774,"code"),e._uU(775,"Promise"),e.qZA(),e._uU(776,") of an element bundle identified by the "),e.TgZ(777,"code"),e._uU(778,"url"),e.qZA()()()(),e.TgZ(779,"tr")(780,"td")(781,"pre"),e._uU(782,"has: (url: string) => boolean"),e.qZA()(),e.TgZ(783,"td")(784,"p"),e._uU(785," Check if registry already contains loading state ("),e.TgZ(786,"code"),e._uU(787,"Promise"),e.qZA(),e._uU(788,") of an element bundle identified by the "),e.TgZ(789,"code"),e._uU(790,"url"),e.qZA()()()()()()()(),e.TgZ(791,"section")(792,"h2"),e._uU(793,"LazyElementTestingModule"),e.qZA(),e.TgZ(794,"code",0),e._uU(795,"Module"),e.qZA(),e.TgZ(796,"code"),e._uU(797,"@angular-extensions/elements/testing"),e.qZA(),e._UZ(798,"br"),e.TgZ(799,"p"),e._uU(800," The testing module is used in Angular unit-tests to help mock lazy-loaded elements with mock components provided by the test. Check out how to use it in the "),e.TgZ(801,"a",2),e._uU(802,"testing example"),e.qZA(),e._uU(803,". "),e.qZA(),e.TgZ(804,"mat-card")(805,"table")(806,"thead")(807,"th"),e._uU(808,"Declarable"),e.qZA(),e.TgZ(809,"th"),e._uU(810,"Description"),e.qZA()(),e.TgZ(811,"tbody")(812,"tr")(813,"td")(814,"pre"),e._uU(815,"LazyElementTestingDirective "),e.TgZ(816,"code"),e._uU(817,"*axLazyElement"),e.qZA()()(),e.TgZ(818,"td")(819,"p"),e._uU(820," Overrides default behavior of "),e.TgZ(821,"code"),e._uU(822,"*axLazyElement"),e.qZA(),e._uU(823," by displaying element immediately without trying to lazy load it, display loading or error... "),e.qZA()()(),e.TgZ(824,"tr")(825,"td")(826,"pre"),e._uU(827,"LazyElementDynamicTestingDirective "),e.TgZ(828,"code"),e._uU(829,"*axLazyElementDynamic"),e.qZA()()(),e.TgZ(830,"td")(831,"p"),e._uU(832," Overrides default behavior of "),e.TgZ(833,"code"),e._uU(834,"*axLazyElementDynamic"),e.qZA(),e._uU(835," by displaying element immediately without trying to lazy load it, display loading or error... "),e.qZA()()()()()()())},dependencies:[d.rH,a.QW,a.a8],styles:["h2[_ngcontent-%COMP%]{display:inline-block;font-weight:700;margin:0 10px 10px 0}mat-card[_ngcontent-%COMP%]{padding:0;margin-bottom:80px;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:15px 20px}table[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{opacity:.8}"]})}return o})()}]}}]);