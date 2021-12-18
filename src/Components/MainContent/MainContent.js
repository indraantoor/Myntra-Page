import Sidebar from "../Sidebar/Sidebar";

const MainContent = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "20px", margin: "0 auto", marginTop: "10%" }}>
        <h1>Main Content</h1>
      </div>
    </div>
  );
};

export default MainContent;
