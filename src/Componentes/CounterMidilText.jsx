import { useSelector } from "react-redux";

const CounterMidilText = () => {
  const { counterVal } = useSelector((store) => store.counter);
  const privacy = useSelector((store) => store.privacy);
  // const privacy = useSelector((store) => store.privacy);
  return (
    <p className="lead mb-4">
      counter value: {privacy ? counterVal : "!!!!!!!!"}
    </p>
  );
};
export default CounterMidilText;
