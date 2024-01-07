import { ReuseableIcons } from "@/components/ReusableIcons";
import { Button } from "@/components/ui/button";
import { AppWindowIcon, DeleteIcon, LucideAlignEndHorizontal } from "lucide-react";

const Blog = () => {
  return (
    <section className="flex items-center md:py-20 py-10 space-y-10 min-h-screen">
      <div className="container mx-auto text-center">
        <div className="text-6xl flex justify-center font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
          Coming Soon!
        </div>
      </div>
    </section>

  );
};

export default Blog;