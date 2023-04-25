import Search from './search';
import Link from 'next/link';

export default function Mentorrating(){
    return (
        <>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Search />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    멘토리스트를 볼 수 있습니다!
                    <br className="hidden lg:inline-block"/>
                    오늘도 구경하러 가보실까요?!
                </h1>
                <p className="mb-8 leading-relaxed ">SW마에스트로 최고의 멘토진들을 구경하러 가볼까요? SW마에스트로 최고의 멘토진들을 구경하러 가볼까요? SW마에스트로 최고의 멘토진들을 구경하러 가볼까요? SW마에스트로 최고의 멘토진들을 구경하러 가볼까요? SW마에스트로 최고의 멘토진들을 구경하러 가볼까요? </p>
                <div className="flex justify-center">
                    <Link href="/mentorlist" legacyBehavior>
                        <a className="inline-flex text-white bg-teal-200 border-0 py-2 px-6 focus:outline-none hover:bg-teal-300 rounded text-lg">멘토 보러가기</a>
                    </Link>
                </div>
            </div>
        </>
    )
}