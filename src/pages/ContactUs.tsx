import JotForm from "../components/JotForm";
import { email, phone } from "../utils/globals";

const ContactUs: React.FC = () => {

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen text-primary px-3 ">
        <div className="flex sm:flex-row flex-col max-w-7xl w-full justify-between items-center gap-y-2">
            <section className="flex w-full sm:w-1/2 flex-col text-primary font-regola text-lg gap-8 ">
                <h1 className="flex text-3xl font-regola-semibold">
                    Contact Us
                </h1>
                <div className="flex flex-col gap-4">
                    <p>
                        Have any questions or concerns regarding the house?
                    </p>
                    <p>
                        To enquire about our properties, please use the online contact form, call us or email us, we aim torespond within one day 
                    </p>
                    <p>
                        You can reach us by phone at +1 {phone} or using one of the online form to the side.
                    </p>
                    <p>
                        You can reach us by email at {email}
                    </p>
                </div>
            </section>
            <section className="flex w-full sm:w-5/11 ">
                <JotForm/>
            </section>
        </div>
    </div>
  );
};
export default ContactUs;