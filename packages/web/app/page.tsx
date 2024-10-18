"use client"
import { CardSlider } from "components/CardSlider"
// import { Metadata } from "next"
// import { Button } from "components/Button/Button"
// import { LP_GRID_ITEMS } from "lp-items"
// import { useFetchProductsQuery } from "__generated__/graphql"
// import ImageSlider from "components/ImageSlider"
import Navbar from "components/Navbar"
// import Link from "next/link"

// export const metadata: Metadata = {
//   title: "Next.js Enterprise Boilerplate",
//   twitter: {
//     card: "summary_large_image",
//   },
//   openGraph: {
//     url: "https://next-enterprise.vercel.app/",
//     images: [
//       {
//         width: 1200,
//         height: 630,
//         url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
//       },
//     ],
//   },
// }

export default function Web() {
  // const [products] = useFetchProductsQuery({
  //   variables: { limit: 10 }
  // })

  // const { data, fetching, error } = products

  // if (fetching) return <div>Fetching ........</div>
  // if (error) return <div>Error ${error.name}</div>

  // console.log(data)

  return (
    <>
      <Navbar />
      {/* <ImageSlider /> */}
      <CardSlider />
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 container my-8"> */}
      {/*   {data?.getProduct.map((_) => ( */}
      {/*     <div key={_.id}> */}
      {/*       <h4 className="text-xl"> */}
      {/*         {_.name} */}
      {/*       </h4> */}
      {/*       <Link target="_blank" href={`${_.id}`}> */}
      {/*         <img src={_.imageUrl} className="h-[400px] object-cover w-full transition ease-in-out duration-100 hover:scale-110" /> */}
      {/*       </Link> */}
      {/*     </div> */}
      {/*   ))} */}
      {/* </div> */}
    </>
  )
}
