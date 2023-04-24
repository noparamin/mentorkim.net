import Pentagon from '/public/pentagon.svg';
import Messenger from '/public/messenger.svg';

export default function Feature(){
    return(
        <section class="text-gray-600 body-font mt-12">
        <div class="container px-5 py-24 mx-auto">
            <h1 class="sm:text-5xl text-4xl font-bold title-font text-center text-gray-900 mb-20">특징
            </h1>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div class="p-4 md:w-1/2 flex">
                    <div class="w-32 h-32 inline-flex items-center justify-center rounded-full bg-teal-200 text-black mb-4 flex-shrink-0">
                        <Pentagon />
                    </div>
                    <div class="flex-grow pl-6">
                    <br></br>
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">오각형</h2>
                    <p class="leading-relaxed text-base">멘토님들의 전문성을 오각형으로 파악할 수 있습니다.</p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
                <div class="p-4 md:w-1/2 flex">
                    <div class="w-32 h-32 inline-flex items-center justify-center rounded-full bg-teal-200 mb-4 flex-shrink-0">
                        <Messenger />
                    </div>
                    <div class="flex-grow pl-6">
                    <br></br>
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">한줄평</h2>
                    <p class="leading-relaxed text-base">멘티들의 멘토님에 대한 한줄평을 읽어보실 수 있습니다</p>
                    <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}