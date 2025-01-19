import { Helmet } from "react-helmet";

const TermsAndConditions = () => {
  return (
   <>
    <Helmet>
    <title>Aditya Crafts</title> {/* Set the title of the page */}
    <meta
      name="description"
      content="Explore our achievements in the industry, including years of experience, happy customers, successful projects, and expert staff."
    />
    <meta
      name="keywords"
      content="experience, happy customers, successful projects, expert staff, business achievements, company statistics"
    />
  </Helmet>
   
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-10 mt-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          TERMS <span className="text-red-500">&</span> CONDITIONS
        </h1>
        <ul className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg">
          <li>
            1. All the furniture will be made by waterproof Phenol Bonded ISI
            stamp 100% Pine core plywood{" "}
            <span className="text-red-500 font-semibold">Aditya Crafts</span>.
          </li>
          <li>
            2. Outside imported Laminate/Veneer Finish, Inside will be Laminate
            (.8mm) Finish.
          </li>
          <li>
            3. Extra bill will be made for extra job apart from the mentioned
            quotation.
          </li>
          <li>
            4. <span className="font-semibold text-red-500">Payment Terms:</span>
            <ul className="ml-5 list-disc space-y-3 sm:space-y-4 mb-4 mt-4">
              <li>60% advance will be paid before work starts.</li>
              <li>20% will be paid after the structure is ready.</li>
              <li>20% will be paid before the project is completed.</li>
              <li>Any extra selection will cost extra money.</li>
              <li>10% will be made advance before starting the design.</li>
              <li>25% of Balance in advance before starting the interior work.</li>
              <li>
                R/A Bill will be submitted according to the progress of work another 68% before completion.
              </li>
            </ul>
          </li>
          <li>5. Work will be completed within 15 to 30 days after the design is finalized.</li>
          <li>
            6. Electrical bill may increase or decrease according to clients&apos;
            demand.
          </li>
          <li>
            7. The hinges we provide are Hettich/Hafele Merinolam Laminate.
          </li>
          <li>
            8. <span className="font-semibold text-red-500">5 Years</span>{" "}
            manufacturing Warranty on Installation.
          </li>
          <li>
            9. Any item which is not mentioned in the list will be provided
            only against additional charges.
          </li>
          <li>
            10. The key of the Flat will be handed over to the client after the
            final settlement.
          </li>
          <li>
            11. The rates will be valid for one month after the quotation is
            given.
          </li>
          <li>12. GST will be applicable.</li>
          <li>
            13. We are not responsible if the project gets delayed due to slow
            finalization of design or Payment issues from the client&apos;s end.
          </li>
          <li>
            14. Complementary Item/Discount will be adjusted at the time of
            Final closing payment.
          </li>
          <li>
            15. Advance is <span className="text-red-500">non-refundable</span>.
          </li>
        </ul>
      </div>
    </div>
   </>
  );
};

export default TermsAndConditions;

