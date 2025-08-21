import { FormContactMinimal } from "../components/Form/FormContact/Minimal";
import { InfoContacto } from "../components/InfoContacto/InfoContacto";
import { Footer } from "../components/Footer/Footer"
export function Contact() {
  return (
    <section
      className="flex gap-4 w-full flex-col"
    >
      <div className="content max-sm:flex-col flex justify-center gap-4">
        {/* <div className="">
          <InfoContacto />
        </div> */}
        <div className="">
          <FormContactMinimal />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
}
