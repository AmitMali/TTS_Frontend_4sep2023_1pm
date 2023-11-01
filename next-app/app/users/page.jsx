import Usercard from "../components/usercard/usercard";

const page = () => {
  return (
    <div className="flex flex-wrap flex-row gap-2 ">
      <div className=" w-3/12 ">
        <Usercard />
      </div>
    </div>
  );
};

export default page;
