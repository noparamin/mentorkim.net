import Link from 'next/link';

export default function Header(){
    return (
        <>
        <footer className="text-gray-600 body-font">
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
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

                <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 미니프로젝트 33팀 -
                    <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">권기오 권민석 김민서 김상엽 최현식</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                    </a>
                    <a className="ml-3 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                    </a>
                    <a className="ml-3 text-gray-500">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                    </a>
                    <a className="ml-3 text-gray-500">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                    </a>
                </span>
                </div>
            </div>
        </footer>
        </>
    )
}