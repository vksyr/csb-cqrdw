(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{132:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(23),l=n.n(i),s=n(75),o=n(16),r=n(45),u=n(85),j=n.n(u),b=n(86),d=n.n(b),f=n(84),O=n.n(f),p=n(76),h=n(40),v=n(190),x=n(39),m=n(13),g=n(41),S=(n(118),n(2));function C(e){var t="data/",n=Object(a.useState)([]),i=Object(o.a)(n,2),l=i[0],u=i[1],b=Object(a.useState)(null),f=Object(o.a)(b,2),C=f[0],D=f[1],_=Object(a.useState)(null),y=Object(o.a)(_,2),A=y[0],k=y[1],I=Object(a.useState)(null),w=Object(o.a)(I,2),L=w[0],R=w[1],M=Object(a.useState)(null),P=Object(o.a)(M,2),E=P[0],G=P[1],T=Object(a.useState)([]),H=Object(o.a)(T,2),N=H[0],V=H[1],F=Object(a.useState)([]),K=Object(o.a)(F,2),W=K[0],q=K[1],z=Object(a.useState)([]),J=Object(o.a)(z,2),Y=J[0],B=J[1],U=[{label:"Low",value:"3"},{label:"Medium",value:"2"},{label:"High",value:"1"},{label:"Critical",value:"0"}],Q=Object(a.useState)([{label:"Low",value:"3"},{label:"Medium",value:"2"},{label:"High",value:"1"},{label:"Critical",value:"0"}]),X=Object(o.a)(Q,2),Z=X[0],$=X[1],ee=Object(a.useState)({WorkLog:[]}),te=Object(o.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(!1),ie=Object(o.a)(ce,2),le=ie[0],se=ie[1],oe=Object(a.useState)(!1),re=Object(o.a)(oe,2),ue=re[0],je=re[1],be=Object(a.useState)("disabled"),de=Object(o.a)(be,2),fe=de[0],Oe=de[1],pe=Object(a.useState)("disabled"),he=Object(o.a)(pe,2),ve=he[0],xe=he[1],me=Object(a.useState)("disabled"),ge=Object(o.a)(me,2),Se=ge[0],Ce=ge[1],De=Object(a.useState)("Submit_Date"),_e=Object(o.a)(De,2),ye=_e[0],Ae=_e[1],ke=Object(a.useState)(90),Ie=Object(o.a)(ke,2),we=Ie[0],Le=Ie[1],Re=Object(a.useState)(180),Me=Object(o.a)(Re,2),Pe=Me[0],Ee=Me[1],Ge=Object(a.useState)(240),Te=Object(o.a)(Ge,2),He=Te[0],Ne=Te[1],Ve=[{label:"Submit Date",value:"Submit_Date"},{label:"Last Modified",value:"Last_Modified_Date"},{label:"Last Resolved",value:"Last_Resolved_Date"},{label:"Reported Date",value:"Reported_Date"},{label:"Responded Date",value:"Responded_Date"},{label:"Closed Date",value:"Closed_Date"},{label:"Event Date",value:"Event_Date"},{label:"Required Resolution",value:"Required_Resolution_DateTime"},{label:"Estimated Resolution",value:"Estimated_Resolution_Date"},{label:"Acknowledgement Date",value:"Acknowledgment_Start_Date"},{label:"Resolution Start Date",value:"Resolution_Start_Date"},{label:"Last SLA Hold Date",value:"Last_SLA_Hold_Date"},{label:"VIP Assignment Date",value:"VIPAssignmentDateTime"},{label:"VIP Dispatch Date",value:"VIPDispatchDateTime"}],Fe=Object(a.useState)([{name:"Age_In_Minutes",title:"Age_In_Minutes"},{name:"Incident_Number",title:"Incident Number"},{name:"PriorityCode",title:"Priority"},{name:"Description",title:"Summary"},{name:"Submit_Date",title:"Submitted"},{name:"Last_Modified_Date",title:"Modified"},{name:"Assigned_Company_Group",title:"Company/Group"},{name:"Assignee",title:"Assignee"},{name:"ServiceCI",title:"ServiceCI"},{name:"StatusCode",title:"Status"},{name:"LastLog",title:"Last Log Entry"}]),Ke=Object(o.a)(Fe,2),We=Ke[0],qe=Ke[1],ze=Object(a.useState)([]),Je=Object(o.a)(ze,2),Ye=Je[0],Be=Je[1];c.a.useEffect((function(){C&&et(),C&&nt(),2===Z.length&&1===Z.filter((function(e){return"High"===e.label})).length&&1===Z.filter((function(e){return"Critical"===e.label})).length||se(!1)}),[C,L,N,Z]),c.a.useEffect((function(){tt()}),[C,L,Z]),c.a.useEffect((function(){$e()}),[]),c.a.useEffect((function(){qe(We.filter((function(e){return"Age"!==e.title}))),ue?qe([{getCellValue:Ue,title:"Age"}].concat(We)):se(!1)}),[ue]),c.a.useEffect((function(){"disabled"!==Se||"Submit_Date"===ye&&90===we&&180===Pe&&240===He||se(!1)}),[Se]),c.a.useEffect((function(){le?($([{label:"High",value:"2"},{label:"Critical",value:"3"}]),Ae("Event_Date"),Le(90),Ee(180),Ne(240),je(!0),We.filter((function(e){return"Submitted"===e.title})).forEach((function(e){e.title="4-HR Start Date",e.name=ye})),D("All"),k("All"),R("All")):We.filter((function(e){return"4-HR Start Date"===e.title})).forEach((function(e){e.title="Submitted",e.name="Submit_date"}))}),[le]);var Ue=function(e){var t=p.a[500];-1!==e.Age_KPI.indexOf("green.gif")?t=h.a[500]:-1!==e.Age_KPI.indexOf("yellow.gif")?t=v.a[500]:-1!==e.Age_KPI.indexOf("red.gif")&&(t=x.a[500]);var n="";try{var a=parseInt(e.Age_In_Minutes),c=parseInt(we),i=parseInt(Pe),l=parseInt(He);n=a>l?"Exceeded!":a>i?"-"+l-a:a<=c?"-"+c-a:"-"+i-a}catch(s){}return Object(S.jsxs)("div",{children:[Object(S.jsx)(O.a,{sx:{color:t}})," ",n]})},Qe=function(){return"StartDateField%3D".concat(ye,";DropOffField%3D").concat("Required_Resolution_DateTime",";GreenMaxAge%3D").concat(we,";YellowMaxAge%3D").concat(Pe,";RedMaxAge%3D").concat(He)},Xe=function(e){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).format(e.value)},Ze=function(e){return Object(S.jsx)(m.b,Object(s.a)({formatterComponent:Xe},e))},$e=function(){fetch("".concat(t,"companies.json?opCode=GetCompanies"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){u([{label:"All",value:"All"}].concat(e.data))}))},et=function(){fetch("".concat(t,"groups.json?opCode=GetGroups&Company=").concat(C),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){q([{label:"All",value:"All"}].concat(e.data))}))},tt=function(){le?(B([{label:"CyberSecurity",value:"CyberSecurity"}]),V([{label:"CyberSecurity",value:"CyberSecurity"}])):fetch("".concat(t,"services.json?opCode=GetServices&Company=").concat(C,"&Org=").concat(E,"&GroupID=").concat(L,"&Priorities=").concat(U.map((function(e){return e.value})),"&Filter=&KpiParams=").concat(Qe()),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){B(e.data)}))},nt=function(){fetch("".concat(t,"incidents.json?opCode=GetIncidents&Company=").concat(C,"&Org=").concat(E,"&GroupID=").concat(L,"&Priorities=").concat(U.map((function(e){return e.value})),"&Services=").concat(Y.map((function(e){return e.value})),"&Filter=&KpiParams=").concat(Qe()),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){Be(e.data)}))},at=function(){ue&&(Ce("enabled"===Se?"disabled":"enabled"),Oe("enabled"===Se?"active":"selected"))};return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{class:"filter-container",children:Object(S.jsxs)("form",{children:[Object(S.jsxs)("label",{class:"label-nowrap",children:["Company:",Object(S.jsx)(r.a,{onChange:function(e){R(null),V([]),D(e.value)},options:l,value:l.filter((function(e){return e.value===C}))})]}),Object(S.jsxs)("label",{children:["Group:",Object(S.jsx)(r.a,{value:W.filter((function(e){return e.value===A})),onChange:function(e){k(e.value),-1!==e.value.indexOf("|")&&(G(e.value.split("|")[0]),R(e.value.split("|")[1]))},options:W,getOptionLabel:function(e){return e.label},getOptionValue:function(e){return e.value}})]}),Object(S.jsxs)("label",{children:["Services:",Object(S.jsx)(r.a,{value:Y.filter((function(e){return N.some((function(t){return e.value===t.value}))})),onChange:function(e){se(!1),V((function(t){return e}))},options:Y,isMulti:!0})]}),Object(S.jsxs)("label",{children:["Priorities:",Object(S.jsx)(r.a,{value:U.filter((function(e){return Z.some((function(t){return e.value===t.value}))})),onChange:function(e){$((function(t){return e}))},options:U,class:"form-check-input",isMulti:!0})]}),Object(S.jsxs)("div",{style:{paddingTop:10},children:[Object(S.jsx)("label",{children:Object(S.jsxs)("div",{class:"form-check form-switch",children:[Object(S.jsx)("input",{class:"form-check-input",type:"checkbox",checked:le,onChange:function(){return se(!le)}}),Object(S.jsx)("label",{class:"form-check-label",for:"flexSwitchCheckDefault",children:"Show 4HR-Containment View"})]})}),Object(S.jsx)("label",{children:Object(S.jsxs)("div",{class:"form-check form-switch",children:[Object(S.jsx)("input",{class:"form-check-input",type:"checkbox",checked:ue,onChange:function(e){je(!ue),ue?(xe("disabled"),Oe("disabled"),Ce("disabled")):(xe("primary"),Oe("active"))}}),Object(S.jsxs)("label",{onClick:at,class:"form-check-label age-kpi-btn-"+fe,for:"flexSwitchCheckDefault",children:["Show age indicators",Object(S.jsx)(j.a,{color:ve}),Object(S.jsxs)("div",{onClick:function(e){return e.stopPropagation()},class:"age-kpi-options-"+Se,children:[Object(S.jsx)("span",{class:"close-icon",onClick:at,children:Object(S.jsx)(d.a,{fontSize:"small"})}),Object(S.jsxs)("div",{class:"label-nowrap",children:["Age field:\xa0",Object(S.jsx)("label",{children:Object(S.jsx)(r.a,{onChange:function(e){return Ae(e.value)},options:Ve,value:Ve.filter((function(e){return e.value===ye}))})}),Object(S.jsx)("br",{}),"Green Max Age:\xa0",Object(S.jsx)("label",{children:Object(S.jsx)("input",{value:we,onChange:function(e){return Le(e.value)},type:"text",class:"form-control"})}),Object(S.jsx)("br",{}),"Yellow Max Age:\xa0",Object(S.jsx)("label",{children:Object(S.jsx)("input",{value:Pe,onChange:function(e){return Ee(e.value)},type:"text",class:"form-control"})}),Object(S.jsx)("br",{}),"Red Max Age:\xa0",Object(S.jsx)("label",{children:Object(S.jsx)("input",{value:He,onChange:function(e){return Ne(e.value)},type:"text",class:"form-control"})})]}),Object(S.jsx)("span",{class:"footer",children:"* in minutes"})]})]})]})})]})]})}),Object(S.jsx)("div",{class:"grid",children:Object(S.jsxs)(g.a,{rows:Ye,columns:We,children:[Object(S.jsx)(m.l,{defaultCurrentPage:0,pageSize:20}),Object(S.jsx)(m.i,{}),Object(S.jsx)(m.p,{defaultSorting:[{columnName:"Name",direction:"asc"}]}),Object(S.jsx)(m.j,{}),Object(S.jsx)(m.m,{}),Object(S.jsx)(m.o,{defaultValue:""}),Object(S.jsx)(m.h,{}),Object(S.jsx)(Ze,{for:Ve.map((function(e){return e.value}))}),Object(S.jsx)(g.c,{}),Object(S.jsx)(g.d,{defaultHiddenColumnNames:["Age_In_Minutes"]}),Object(S.jsx)(g.e,{showSortingControls:!0}),Object(S.jsx)(g.b,{}),Object(S.jsx)(g.f,{contentComponent:function(e){var n=e.row;return fetch("".concat(t,"incident.json?opCode=GetIncident&IncidentNumber=").concat(n.Incident_Number),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){ae(e.data)})),Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{class:"detail-field",children:[Object(S.jsx)("strong",{children:"Summary:"}),Object(S.jsx)("br",{}),ne.Description]}),Object(S.jsxs)("div",{class:"detail-field",children:[Object(S.jsx)("strong",{children:"Priority:"}),Object(S.jsx)("br",{}),ne.PriorityCode]}),Object(S.jsxs)("div",{class:"detail-field",children:[Object(S.jsx)("strong",{children:"Notes:"}),Object(S.jsx)("br",{}),ne.Detailed_Decription]}),Object(S.jsxs)("div",{class:"detail-field",children:[Object(S.jsx)("strong",{children:"Customer/Office:"}),Object(S.jsx)("br",{}),ne.First_Name," ",ne.Last_Name," /"," ",ne.Department]}),Object(S.jsxs)("div",{class:"detail-field",children:[Object(S.jsx)("strong",{children:"Status:"}),Object(S.jsx)("br",{}),ne.StatusCode]}),Object(S.jsxs)("div",{class:"detail-field",children:[Object(S.jsx)("strong",{children:"Assigned Group:"}),Object(S.jsx)("br",{}),ne.Assigned_Group]}),Object(S.jsxs)("div",{class:"detail-field",children:[Object(S.jsx)("strong",{children:"Log Entries:"}),Object(S.jsx)("br",{}),ne.WorkLog.map((function(e,t){return Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{class:"worklog-header",children:[Xe(e.Work_Log_Submit_Date)," /"," ",e.Work_Log_Submitter]}),Object(S.jsx)("div",{class:"worklog-body",children:e.Detailed_Description})]})}))]})]})}})]})})]})}n(132);var D=document.getElementById("root");l.a.render(Object(S.jsxs)("div",{children:[Object(S.jsx)("nav",{class:"navbar navbar-default",children:Object(S.jsx)("div",{class:"container-fluid",children:Object(S.jsx)("a",{class:"navbar-brand",href:"#",children:"Incident Manager"})})}),Object(S.jsx)(C,{})]}),D)}},[[134,1,2]]]);
//# sourceMappingURL=main.ac6fa142.chunk.js.map