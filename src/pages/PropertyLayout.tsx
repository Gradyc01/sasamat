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
                {/* <FloorDetail 
                    title="First Floor" 
                    description="Three to four bedrooms and two to three and a half bathrooms"
                    explanation="This open-concept hub is made for daily living and socializing. Boasting a fully open layout, the dining/kitchen areas connect seamlessly to the living space for smooth flow-ideal as the go-to spot for family gatherings and daily interactions. A connecting porch draws in natural light, paired with high ceilings for a bright, airy feel. Fitted with custom cabinetry, premium tiles and Miele appliances, it blends luxury and practicality. Whole-area AC ensures year-round comfort."
                    chosenImage={1} />
                <FloorDetail 
                    title="Second Floor" 
                    description="Three to four bedrooms and two to three and a half bathrooms"
                    explanation={"This layout prioritizes \"rest + privacy,\" with multiple en-suite bedrooms ensuring full seclusion for each retreat. Stair-accessed from the main floor for easy flow, high ceilings flood all bedrooms with natural light. Its thoughtful design suits 3-4-person families, while refined details carry the home's premium vibe-crafting the ideal private spot to unwind."}
                    chosenImage={2} />
                <FloorDetail 
                    title="Third Floor" 
                    description="Three to four bedrooms and two to three and a half bathrooms"
                    explanation={"Focusing on \"flexible functional zones and scientific storage,\" this space is connected to the main floor staircase for seamless access. It can be adapted for use as a utility area or storage hub, with an organized layout that efficiently accommodates household items to eliminate clutter. The use of premium materials fosters an atmosphere of tranquility, ensuring the furniture's longevity while preserving the home's sophisticated aesthetic. This practical addition seamlessly integrates with the primary living space."}
                    chosenImage={3} /> */}
                <PropertyDetails/>
            </section>
            <section className="flex flex-col w-full sm:px-32 gap-4 text-base font-regola ">
                <div className="flex flex-col gap-2">
                    <h3 className="flex font-regola-semibold text-xl">
                        Key Properties:
                    </h3>
                    <p>
                        Nestled in the heart of Kitsilano’s West Point Grey, this brand-new duplex offers a lifestyle that is steps away from Jericho Beach. Residents enjoy immediate access to one of Vancouver’s premier waterfront parks. This place is perfect for morning runs along the seawall, family picnics on grassy fields, sailing lessons at the Jericho Sailing Centre, or simply unwinding with breathtaking sunset views over English Bay and the North Shore Mountains. This location delivers coastal serenity and urban convenience in one of the city’s most prestigious neighborhoods.
                    </p>
                </div>
            </section>
        </div>
    </div>
  );
};

export default PropertyLayout;