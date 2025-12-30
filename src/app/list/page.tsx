import Filter from "@/src/components/Filter"; 
import Skeleton from "@/src/components/Skeleton";
import { wixClientServer } from "@/src/lib/wixClientServer";
import ProductList from "@/src/components/ProductList";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
    const wixClient = await wixClientServer();

    const cat = await wixClient.collections.getCollectionBySlug(
        searchParams.cat || "all-products"
    );

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            {/* CAMPAIGN */}
            <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
                <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                    <h1 className="text-4xl font-semibold leading-12 text-gray-700">
                        Grab up to 50% off on
                        <br /> Selected Products
                    </h1>
                    <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
                        Buy Now
                    </button>
                </div>
                <div className="relative w-1/3">
                    <Image src="/woman.png" alt="" fill className="object-contain" />
                </div>
            </div>
            {/* FILTER */}
            <Filter />
            {/* PRODUCTS */}
            <h1 className="mt-12 text-xl font-semibold">{cat?.collection?.name} For You!</h1>
            <Suspense fallback={<Skeleton />}>
                <ProductList
                    categoryId={
                        cat.collection?._id || "87448008-25f0-4fc9-8ae6-3a4f8858b75f"
                    }
                    searchParams={searchParams}
                />
            </Suspense>
        </div>
    );
};

export default ListPage;