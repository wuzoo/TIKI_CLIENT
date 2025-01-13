import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-CdV0COkH.js";import{M as i,u as p}from"./ModalFunnel-DAoASZb8.js";import"./iframe-CWVS7UdP.js";import"./jsx-runtime-BPy_wrao.js";import"./index-lGH1BTgI.js";import"./_commonjsHelpers-Du8xCOpO.js";import"./index-Di1CuZXt.js";import"./index-BIP_o8cu.js";import"./emotion-react.browser.esm-C0QCxP3n.js";import"./QueryClientProvider-CdHuG8NM.js";import"./path-CqGWSWU7.js";import"./index-4KIOoTFo.js";import"./ellipsis-DCRb4iX-.js";import"./file-CtzA_ayy.js";import"./date-CNvU6d3H.js";import"./useOutsideClick-DkkbTCV7.js";import"./useOverlay-DDnQUrhO.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a10dbe7f-64a4-4411-ac12-48d689811d4d",e._sentryDebugIdIdentifier="sentry-dbid-a10dbe7f-64a4-4411-ac12-48d689811d4d")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const j=["ModalsTest"];export{o as ModalsTest,j as __namedExportsOrder,F as default};
