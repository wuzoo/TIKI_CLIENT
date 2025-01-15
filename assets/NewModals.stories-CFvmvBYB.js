import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-zkvds-JB.js";import{M as i,u as p}from"./ModalFunnel-Bz_YfSoj.js";import"./iframe-C9tcbjn1.js";import"./jsx-runtime-BtWJh0sj.js";import"./index-C9zVwuqM.js";import"./_commonjsHelpers-BD_-Q7dq.js";import"./index-8aeUlQ8v.js";import"./index-BzqRhAmC.js";import"./index-BfBeqfpZ.js";import"./useOutsideClick-Dx7H0-L2.js";import"./useOverlay-DyX1SwK6.js";import"./QueryClientProvider-gvSvMhuk.js";import"./path-B-9TSX1a.js";import"./emotion-react.browser.esm-BQhGCPDg.js";import"./ellipsis-CJ2okbSS.js";import"./index-DDsqRTxc.js";import"./date-BAQG3XMP.js";import"./file-g0dT1I0d.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e4ddcf15-3264-4d69-8eec-b19735c62ddd",e._sentryDebugIdIdentifier="sentry-dbid-e4ddcf15-3264-4d69-8eec-b19735c62ddd")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const A=["ModalsTest"];export{o as ModalsTest,A as __namedExportsOrder,j as default};
