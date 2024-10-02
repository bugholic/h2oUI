import Image from "next/image"
import cardImage from "../../../assets/images/cardImage.svg"
import React, { FC } from "react"


const cardContent =
{
    cardData1:
    {
        imgLink: cardImage,
        heading: "How to write content about your photographs",
        content: "Lorem ipsum dolor, sit amet adipi elit. Quaerat adipisci minus culpa repudiandae perferendis reiciendis!",
        topic: "Growth",
        readTime: "7 mins"
    },
    cardData2:
    {
        imgLink: cardImage,
        heading: "How to write content about your photographs",
        content: "Lorem ipsum dolor, sit amet adipi elit. Quaerat adipisci minus culpa repudiandae perferendis reiciendis!",
        topic: "Fitness",
        readTime: "9 mins"
    },
    cardData3:
    {
        imgLink: cardImage,
        heading: "How to write content about your photographs",
        content: "Lorem ipsum dolor, sit amet adipi elit. Quaerat adipisci minus culpa repudiandae perferendis reiciendis!",
        topic: "Growth",
        readTime: "7 mins"
    }
}

type cardContentProps = {
    imgLink: any,
    heading: String,
    content: String,
    topic: String,
    readTime: String
}

interface cardProps {
    cardContentProps: cardContentProps
}

// In Page component

const Card: FC<cardProps> = ({ cardContentProps }) => {
    return (
        <section className='flex flex-col border border-gray-300'>
            <div className="w-full">
                <Image
                    src={cardContentProps.imgLink}
                    alt="img"
                    width={100}
                    height={100}
                    className="w-full"
                />
            </div>
            <h3 className="font-bold p-5 font-serif">
                {cardContentProps.heading}
            </h3>
            <p className="p-5 text-gray-600 font-serif">
                {cardContentProps.content}
            </p>

            <div className="p-5 text-gray-600 font-semibold border border-gray-300">
                {cardContentProps.topic} | {cardContentProps.readTime} Read
            </div>
        </section>
    )
}

const NewsUpdate = () => {
    return (
        <main className="p-10 w-full">
            <h1 className='commonPageHeading text-center my-10'>
                News And Updates
            </h1>
            <div className="sm:grid grid-flow-col gap-4 ">

                {
                    Object.values(cardContent).map((data, index) => (
                        <Card key={index} cardContentProps={data} />
                    ))
                }
            </div>
        </main>
    )
}

export default NewsUpdate