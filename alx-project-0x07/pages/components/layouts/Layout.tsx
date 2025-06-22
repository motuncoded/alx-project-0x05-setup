// Update the import path below to the actual location of your interfaces file.
// For example, if your interfaces are in 'src/interfaces/index.ts', use the following:
import { ReactComponentProps } from "../../../interfaces/index";
// Or adjust the path as needed based on your project structure.

import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<ReactComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
