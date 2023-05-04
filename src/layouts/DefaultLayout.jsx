import NavBar from "../components/NavBar";

function DefaultLayout({ children, className }) {
  return (
    <div className={`bg-slate-100 ${className}`}>
      {children}
      <NavBar />
    </div>
  );
}

export default DefaultLayout;
