import { links } from "../../data/dummy";
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 bg-white shadow-2xl h-screen w-72 z-50 flex flex-col items-center md:shadow-xl">
      <div className="logo ">
        <h2>Logo</h2>
      </div>
      <div className="mt-10 relative w-full">
        {links.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-1 mb-4 m-2 bg-slate-100 p-2 rounded-md items-center hover:bg-slate-200 cursor-pointer"
          >
            <span className="h-5 w-5 mt-0">{item.icon}</span>
            <span className="capitalize text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
// test commit