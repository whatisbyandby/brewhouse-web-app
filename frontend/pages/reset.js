import Reset from "../components/user/Reset";

const ResetPage = props => {
  return (
    <div>
      <Reset resetToken={props.query.resetToken} />
    </div>
  );
};

export default ResetPage;
