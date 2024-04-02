import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className=" bg-primary-300 rounded-[30px] px-14 py-[76px] flex w-full">
      {/* <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Mail /> info@yourdomain.com
      </h5> */}

      <div className="flex flex-col gap-16 w-5/6">
      <h5 className="font-jost text-3xl">
        Pregunta sobre nuestros servicios en:
      </h5>
        <h5 className="flex  gap-4 items-center text-xl font-jost tracking-tight">
          {" "}
          <a href="" className="flex justify-center center gap-4">
            <Phone />
            WhatsApp - 311 8357252{" "}
          </a>
        </h5>
        <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
          {" "}
          <a href="" className="flex justify-center center gap-4">
            {" "}
            <Web /> www.armoniaybelleza.com
          </a>
        </h5>
      </div>
      <div className="w-2/3 center flex justify-center">
      <iframe className="rounded" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3977.832087715694!2d-75.23536946375425!3d4.4423339877986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c48f02d4af49%3A0xe9bb3a7722e0d1b!2zQ2wuIDE3ICMjOC01MiwgSWJhZ3XDqSwgVG9saW1h!5e0!3m2!1ses-419!2sco!4v1625754506893!5m2!1ses-419!2sco" height="450" width="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>

      </div>
    </div>
  );
};

export default ContactInfo;
