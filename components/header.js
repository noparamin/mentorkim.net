import Link from 'next/link';

export default function Header(){
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href='/' legacyBehavior>
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg viewBox="-50 -50 250 250" class="icon">
                            <g>
                                <path d="M74.2995 0.779663L0.581299 54.339L28.7391 141H119.86L146.259 59.7522C147.308 56.5244 146.159 52.9884 143.413 50.9934L74.2995 0.779663Z" fill="#0EA6A6"></path>
                                <path d="M0.581543 54.3391L28.7394 141H84.5603L106.496 73.4897C107.545 70.2619 106.396 66.7259 103.65 64.7309L44.9641 22.0933L0.581543 54.3391Z" fill="#2BB1B1"></path>
                                <path
                                    d="M69.6951 75.3093L20.7067 39.7173L0.581543 54.339L28.7394 141H54.0425L72.5408 84.0679C73.5897 80.8401 72.4407 77.3042 69.6949 75.3092L69.6951 75.3093Z"
                                    fill="#65C6C6"
                                ></path>
                                <path d="M1.2993 53.8176L0.581543 54.3391L28.7394 141H30.213L45.8494 92.876C46.8982 89.6483 45.7493 86.1122 43.0034 84.1173L1.2993 53.8176Z" fill="#7ACECE"></path>
                            </g>
                        </svg>
                        <span className="text-3xl font-extrabold w-64">김멘토넷</span>
                        </a>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href='/' legacyBehavior >
                            <a className="mr-5 text-xl hover:text-gray-900">홈</a>
                        </Link>
                        <Link href='/mentorlist' legacyBehavior >
                            <a className="mr-5 text-xl hover:text-gray-900">멘토리스트</a>
                        </Link>
                        <Link href='/mentordetail/1' legacyBehavior >
                            <a className="mr-5 text-xl hover:text-gray-900">한줄평</a>
                        </Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">그냥 버튼
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                </div>
            </header>
        </>
    )
}