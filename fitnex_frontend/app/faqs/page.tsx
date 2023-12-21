import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Faqs = () => {
    return (
        <div className="md:py-20 p-10 flex items-center space-y-10 min-h-screen">
        <div className="border-[1px] md:w-2/3 mx-auto p-10 rounded-xl justify-center">
            <div className="text-4xl font-bold mb-5">
                <div className="text-4xl font-bold mb-5 text-center text-gradient bg-gradient-to-r from-white to-gray-800 bg-clip-text text-transparent">
                    Frequently Asked Questions 
                </div>
            </div>
            <div>
            <Accordion type="single" collapsible className="w-full text-lg">
                <AccordionItem value="item-1">
                <AccordionTrigger>Do I need special equipment for the exercises?</AccordionTrigger>
                <AccordionContent className="text-blue-300 text-lg">
                    Many of our exercises can be done with minimal or no equipment. We offer a variety of options to suit different preferences and equipment availability.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                <AccordionTrigger>How do I access workout routines tailored to my goals?</AccordionTrigger>
                <AccordionContent className="text-blue-300 text-lg">
                    You can find personalized workout routines by selecting your fitness goals on our platform. Whether you aim to lose weight, build muscle, or improve endurance, we have tailored plans for you.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                <AccordionTrigger>Are the exercises suitable for all fitness levels?</AccordionTrigger>
                <AccordionContent className="text-blue-300 text-lg">
                    Yes, our exercises are designed to accommodate different fitness levels, from beginners to advanced trainers. Modifications and progressions are often included.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                <AccordionTrigger>How often should I change my workout routine?</AccordionTrigger>
                <AccordionContent className="text-blue-300 text-lg">
                    It&apos;s beneficial to introduce variety into your workout routine every few weeks to prevent plateaus and keep your body challenged. Our platform may suggest routine changes based on your progress and goals.
                </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    </div>
);
}

export default Faqs;