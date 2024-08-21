import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "./store/counter";
import { privacyAction } from "./store/prrivay";

const Controls = () => {
  const dispatch = useDispatch();
  const addInput = useRef();
  const subInput = useRef();

  const handalIncrement = () => {
    const action = counterActions.increment();
    dispatch(action);
  };
  const handalDecrement = () => {
    const action = counterActions.decrement();
    dispatch(action);
  };
  const hnadalAdd = () => {
    if (addInput.current.value === "") {
    } else {
      dispatch(counterActions.add({ num: addInput.current.value }));
    }
    addInput.current.value = "";
  };
  const handalSub = () => {
    dispatch(
      counterActions.sub({
        num: subInput.current.value,
      })
    );
    subInput.current.value = "";
  };
  const handalPrivacy = () => {
    dispatch(privacyAction.togale());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handalIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handalDecrement}
        >
          -1
        </button>
        <button type="button" class="btn btn-warning" onClick={handalPrivacy}>
          Privacy
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          style={{ margin: "18px 0px 10px 0px" }}
          ref={addInput}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg px-3 gap-2"
          onClick={hnadalAdd}
        >
          add
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          style={{ margin: "18px 0px 10px 0px" }}
          ref={subInput}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handalSub}
        >
          substrack
        </button>
      </div>
    </>
  );
};

export default Controls;
