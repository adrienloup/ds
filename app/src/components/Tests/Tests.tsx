import { TestIntersectionObserver } from "./TestIntersectionObserver/TestIntersectionObserver";
import { TestHigherOrderComponent } from "./TestHigherOrderComponent/TestHigherOrderComponent";
import { TestAddDataAndAriaAttr } from "./TestAddDataAndAriaAttr/TestAddDataAndAriaAttr";
import { TestInverseDataFlow } from "./TestInverseDataFlow/TestInverseDataFlow";
import { TestListSearchable } from "./TestListSearchable/TestListSearchable";
import { TestUseCallback } from "./TestUseCallback/TestUseCallback";
import { TestCustomHook } from "./TestCustomHook/TestCustomHook";
import { TestUseReducer } from "./TestUseReducer/TestUseReducer";
import { TestNoRerender } from "./TestNoRerender/TestNoRerender";
import { TestUseEffect } from "./TestUseEffect/TestUseEffect";
import { TestCounter } from "./TestCounter/TestCounter";
import { TestUseMemo } from "./TestUseMemo/TestUseMemo";
import { TestContext } from "./TestContext/TestContext";
import { TestUseRef } from "./TestUseRef/TestUseRef";
import { TestMemo } from "./TestMemo/TestMemo";
import style from "./Tests.module.scss";

export const Tests = () => {
  console.log("Tests");

  return (
    <div className={style.tests}>
      {/* COUNT */}
      <div className={style.test}>
        <div className={style.title}>Count</div>
        <TestCounter />
      </div>

      {/* CUSTOM HOOKS */}
      <div className={style.test}>
        <div className={style.title}>Custom hooks</div>
        <TestCustomHook />
      </div>

      {/* INVERSE DATA FLOW */}
      <div className={style.test}>
        <div className={style.title}>Inverse data flow</div>
        <TestInverseDataFlow />
      </div>

      {/* LIST SEARCHABLE */}
      <div className={style.test}>
        <div className={style.title}>List searchable</div>
        <TestListSearchable />
      </div>

      {/* DATA AND ARIA ATTRIBUTES */}
      <div className={style.test}>
        <div className={style.title}>Data and aria attributes</div>
        <TestAddDataAndAriaAttr data-id="id" aria-label="label">
          data-id, aria-label
        </TestAddDataAndAriaAttr>
      </div>

      {/* USEEFFECT */}
      <div className={style.test}>
        <div className={style.title}>useEffect</div>
        <TestUseEffect />
      </div>

      {/* USEMEMO */}
      <div className={style.test}>
        <div className={style.title}>useMemo</div>
        <TestUseMemo />
      </div>

      {/* USEREF */}
      <div className={style.test}>
        <div className={style.title}>useRef</div>
        <TestUseRef />
      </div>

      {/* USECALLBACK */}
      <div className={style.test}>
        <div className={style.title}>useCallback</div>
        <TestUseCallback />
      </div>

      {/* USEREDUCER */}
      <div className={style.test}>
        <div className={style.title}>useReducer</div>
        <TestUseReducer />
      </div>

      {/* MEMO */}
      <div className={style.test}>
        <div className={style.title}>Memo</div>
        <TestMemo />
      </div>

      {/* INTERSECTION OBSERVER */}
      <div className={style.test}>
        <div className={style.title}>Intersection Observer</div>
        <TestIntersectionObserver />
      </div>

      {/* NO RE-RENDER */}
      <div className={style.test}>
        <div className={style.title}>No re-render</div>
        <TestNoRerender />
      </div>

      {/* HIGHER-ORDER COMPONENT */}
      <div className={style.test}>
        <div className={style.title}>Higher-Order Component</div>
        <TestHigherOrderComponent />
      </div>

      {/* CONTEXT */}
      <div className={style.test}>
        <div className={style.title}>Context</div>
        <TestContext />
      </div>
    </div>
  );
};
