import React from "react";

type Props =  {
  children: React.ReactNode
}

const DashboaedLayout = ({ children } : Props) => {
  <>
    <div>
      {children}
    </div>
  </>
};

export default DashboaedLayout;
