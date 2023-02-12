import Link from "next/link";
import Image from "next/image";

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
        <Link href={data.href}>
            <a className="m-4 p-6 text-left w-1/4 min-h-2/4 bg-teal-600 border border-teal-600 rounded-lg text-white shadow-teal-600">
              <Image src={data.imageSrc} width={500} height={300} alt={data.imageDescription} />
              <h2 className="font-mono text-2xl mb-4">{data.title}</h2>
              <p className="font-mono">{data.description}</p>
            </a>
        </Link>
    )
}

export default Card2;