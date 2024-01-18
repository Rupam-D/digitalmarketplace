import MaxWidthContainer from "@/components/max-width-container";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { PERKS, perks } from "@/constants/perks";



export default function Home() {
  return (
    <>
      <MaxWidthContainer>
        <div className="py-20 text-center flex flex-col items-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high quality {" "}
            <span className="text-purple-600">Digital assests</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. A digital marketplace made by Rupam Das(aka rupam.coder).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>Browse trending Products</Link>
            <Button variant={"secondary"}>Our Promise &rarr;</Button>
          </div>
        </div>
        {/* LIST PRODUCTS */}
      </MaxWidthContainer>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthContainer className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">

            {
              perks.map((item: PERKS) => (
                <div key={item.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center bg-blue-500">

                  <div className="md:flex-shrink-0 flex justify-center bg-red-200">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-900 ">
                      <item.icon className="w-1/3 h-1/3" />
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))
            }

          </div>
        </MaxWidthContainer>

      </section>
    </>
  )
}

