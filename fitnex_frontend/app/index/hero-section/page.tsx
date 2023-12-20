const HeroSection = () => {
    return ( 
    <section className="md:py-20 py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
        <div className="container mx-auto text-center">
            <div className="text-6xl flex justify-center font-bold md:px-20 pb-10
            text-gradient
            bg-gradient-to-r
            from-blue-500
            to-green-300
            bg-clip-text
            text-transparent


            
            ">
                Start Your Fitness Journey with Fitnex

            </div>

            <p className="text-lg md:text-xl md-10
            bg-gradient-to-r
            from-gray-200
            to-gray-500
            bg-clip-text
            text-transparent
            font-bold
            
            "
            >
                   Take the first step towards a healthier, stronger you! Get started today and discover the power to shape lives through the art of exercise.
            </p>
            <div className="flex gap-4 justify-center pt-10">
                <button className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold">Get Started</button>
                <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">Learn More</button>

            </div>

            <div className="pt-10">

       
                
            <video className="rounded-xl" autoPlay muted loop>
                <source src="/content/hero-1.mp4" type="video/mp4" />

            </video>

            </div>

        </div>
    
    </section> );
}
 
export default HeroSection;