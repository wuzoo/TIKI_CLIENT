import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-kWlpjU6y.js";import{M as d}from"./ModalFunnel-CHz-QLFJ.js";import{u as p}from"./modal-DZ59R1fC.js";import"./iframe-PJWLmOee.js";import"./jsx-runtime-BDySRnlA.js";import"./index-D4m7OLEW.js";import"./_commonjsHelpers-D-Nfn-lu.js";import"./index-DBh5KmhI.js";import"./index-C623uq0S.js";import"./index-B-uMTWfr.js";import"./QueryClientProvider-D8UZnQyV.js";import"./path-CAIMWy8Y.js";import"./emotion-react.browser.esm-BWcZ_Lbn.js";import"./ellipsis-C6xv6Gso.js";import"./index-B_RzXqwj.js";import"./date-CcgB0w2Q.js";import"./file-0jazOqLH.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c5d81140-93a7-4fe9-a2e8-6c6f4c8117af",e._sentryDebugIdIdentifier="sentry-dbid-c5d81140-93a7-4fe9-a2e8-6c6f4c8117af")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const j=["ModalsTest"];export{o as ModalsTest,j as __namedExportsOrder,F as default};
