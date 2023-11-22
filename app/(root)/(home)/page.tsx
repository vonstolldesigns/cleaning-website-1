import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import CardsSection from "@/components/CardsSection";
import HeroSection from "@/components/HeroSection";
import PriceCardsDisplay from "@/components/PriceCardsDisplay";
import Quote1 from "@/components/Quote1";

const HomePage = () => {
  const cardsData = [
    {
      title: "One Time",
      description1:
        'Need a thorough one-time clean for your space? Our "One Time Clean" service is your solution.',
      description2: "Perfect for special occasions or one-off needs.",
      type: "One time clean only",
      mainCard: false,
      isPopular: false,
      buttonText: "Get a quote",
    },
    {
      title: "Cleaners Pass",
      description1:
        'With our "Cleaners Pass" for residential spaces, you\'ll enjoy regular cleaning sessions tailored to your schedule.',
      description2: "Regular home cleaning for a sparkling living space.",
      type: "Residential cleaning only",
      isPopular: true,
      mainCard: true,
      buttonText: "Get a quote",
    },
    {
      title: "Janitors Pass",
      description1:
        'Maintain a spotless and inviting work environment with our "Janitors Pass" for commercial spaces.',
      description2: "Dedicated janitorial services for your commercial space.",
      type: "Commercial cleaning only",
      isPopular: true,
      mainCard: false,
      buttonText: "Get a quote",
    },
    // ... add more cards data as needed
  ];

  return (
    <>
      <HeroSection />
      <Quote1 />
      <AboutUs />
      <PriceCardsDisplay cardsData={cardsData} />
      <Banner />
      <CardsSection />
    </>
  );
};

export default HomePage;
