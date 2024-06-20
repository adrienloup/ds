import { TestAddDataAndAriaAttr } from "./TestAddDataAndAriaAttr/TestAddDataAndAriaAttr";
import { TestInverseDataFlow } from "./TestInverseDataFlow/TestInverseDataFlow";
import { TestListSearchable } from "./TestListSearchable/TestListSearchable";
import { TestUseCallback } from "./TestUseCallback/TestUseCallback";
import { TestCustomHook } from "./TestCustomHook/TestCustomHook";
import { TestUseEffect } from "./TestUseEffect/TestUseEffect";
import { TestUseMemo } from "./TestUseMemo/TestUseMemo";
import { TestUseRef } from "./TestUseRef/TestUseRef";
import { TestCount } from "./TestCount/TestCount";
import { TestMemo } from "./TestMemo/TestMemo";
import style from "./Tests.module.scss";
import { TestUseReducer } from "./TestUseReducer/TestUseReducer";

export const Tests = () => {
  console.log("Tests");

  return (
    <div className={style.tests}>
      {/* COUNT */}
      <div className={style.test}>
        <div className={style.title}>Count</div>
        <TestCount />
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
    </div>
  );
};
