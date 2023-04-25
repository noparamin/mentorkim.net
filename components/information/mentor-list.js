const mentorInfo = require('../mentorInfo');
import Tag from "./tag";
import Link from 'next/link';

export default function MentorListInformation() {
    let id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        {
                            id.map((id, index) => (
                                <div className="py-8 flex flex-wrap md:flex-nowrap">
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span className="font-semibold title-font text-gray-700"><img alt="p1" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={`../mentor/${id}.${mentorInfo[id].file}`}></img></span>
                                    </div>
                                    <div className="md:flex-grow">
                                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{mentorInfo[id].name} 멘토</h2>
                                        <Tag
                                            id={id}
                                        />
                                        <Link href={`/mentordetail/${id}`} legacyBehavior >
                                            <a className="text-indigo-500 inline-flex items-center mt-4">한줄평 보러가기
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            ))  
                        }
                    </div>
                </div>
            </section>
        </>
    )
}