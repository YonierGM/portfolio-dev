import { FormContact } from "../components/Form/FormContact/FormContact";
import { Footer } from "../components/Footer/Footer"
export function Contact() {
  return (
    <section
      className="flex gap-4 w-full flex-col"
    >
      <div className="content max-sm:flex-col flex justify-center gap-4">
        <div className="">
          <FormContact />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
}
