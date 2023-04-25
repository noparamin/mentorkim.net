import Link from 'next/link';

export default function Mentorlist(){
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">멘토님에 대한
                <br className="hidden lg:inline-block"/>한줄평을 남길 수 있어요!
                </h1>
                <p className="mb-8 leading-relaxed">SW마에스트로 최고의 멘토진께 좋은 한줄평 부탁드려요! SW마에스트로 최고의 멘토진께 좋은 한줄평 부탁드려요! SW마에스트로 최고의 멘토진께 좋은 한줄평 부탁드려요! SW마에스트로 최고의 멘토진께 좋은 한줄평 부탁드려요! SW마에스트로 최고의 멘토진께 좋은 한줄평 부탁드려요! SW마에스트로 최고의 멘토진께 좋은 한줄평 부탁드려요! SW마에스트로 최고의 멘토진께 좋은 한줄평 부탁드려요!</p>
                <div className="flex justify-center">
                    <Link href="/mentordetail/1" legacyBehavior>
                        <a className="inline-flex text-white bg-teal-200 border-0 py-2 px-6 focus:outline-none hover:bg-teal-300 rounded text-lg">한줄평 쓰러가기</a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img src="/images/pentagonImg.png" alt="오각형 사진" />
            </div>
        </>
    )
}