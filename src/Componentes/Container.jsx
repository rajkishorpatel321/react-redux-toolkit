const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "50rem", marginLeft: "210px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
