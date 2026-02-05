import PropertyDetails from "../components/PropertyDetails";

const PropertyLayout: React.FC = () => {

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen text-primary px-3 ">
        <div className="flex flex-col max-w-7xl w-full justify-center items-center gap-8 mb-40">
            <section className="flex flex-col justify-center items-center  ">
                <img
                    src="/images/house-images/product-placement.png"
                    loading="eager"
                    className="w-full sm:w-2/3 object-contain "
                    alt="Background Image"
                />
            </section>
            <section className="flex flex-col w-full sm:px-32 gap-4 text-base font-regola ">
                <p className='flex font-regola-semibold text-4xl'>
                    Property Details
                </p>
                <p>
                    Effortless modern living in this brand new duplex, thoughtfully designed for today’s lifestyle.
                </p>
                <div>
                    <h3 className="flex font-regola-semibold text-xl">
                        Main Benefits:
                    </h3>
                    <p>
                        Each side features its own private 3 bed/3.5 bath layout with a dedicated entrance and garage. This home combines privacy, functionality, and contemporary elegance in one exceptional package.
                    </p>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center w-full sm:px-32">
                <PropertyDetails/>
            </section>
            <section className="flex flex-col w-full sm:px-32 gap-4 text-base font-regola ">
                <div className="flex flex-col gap-2">
                    <h3 className="flex font-regola-semibold text-xl">
                        Key Properties:
                    </h3>
                    <p>
                        Nestled in the heart of Kitsilano, this brand-new duplex offers a lifestyle that is steps away from Jericho Beach. Residents enjoy immediate access to one of Vancouver’s premier waterfront parks. This place is perfect for morning runs along the seawall, family picnics on grassy fields, sailing lessons at the Jericho Sailing Centre, or simply unwinding with breathtaking sunset views over English Bay and the North Shore Mountains. This location delivers coastal serenity and urban convenience in one of the city’s most prestigious neighborhoods.
                    </p>
                </div>
            </section>
        </div>
    </div>
  );
};

export default PropertyLayout;