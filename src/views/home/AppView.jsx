import Image from "next/image";
import "./appview.css";

const AppView = () => {
  return (
    <div className="app-view">
      <img src="/app-view.svg" alt="" className="desktop" />
      <img src="/app-view-mobile.svg" alt="" className="mobile" />
    </div>
  );
};

export default AppView;
