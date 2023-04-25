import Pentagon from '/public/pentagon.svg';
import Messenger from '/public/messenger.svg';

export default function Feature(){
    return(
        <section className="text-gray-600 body-font mt-12">
        <div className="container px-5 py-24 mx-auto">
            <h1 className="sm:text-5xl text-4xl font-bold title-font text-center text-gray-900 mb-20">특징
            </h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className="p-4 md:w-1/2 flex">
                    <div className="w-32 h-32 inline-flex items-center justify-center rounded-full bg-teal-200 text-black mb-4 flex-shrink-0">
                        <Pentagon />
                    </div>
                    <div className="flex-grow pl-6">
                    <br></br>
                    <h2 className="text-gray-900 text-lg title-font font-bold mb-2">오각형</h2>
                    <p className="leading-relaxed text-base">멘토님들의 전문성을 오각형으로 파악할 수 있습니다.</p>
                    </div>
                </div>
                <div className="p-4 md:w-1/2 flex">
                    <div className="w-32 h-32 inline-flex items-center justify-center rounded-full bg-teal-200 mb-4 flex-shrink-0">
                        <Messenger />
                    </div>
                    <div className="flex-grow pl-6">
                    <br></br>
                    <h2 className="text-gray-900 text-lg title-font font-bold mb-2">한줄평</h2>
                    <p className="leading-relaxed text-base">멘티들의 멘토님에 대한 한줄평을 읽어보실 수 있습니다</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}