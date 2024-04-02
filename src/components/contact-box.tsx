import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className="col-span-12 bg-primary-300 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full">
      {/* <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Mail /> info@yourdomain.com
      </h5> */}
      <h5 className="font-jost text-3xl">Pregunta sobre nuestros servicios en:</h5>
      <h5 className="flex  gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <a href="" className="flex justify-center center gap-4"><Phone />311 8357252 </a>
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <a href="" className="flex justify-center center gap-4"> <Web /> www.armoniaybelleza.com</a>
      </h5>
    </div>
  );
};

export default ContactInfo;
