import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-D7l8D3v7.js";import{M as d,u as p}from"./ModalFunnel-B3L4qPIe.js";import"./iframe-BDSbo69l.js";import"./jsx-runtime-3CO4_yYD.js";import"./index-WrzbD7O6.js";import"./_commonjsHelpers-BCr5jcs0.js";import"./index-Bt3YSxOM.js";import"./index-CMu-bRpU.js";import"./index-DACGP-7d.js";import"./QueryClientProvider-CBbLygCb.js";import"./api-D9Qvzmsy.js";import"./path-BIiZHHRI.js";import"./emotion-react.browser.esm-BWTRK3db.js";import"./ellipsis-C1UI7iJ_.js";import"./index-DWYjr9LJ.js";import"./date-D1prhpve.js";import"./file-BOKWjNGN.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="98bb0a84-faa4-437b-82c7-c250bec25604",e._sentryDebugIdIdentifier="sentry-dbid-98bb0a84-faa4-437b-82c7-c250bec25604")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
