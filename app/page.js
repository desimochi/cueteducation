import ServiceFlipBox from "@/component/ServiceFlipBox";

const services = [
  {
    title: 'IIM Call Predictor',
    description: 'IIM & NON-IIM COLLEGE PREDICTOR helps MBA aspirants generate a list of colleges based on CAT performance.',
    imgSrc: 'https://mbaroi.in/test/image/11.png',
    link: 'https://mbaroi.in/iim-call-predictor/',
  },
  {
    title: 'MBA Admission Predictor',
    description: 'Calculates required CAT percentile based on profile details as per IIM-A guidelines.',
    imgSrc: 'https://mbaroi.in/test/image/09.png',
    link: 'https://mbaroi.in/mba-admission-predictor/',
  },
];

export default function Home() {
  return (
    <>
  
      <main>
      <div className="max-w-7xl mx-auto pb-10 px-4 mt-6">
      <div className="flex flex-wrap -mx-4">
        {services.map((service, index) => (
          <ServiceFlipBox key={index} {...service} />
        ))}
      </div>
    </div>
      </main>
    </>
  );
}
