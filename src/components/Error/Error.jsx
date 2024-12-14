import { useSelector } from "react-redux";
import { selectError } from "../../redux/contactsSlice";

const Error = () => {
  const error = useSelector(selectError);

  return (
    <div>
      <h2> Error: {error} </h2>
    </div>
  );
};

export default Error;
