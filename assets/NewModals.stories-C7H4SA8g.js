import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-Qd8jjVvc.js";import{M as d}from"./ModalFunnel-edZdoLvB.js";import{u as p}from"./modal-DGH_cz-Y.js";import"./iframe-BgUMRKwZ.js";import"./jsx-runtime-FSVZywRi.js";import"./index-Vqgi1DQD.js";import"./_commonjsHelpers-CTGLd0QV.js";import"./index-bFevzIKE.js";import"./index-DTsg5hmj.js";import"./index-B-uMTWfr.js";import"./QueryClientProvider-BjuSI0xQ.js";import"./path--L-beOLM.js";import"./emotion-react.browser.esm-DWC2ne2b.js";import"./ellipsis-B5HCzuVn.js";import"./index-DyN2f_l2.js";import"./date-BgCvDEGS.js";import"./file-D6DP80n2.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c5d81140-93a7-4fe9-a2e8-6c6f4c8117af",e._sentryDebugIdIdentifier="sentry-dbid-c5d81140-93a7-4fe9-a2e8-6c6f4c8117af")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
