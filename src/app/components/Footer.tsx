import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className=" bg-white ">
      <div className="flex justify-between border-t md:px-10 px-4 py-3">
        <div className="flex items-center justify-center">Copyright &copy; 2024 and build by- @gxaryan</div>
        <div>
          <SocialLinks/>
        </div>
      </div>
    </footer>
  );
}
