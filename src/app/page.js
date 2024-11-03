import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <Header/>
        <section className="pt-32 max-w-4xl mx-auto px-6">
          <div className="max-w-md mb-6">
            <h1 className="text-6xl font-bold "> Your on link <br/> for everything</h1>
            <h2 className="text-gray-500 text-xl mt-6">Share your links, Social Profile, Contact Info and more on one page</h2>
          </div>

          <form className="inline-flex items-center shadow-md">
            <span className="bg-white py-4 pl-4">my-links.id/</span>
            <input type="text" placeholder="Username" className="py-4"/>
            <button type="submit" className="bg-blue-500 text-white py-4 px-6">Join for free</button>
          </form>
        </section>
       
    </main>
  );
}
