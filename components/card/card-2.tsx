import Link from "next/link"
import Image from "next/image"
import { prefix } from '../../utils/prefix'

type ProjectDataModel = {
    href: string;
    title: string;
    description: string;
    imageSrc: string;
    imageDescription: string;
}
interface Card2Props {
    data: ProjectDataModel
}

const Card2: React.FC<Card2Props> = ({ data }) => {
    return (
        <Link href={data.href} className="m-4 p-6 text-left md:w-60  min-h-2/4 bg-teal-600 border border-teal-600 rounded-lg shadow-teal-600">
            <Image src={`${prefix}${data.imageSrc}`} width={500} height={300} alt={data.imageDescription} />
            <h2 className="font-mono text-neutral-800 text-center text-2xl my-4">{data.title}</h2>
        </Link>
    )
}

export default Card2